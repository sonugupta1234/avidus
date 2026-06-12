const express = require("express");

const { auth } = require("../middleware/auth.middleware");
const { adminOnly } = require("../middleware/admin.middleware");
const {
  getDashboardStats,
  updateUserStatus,
  getAllUsers,
  deleteUser,
  getAllTasksAdmin,
  deleteTaskAdmin,
} = require("../controllers/admin.controller");

const router = express.Router();

router.get("/dashboard", auth, adminOnly, getDashboardStats);

router.get("/users", auth, adminOnly, getAllUsers);

router.delete("/users/:id", auth, adminOnly, deleteUser);

router.patch("/users/:id/status", auth, adminOnly, updateUserStatus);

router.get("/tasks", auth, adminOnly, getAllTasksAdmin);

router.delete("/tasks/:id", auth, adminOnly, deleteTaskAdmin);

module.exports = router;
