const Show = require("../models/show");

module.exports = {
  get: function (req, res, next) {
    Show.findById(req.params.id).then((show) => {
      if (show) {
        return res.status(200).send(show);
      } else {
        return res.status(400).send({ message: "Show not found" });
      }
    });
  },
  getAll: function (req, res, next) {
    Show.find()
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
},
  create: function (req, res, next) {
    console.log(req.body)
    Show.findOne({ name: req.body.name }).then((show) => {
      if (show) {
        return res.status(400).json({ message: "Show already exists" });
      } else {
        Show.create(req.body, function (err, response) {
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
    Show.findByIdAndUpdate(
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
    Show.findByIdAndRemove(req.params.id, (err, response) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(response);
    });
  },
};