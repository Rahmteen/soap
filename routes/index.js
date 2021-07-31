const path = require("path");
const router = require("express").Router();
const assetRoutes = require("./api/assetRoutes");
const itemRoutes = require("./api/itemRoutes");
const showRoutes = require("./api/showRoutes");

//adds /api to apiRoutes
router.use("/asset", assetRoutes);
router.use("/item", itemRoutes);
router.use("/show", showRoutes);

module.exports = router;