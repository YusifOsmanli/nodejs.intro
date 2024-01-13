const express = require("express");
const Blog = require("../models/blog.model");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const router = express.Router();
const blog = [
  {
    id: 1,
    title: "Gülşən müəllimə",
    description: "Allah Gülşən müəllimənin canın sağ eləsin",
    createAt: moment().format("LLL"),
    modifiedAt: moment().format("LLL"),
    author: {
      name: "Muku",
      surname: "Mallim",
    },
  },
  {
    id: 2,
    title: "Rəşad müəllim",
    description: "Allah Rəşad müəllimin canın sağ eləsin",
    createAt: moment().format("LLL"),
    modifiedAt: moment().format("LLL"),
    author: {
      name: "Muku",
      surname: "Mallim",
    },
  },
];
router.get("/", (req, res) => {
  res.send(blog);
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const target = blog.find((item) => item.id == id);
  if (target) {
    res.status(200).send(target);
  } else {
    res.status(404).send("item not found");
  }
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const target = blog.find((item) => item.id == id);
  if (target) {
    const indexOfTarget = blog.indexOf(target);
    blog.splice(indexOfTarget, 1);
    res.send(`item deleted id: ${target.id}`);
  } else {
    res.status(404).send("item not found");
  }
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  let target = blog.find((item) => item.id == id);
  if (target) {
    const indexOfTarget = blog.indexOf(target);
    target = { ...target, ...req.body , modifiedAt:moment().format("LLL")};
    blog[indexOfTarget] = { ...target };
    res.send(blog);
  } else {
    res.status(404).send("item not found");
  }
});
router.post("/", (req, res) => {
  const { name, surname } = req.body.author;
  const newBlog = new Blog(
    uuidv4(),
    req.body.title,
    req.body.description,
    moment().format("LLL"),
    moment().format("LLL"),
    name,
    surname
  );
  blog.push(newBlog);
  res.send("item created").status(201);
});
module.exports = router;
