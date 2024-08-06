import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRouse from "./routes/authRoutes";
import usersRoutes from "./routes/useRoutes";

const app = express();

app.use(express.json());

app.use("/auth", authRouse);
app.use("/users", usersRoutes);

export default app;
