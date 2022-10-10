const Tour = require("./../models/tourModel");
const APIFeatures = require("./../utils/apiFeatures");

const getCheapestTours = async (req, res, next) => {
  req.query.limit = "3";
  req.query.sort = "price";
  req.query.fields = "name,price,ratingsAverage,summary,difficulty";
  next();
};
const viewCount = async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);
  await Tour.findByIdAndUpdate(req.params.id, { views: tour.views + 1 });
  next();
};
const getTrendingTours = async (req, res, next) => {
  req.query.limit = "3";
  req.query.sort = "-views";
  next();
};

const getAllTours = async (req, res) => {
  try {
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .filterLimiting()
      .pagination();
    const tours = await features.query;

    res.status(200).send({
      status: "success",
      results: tours.length,
      tours,
    });
  } catch (err) {
    res.status(400).send({ status: "fail", message: "Invalid Data Send!!" });
  }
};

const createATour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res
      .status(201)
      .send({ status: "Tour Created Successfully", data: newTour });
  } catch (err) {
    res.status(400).send({ status: "fail", message: err.message });
  }
};

const getATour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).send({ status: "success", tour });
  } catch (err) {
    res.status(400).send({ status: "fail", message: "Some Error" });
  }
};

const updateATour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res
      .status(200)
      .send({ status: "successfully updated", updated_data: tour });
  } catch (err) {
    res.status(400).send({ status: "fail", message: err.message });
  }
};

const deleteATour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).send({ status: "successfully deleted", data: null });
  } catch (err) {
    res.status(400).send({ status: "fail", message: "Some Error" });
  }
};

module.exports = {
  getAllTours,
  createATour,
  getATour,
  updateATour,
  deleteATour,
  getCheapestTours,
  viewCount,
  getTrendingTours,
};
