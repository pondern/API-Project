import Astronomy from "../models/Astronomy.js";

export const getAllAstronomy = async (req, res) => {
  try {
    const allAstronomy = await Astronomy.find();
    res.json(allAstronomy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAstronomy = async (req, res) => {
  try {
    const { id } = req.params;
    const astronomy = await Astronomy.findById(id);

    if (astronomy) {
      return res.json(astronomy);
    }

    res.stats(404).json({ message: "Astronomy not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createAstronomy = async (req, res) => {
  try {
    const astronomy = new Astronomy(req.body);
    await astronomy.save();
    res.status(201).json(astronomy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateAstronomy = async (req, res) => {
  try {
    const { id } = req.params;
    const astronomy = await Astronomy.findByIdAndUpdate(id, req.body);

    res.status(201).json(astronomy);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteAstronomy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Astronomy.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Astronomy deleted!");
    }

    throw new Error("Astronomy not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllStronomyByYear = async (req, res) => {
  try {
    const { year } = req.params;

    const allAstronomyByYear = await Astronomy.find({ date: { $regex: `\\b${year}\\b`} })

    res.json(allAstronomyByYear)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}