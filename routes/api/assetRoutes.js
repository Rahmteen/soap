const router = require("express").Router();
const assetController = require("../../controllers/assetController");

// @route GET api/asset/get/all
// @desc Retrieve asset
// @access Public
router.route("/get/all").post(assetController.getAll);

// @route GET api/asset/get
// @desc Retrieve asset
// @access Public
router.route("/get/:id").get(assetController.get);

// @route POST api/asset/create
// @desc Create new asset
// @access Public
router.route("/create").post(assetController.create);

// @route PUT api/asset/update
// @desc Update asset records
// @access Public
router.route("/update").put(assetController.update);

// @route PUT api/asset/update/likes
// @desc Update likes on the asset record
// @access Public
router.route("/delete").delete(assetController.delete);

module.exports = router;
