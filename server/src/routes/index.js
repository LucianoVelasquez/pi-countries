const { Router } = require("express");
const { getCountries,getCountry,postActivities, getActivities } = require('../controllers/index');
const router = Router();


router.get('/countries',getCountries);
router.get('/countries/:idPais',getCountry); 

router.post('/activities',postActivities);
router.get('/activities',getActivities);


module.exports = router;
