const { Product } = require('../models/product.model');

module.exports = {
    getAll: (req, res) => {
        Product.find({})
        .then(data => {
            if (data.length > 0) {
                res.json(data)
            } else {
                res.status(500).json({ error: "No data in the database"})
            }
        })
        .catch(err => res.json(err))
    },
    getOne: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    new: (req, res) => {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id}, req.body, { runValidators: true, useFindAndModify: false})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    delete: (req, res) => {
        Product.findOneAndDelete({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
}