import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import database from "./db/database.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

// for deployment
const __dirname = path.resolve();

dotenv.config();

// middleware
app.use(express.json()); // to parse incoming request from json payload (req.body)
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// middleware for deployment
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  database();
  console.log(`🌐 Server is running on port ${PORT}`);
});
