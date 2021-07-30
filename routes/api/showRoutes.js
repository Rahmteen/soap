const router = require("express").Router();
const showController = require("../../controllers/showController");

// @route GET api/show/get/all
// @desc Retrieve show
// @access Public
router.route("/get/all").post(showController.getAll);

// @route GET api/show/get
// @desc Retrieve show
// @access Public
router.route("/get/:id").get(showController.get);

// @route POST api/show/create
// @desc Create new show
// @access Public
router.route("/create").post(showController.create);

// @route PUT api/show/update
// @desc Update show records
// @access Public
router.route("/update").put(showController.update);

// @route PUT api/show/update/likes
// @desc Update likes on the show record
// @access Public
router.route("/delete").delete(showController.delete);

module.exports = router;
