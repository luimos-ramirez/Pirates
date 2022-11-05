const Pirate = require("../models/pirate.model");

module.exports.get_all = (req, res) => {
    Pirate.find().sort({nombre: 1}) //sort me ayuda a organizarlos diferente, 1. sera ascendiente y -1.seria descendiente
        .then(pirate => res.json(pirate))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.create = (req, res) => {
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => {
            console.log(err);   
            res.status(400).json(err);
        });
}

module.exports.get = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
}

module.exports.update = (req, res) => {
    Pirate.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
}

module.exports.delete = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}