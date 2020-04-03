const Countries = require('../models/Countries')

exports.getCountry = (req, res) => {
    Countries.findById(req.params.countryId, (err, country) => {
        if (err) {
            res.send(err);
        }
        res.json(country);
    });
};

exports.getAllCountries = (req, res) => {
    Countries.find({}, (err, country) => {
        if (err) {
            res.send(err);
        }
        res.json(country);
    });
};

exports.createCountry = (req, res) => {
    const newCountry = new Countries(req.body);

    newCountry.save((err, country) => {
        if (err) {
            res.send(err);
        }
        res.json(country);
    });
};

exports.updateCountry = (req, res) => {
    Countries.findOneAndUpdate({ _id: req.params.countryId }, req.body,
        (err, country) => {
            if (err) {
                res.send(err);
            }
            res.json(country);
        });
};

exports.deleteCountry = (req, res) => {
    Countries.deleteOne({ _id: req.params.countryId}, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: `country ${req.params.countryId} successfully deleted`
        });
    });
};