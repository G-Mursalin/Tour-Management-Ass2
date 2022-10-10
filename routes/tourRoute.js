const express = require("express");
const {
  getAllTours,
  createATour,
  getATour,
  updateATour,
  deleteATour,
  getCheapestTours,
  viewCount,
  getTrendingTours,
} = require("./../controllers/tourController");

const router = express.Router();

router.route("/cheapest").get(getCheapestTours, getAllTours);
router.route("/trending").get(getTrendingTours, getAllTours);
router.route("/").get(getAllTours).post(createATour);
router
  .route("/:id")
  .get(viewCount, getATour)
  .delete(deleteATour)
  .patch(updateATour);

module.exports = router;
