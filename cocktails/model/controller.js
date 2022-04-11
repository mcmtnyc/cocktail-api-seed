import Cocktail from "./cocktailmodel.js"

export const getCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktail.find();
    res.json(cocktails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCocktail = async (req, res) => {
  try {
    const { id } = req.params;
    const cocktails = await Cocktail.findById(id); /*.populate("")*/

    if (Cocktail) {
      return res.json(cocktails);
    }

    res.status(400).json({ message: "Cocktail not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCocktail = async (req, res) => {
  try {
    const cocktail = new Cocktail(req.body);
    await cocktail.save();
    res.status(201).json(cocktail);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCocktail = async (req, res) => {
  const { id } = req.params;
  const cocktail = await Cocktail.findByIdAndUpdate(id, req.body);
  res.status(200).json(cocktail);
};

export const deleteCocktail = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cocktail.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Cocktail deleted!");
    }

    throw new Error("Cocktail not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
