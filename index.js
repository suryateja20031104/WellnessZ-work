const express = require("express");
const path = require("path");
const cors = require("cors");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const dbPath = path.join(__dirname, "posts.db");
app.use(express.json());
app.use(cors());
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

app.get("/getData", async (request, response) => {
  const getPostDetails = `
    SELECT
      *
    FROM
     post
    `;
  const postDetailsArray = await db.all(getPostDetails);
  response.send(postDetailsArray);
});

app.get("/ownChoice/", async (request, response) => {
  const {
    offset = 0,
    limit = 3,
    order = "ASC",
    order_by = "title",
    tag_by = "",
  } = request.query;

  const getPostData = `
    SELECT
      *
    FROM
     post
    WHERE
     tag LIKE '%${tag_by}%'
    ORDER BY ${order_by} ${order}
    LIMIT ${limit} OFFSET ${offset};`;

  const postDetailsArray = await db.all(getPostData);
  response.send(postDetailsArray);
});

app.post("/insertPost", async (request, response) => {
  const postDetails = request.body;
  const { title, desc, tag, image } = postDetails;

  const addQuery = `
    INSERT INTO POST
    (title,desc,tag,image)
    VALUES
    ('${title}','${desc}','${tag}','${image}');
  ';`;

  const dbResponse = await db.run(addQuery);
  response.send({ info: "inserted data successfully" });
});
