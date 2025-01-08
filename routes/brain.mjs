import express from "express";
const router = express.Router();
import Brain from "../models/brain.mjs";
import entryController from "../controllers/brain.mjs";

//seed route
//!!!!! to be taken out for deployment
router.get("/seed", entryController.seed);

//Index Route
//*****     get     /braindump/
//*****     returns all entries
// NOTE: if the number of entries gets too large,
// this may be updated to imit the number returned
router.get("/", entryController.getEntries);

//TODO: post    new entry
//Create Route
//*****        post        /api/braindump
//*****        add the entry to the database and return
router.post("/", entryController.addEntry);

//TODO: get individual entry
//TODO: get based on criteria
//TODO: edit
//TODO: delete

//Delete Route
//*****     delete      /api/braindump/:id
//*****     delete the specified entry and return delete
router.delete("/:id", entryController.deleteEntry);

router.put("/:id", entryController.editEntry);

export default router;
