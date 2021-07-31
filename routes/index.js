const path = require("path");
const router = require("express").Router();
const assetRoutes = require("./api/assetRoutes");

//adds /api to apiRoutes
router.use("/asset", assetRoutes);

module.exports = router;