const path = require("path");
const router = require("express").Router();
const artistRoutes = require("./api/artistRoutes");
const itemRoutes = require("./api/itemRoutes");
const showRoutes = require("./api/showRoutes");

//adds /api to apiRoutes
router.use("/artist", artistRoutes);
router.use("/item", itemRoutes);
router.use("/show", showRoutes);

module.exports = router;