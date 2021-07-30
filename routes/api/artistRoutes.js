const router = require("express").Router();
const artistController = require("../../controllers/artistController");

// @route GET api/artist/get/all
// @desc Retrieve artist
// @access Public
router.route("/get/all").post(artistController.getAll);

// @route GET api/artist/get
// @desc Retrieve artist
// @access Public
router.route("/get/:id").get(artistController.get);

// @route POST api/artist/create
// @desc Create new artist
// @access Public
router.route("/create").post(artistController.create);

// @route PUT api/artist/update
// @desc Update artist records
// @access Public
router.route("/update").put(artistController.update);

// @route PUT api/artist/update/likes
// @desc Update likes on the artist record
// @access Public
router.route("/delete").delete(artistController.delete);

module.exports = router;
