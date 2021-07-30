const Item = require("../models/item");

module.exports = {
  get: function (req, res, next) {
    Item.findById(req.params.id).then((merch) => {
      if (merch) {
        return res.status(200).send(merch);
      } else {
        return res.status(400).send({ message: "Item not found" });
      }
    });
  },
  getAll: function (req, res, next) {
    Item.find(req.body)
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
},
  create: function (req, res, next) {
    Item.findOne({ name: req.params.name}).then((merch) => {
      if (merch) {
        return res.status(400).json({ message: "Item item already exists" });
      } else {
        Item.create(req.body, function (err, response) {
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
    Item.findByIdAndUpdate(
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
    Merch.findByIdAndRemove(req.params.id, (err, response) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(response);
    });
  },
};