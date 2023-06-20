//Contries
const getAllCountries = require('./getAllCountries');
const getCountry = require('./getCountrie');
const getCountries = require('./getCountries');

//Ativities
const postActivities = require('./postActivities');
const getActivities = require('./getActivities');
const deleteActivities = require('./deleteActivities');

module.exports = {
    getAllCountries,
    getCountry,
    getCountries,
    postActivities,
    getActivities,
    deleteActivities
}