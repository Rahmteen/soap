const Artist = require("../models/artist");

module.exports = {
  get: function (req, res, next) {
    Artist.findById(req.params.id).then((artist) => {
      if (artist) {
        return res.status(200).send(artist);
      } else {
        return res.status(400).send({ message: "Artist not found" });
      }
    });
  },
  getAll: function (req, res, next) {
    Artist.find()
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
},
  create: function (req, res, next) {
    console.log(req.body)
    Artist.findOne({ name: req.body.name }).then((artist) => {
      if (artist) {
        return res.status(400).json({ message: "Artist already exists" });
      } else {
        Artist.create(req.body, function (err, response) {
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
    Artist.findByIdAndUpdate(
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
    Artist.findByIdAndRemove(req.params.id, (err, response) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(response);
    });
  },
};