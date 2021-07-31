const Asset = require("../models/asset");

module.exports = {
  get: function (req, res, next) {
    Asset.findById(req.params.id).then((asset) => {
      if (asset) {
        return res.status(200).send(asset);
      } else {
        return res.status(400).send({ message: "Asset not found" });
      }
    });
  },
  getAll: function (req, res, next) {
    Asset.find()
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
},
  create: function (req, res, next) {
    console.log(req.body)
    Asset.findOne({ name: req.body.name }).then((asset) => {
      if (asset) {
        return res.status(400).json({ message: "Asset already exists" });
      } else {
        Asset.create(req.body, function (err, response) {
          if (err) {
            res.status(500).send({ message: "Something went wrong" });
          } else {
            res.status(200).send(response);
          }
        });
      }
    });
  },
  update: function (req, res, next) {
    Asset.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true },
      (err, response) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(response);
      }
    );
  },
  delete: function (req, res, next) {
    Asset.findByIdAndRemove(req.params.id, (err, response) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(response);
    });
  },
};