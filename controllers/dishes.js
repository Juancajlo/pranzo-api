const models = require("../models");
const Dish = models.Dish;

const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.findAll();
    res.json({
      dishes,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: "Internal server error getting dishes",
      },
    });
  }
};

const createDish = async (req, res) => {
  const { name, description, dishPicture } = req.body;
  try {
    const dish = await Dish.create({
      name,
      description,
      dishPicture,
    });
    res.json({
      dish,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: "Internal server error creating a dish",
      },
    });
  }
};

const updateDish = async (req, res) => {
  const id = req.params.id;

  const { name, description, dishPicture } = req.body;

  try {
    const dishFound = await Dish.findByPk(id);

    if (dishFound == null) {
      return res.status(400).json({
        msg: "Dish not found",
      });
    }

    if (name !== undefined) {
      dishFound.name = name;
    }

    if (description !== undefined) {
      dishFound.description = description;
    }

    if (dishPicture !== undefined) {
      dishFound.dishPicture = dishPicture;
    }

    const dishSaved = await dishFound.save();

    res.json({
      dishSaved,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: "Internal server error updating a dish",
      },
    });
  }
};

const deleteDish = async (req, res) => {
  const id = req.params.id;

  try {
    const dish = await Dish.findOne({
      where: { id },
    });

    if (dish == null) {
      return res.status(400).json({
        msg: "Dish not found",
      });
    }

    await account.destroy();
    res.json({
      message: `Dish with id ${id} deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: `Internal server error deleting dish with id ${id}`,
      },
    });
  }
};

module.exports = {
  getDishes,
  createDish,
  updateDish,
  deleteDish,
};
