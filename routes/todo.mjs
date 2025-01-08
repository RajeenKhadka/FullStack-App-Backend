import express from "express";
const router = express.Router();
import entryController from "../controllers/todo.mjs";

//seed route
//!!!!! to be taken out for deployment
router.get("/seed", entryController.seed);

//Index Route
//*****     get     /todos/
//*****     returns all entries
// NOTE: if the number of entries gets too large,
// this may be updated to imit the number returned
router.get("/", entryController.getEntries);

//TODO: post    new entry
//TODO: get individual entry
//TODO: get based on criteria
//TODO: edit
//TODO: delete

export default router;
