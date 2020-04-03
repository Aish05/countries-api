
const country = require('../controllers/countriesController')
const express = require('express')
const router = express.Router();


router.route('/api/countries')
    .get(country.getAllCountries)
    .post(country.createCountry);

router.route('/api/countries/:countryId')
    .get(country.getCountry)
    .put(country.updateCountry)
    .delete(country.deleteCountry);

module.exports = router;
