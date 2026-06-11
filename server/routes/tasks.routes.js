const express = require("express");
const {
  createTask,
  getMyTasks,
  getSingleTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const { auth } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", auth, createTask);

router.get("/", auth, getMyTasks);

router.get("/:id", auth, getSingleTasks);

router.put("/:id", auth, updateTask);

router.delete("/:id", auth, deleteTask);

module.exports = router;
