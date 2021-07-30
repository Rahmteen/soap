const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// @route GET api/merch/get/all
// @desc Retrieve merch
// @access Public
router.route("/get/all").post(itemController.getAll);

// @route GET api/item/get
// @desc Retrieve item
// @access Public
router.route("/get/:id").get(itemController.get);

// @route GET api//item/get/sorted
// @desc Retrieve list of items by params. (Most liked, viewed, etc...)
// @access Public
router.route("/create/:id").post(itemController.create);

// @route PUT api/item/update
// @desc Update item records
// @access Public
router.route("/update").put(itemController.update);

// @route PUT api/item/update/likes
// @desc Update likes on the item record
// @access Public
router.route("/delete").delete(itemController.delete);

module.exports = router;