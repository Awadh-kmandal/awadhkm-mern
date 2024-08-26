require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.port;
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const blogRoute = require("./router/blogs-route");
const adminRoute = require("./router/admin-router");
const serviceRoute = require("./router/services-router");

const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
app.use(express.json());
const corsOption = {
  origin: "http://localhost:5173/",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  Credentials: true,
};
app.use(cors.apply(corsOption));
app.use("/api/auth/", router);
app.use("/api/form", contactRoute);
app.use("/api/form", blogRoute);
app.use("/api/form", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
