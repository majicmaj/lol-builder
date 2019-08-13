const Champion = require('../models/Champion')

module.exports = {
    show: (req, res) => Champion.find({})
        .then(champion => res.json(champion)),

    showByName: (req, res) => Champion.find({ name: req.params.name })
        .then(champion => res.json(champion)),

    showById: (req, res) => Champion.findById({ _id: req.params.id })
        .then(champion => res.json(champion)),

    showByTag: (req, res) => Champion.find({ tags: { $in: req.params.tags } })
        .then(champion => res.json(champion))
}