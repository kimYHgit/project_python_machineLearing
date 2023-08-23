//default settings
const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const blogSchema = require("./controller/schema");

env.config();
const PORT = process.env.PORT || 3000;
const MONGO_DB_ID = process.env.MONGO_DB_ID;
const MONGO_DB_PW = process.env.MONGO_DB_PW;
const MONGO_DB_URI = `mongodb+srv://${MONGO_DB_ID}:${MONGO_DB_PW}@cluster0.o1o8pkd.mongodb.net/?retryWrites=true&w=majority`;

//app start
const app = express();

//mongoose settings

const date = new Date();

(async function dbConnection() {
  try {
    await mongoose.connect(MONGO_DB_URI, { dbName: "ML_python" }); // dbName 옵션 : DB 없으면 해당 이름으로 새롭게 생성
    console.log(`DB connection succeeded : ${date}`);
  } catch (error) {
    handleError(error);
  }
})();

const Blog = mongoose.model("Blog", blogSchema);

// Create a new blog post object
const article = new Blog({
  title: "Awesome Post!",
  slug: "awesome-post",
  published: true,
  content: "This is the best post ever",
  tags: ["featured", "announcement"],
});

// Insert the article in our MongoDB database
(async () => {
  await article.save();
  console.log("successfully inserted");
})();

//routing
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
