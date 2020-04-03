const mongoose = require('mongoose')

/**
 * Create database scheme for countries
 */
const CountriesSchema = mongoose.Schema({
    countryName : {
        type : String,
        required : true
    },
    countryCurrency : {
        type : String,
        required : true
    },
    countryCapital : {
        type : String,
    },
    primaryLanguage : {
        type : String,
        default : "English"
    }
})

module.exports = mongoose.model('Countries', CountriesSchema)