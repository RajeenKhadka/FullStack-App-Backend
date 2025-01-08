import Brain from "../models/brain.mjs";

async function seed(req, res) {
  const TODAY = new Date();

  try {
    await Brain.create([
      {
        entryDate: TODAY,
        entryType: "todo",
        description: "Add meeting to calendar",
      },
      {
        entryDate: TODAY,
        entryType: "Sched",
        description: "Read required chapter.",
      },
      {
        entryDate: TODAY,
        entryType: "Idea",
        description: "I do not have ideas right now",
      },
      {
        entryDate: TODAY,
        entryType: "List",
        description: "More books to read",
      },
    ]);
    res.send("successful").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

const getEntries = async (req, res) => {
  try {
    const foundEntries = await Brain.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};

const addEntry = async (req, res) => {
  console.log(req.body);
  try {
    const createdEntry = await Brain.create(req.body);
    console.log(createdEntry);
    res.status(200).json(createdEntry);
  } catch (err) {
    res.send(err).status(400);
  }
};

const deleteEntry = async (req, res) => {
  console.log("Received ID for deletion:", req.params.id);
  try {
    const deletedEntry = await Brain.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedEntry);
  } catch (error) {
    res.send(err).status(400);
  }
};

const editEntry = async (req, res) => {
  console.log("Received ID for edit:", req.params.id);
  try {
    const updatedEntry = await Brain.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEntry);
  } catch (err) {
    res.send(err).status(400);
  }
};

export default { seed, getEntries, addEntry, deleteEntry, editEntry };
