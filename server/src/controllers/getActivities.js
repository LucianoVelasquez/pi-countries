const { Activity } = require('../db');

const getActivities = async (req,res) =>{
    try {
        const allActivities = await Activity.findAll();
        
        return res.status(200).json(allActivities);
    } catch ({message}) {
        res.status(500).json({error: message});
    }
}

module.exports = getActivities;