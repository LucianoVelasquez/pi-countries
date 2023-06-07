const { Activity,Country } = require("../db");

const postActivities = async (req, res) => {
  try {
    const { name, dificultad, duracion, temporada, countri } = req.body;

    if (!name || !dificultad || !countri) res.status(400).json("Faltan datos");

    const found = await Country.findAll({where: {id:countri}})

    const newActivity = await Activity.create({
      name,
      dificultad,
      duracion,
      temporada,
    });

    await newActivity.addCountry(found); ///Repasar clases.

    return res.json({message: 'Access'}).status(200);
    
  } catch ({ message }) {
    res.status(500).json({error: message});
  }
};

module.exports = postActivities;
