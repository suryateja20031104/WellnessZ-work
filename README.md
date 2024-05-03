# Project Title 
Node.js REST API with SQL/SQLite3 and Cloudinary

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)


## About
Here i used sqlite3 instead of sql ,The SQL syntax for SQLite3 is generally the same as for other SQL databases and it don't any server to handle it's severless

This is a RESTful API built using Node.js, Express.js, SQLite3, and Cloudinary for image uploads. 
It allows users to perform CRUD operations on posts and includes features such as sorting, pagination, filtering by keyword, and filtering by tags.

## Getting Started
Installation

Clone the repository:

**git clone https://github.com/suryateja20031104/WellnessZ-work.git**

Navigate into the project directory:

**cd WellnessZ**

## Installing

Install dependencies:

**npm install**

Running Project:

**node index.js**

## POSTMAN samples

**Getting the Data from Database table Post:**

http://localhost:3000/getData

**Getting the Data from Database in DESC:**

http://localhost:3000/ownChoice/?order=DESC

**Getting the Data from Database of 5 rows only and in desc order:**

http://localhost:3000/ownChoice/?limit=5&order=DESC

**Getting the Data from Database of 5 row order by description:**

http://localhost:3000/ownChoice/?limit=5&order_by=desc


**Getting the Data from Database based on tag:**

http://localhost:3000/ownChoice/?tag_by=nature


**posting the data into database collection post:**

http://localhost:3000/insertPost/

{
  "title": "Vintage car exhibition",
  "desc": "Step back in time and admire classic automobiles from different eras",
  "tag":"cars, vintage, exhibition",
  "image":"https://res.cloudinary.com/dvy5o4qjm/image/upload/v1714660017/oldtimer-1197800_640_kzkj4c.jpg"
}

**posting the image into cloud service cloudinary**

http://localhost:3000/postImage

## LIVE LINK PUBLISHED

https://wellnessz-work.onrender.com/getData

https://wellnessz-work.onrender.com/ownChoice/?order=DESC

https://wellnessz-work.onrender.com/ownChoice/?limit=5&order=DESC

https://wellnessz-work.onrender.com/ownChoice/?limit=5&order_by=desc

https://wellnessz-work.onrender.com/ownChoice/?tag_by=nature




