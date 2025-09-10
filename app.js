// const path = require("path");

// const filePath = path.join("/content/", "subfile", "text.txt");

// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, "content", "subfile", "text.txt");
// console.log(absolute);

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// writeFileSync(
//   "./content/result-sync.txt",
//   `here is the result : ${first}, ${second}`,
//   { flag: "a" }
// );

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   //   console.log(result);
//   const first = result;

//   readFile("./content/second.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `here is my result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

// app.get("/", (req, res) => {
//   res.status(200).send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About Page");
// });
// const port = 5000;
// const express = require("express");
// const app = express();
// const logger = require("./logger");
// const authorize = require("./authorize");

// // req => middleware => res

// // app.use([logger, authorize]);
// app.use(logger);

// app.get("/", (req, res) => {
//   res.send("Home");
// });

// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.get("/api/products", (req, res) => {
//   res.send("Products");
// });

// app.get("/api/items", (req, res) => {
//   console.log(req.user);
//   res.send("Items");
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}...`);
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("welcome to our home page");
//   res.end();
// });

// server.listen(3000);
// console.log("Server is listening on port http://localhost:3000 5000...");
// const express = require("express");
// const listEndpoints = require("express-list-endpoints");

// const app = express();

// // أمثلة
// app.get("/users", (req, res) => res.send("Get Users"));
// app.post("/users", (req, res) => res.send("Add User"));
// app.put("/users/:id", (req, res) => res.send("Update User"));
// app.delete("/users/:id", (req, res) => res.send("Delete User"));

// console.log(listEndpoints(app));

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to our home page");
//     return;
//   }
//   if (req.url === "/about") {
//     res.end("Here is our short history");
//     return;
//   }
//   res.end(`
//     <h1> Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `);
// });

// server.listen(3000);
// console.log("Server is listening on port http://localhost:3000 ...");

// const express = require("express");
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");

// const app = express();
// app.use(express.json());

// // 🟢 Logger Middleware (Method + URL + Status + Body + Query + Params)
// app.use((req, res, next) => {
//   const start = Date.now();

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     console.log(
//       `➡️ ${req.method} ${req.originalUrl} [${res.statusCode}] (${duration}ms)`
//     );

//     if (req.body && Object.keys(req.body).length > 0) {
//       console.log("   📦 Body:", req.body);
//     }

//     if (req.query && Object.keys(req.query).length > 0) {
//       console.log("   🔍 Query:", req.query);
//     }

//     if (req.params && Object.keys(req.params).length > 0) {
//       console.log("   🛣 Path Params:", req.params);
//     }
//   });

//   next();
// });

// // إعدادات Swagger
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "My API Docs",
//       version: "1.0.0",
//       description: "🚀 Auto-generated API documentation (like FastAPI)",
//     },
//   },
//   apis: [__filename],
// };

// const swaggerSpec = swaggerJsdoc(options);
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// /**
//  * @openapi
//  * /users:
//  *   get:
//  *     summary: Get all users
//  *     responses:
//  *       200:
//  *         description: Returns a list of users
//  */
// app.get("/users", (req, res) => {
//   res.json([
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Sara" },
//   ]);
// });

// /**
//  * @openapi
//  * /users:
//  *   post:
//  *     summary: Add a new user
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: User created
//  */
// app.post("/users", (req, res) => {
//   res.status(201).json({ message: "User added", user: req.body });
// });

// /**
//  * @openapi
//  * /users/{id}:
//  *   put:
//  *     summary: Update a user
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: User updated
//  */
// app.put("/users/:id", (req, res) => {
//   res.json({ message: `User ${req.params.id} updated`, user: req.body });
// });

// /**
//  * @openapi
//  * /users/{id}:
//  *   delete:
//  *     summary: Delete a user
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: User deleted
//  */
// app.delete("/users/:id", (req, res) => {
//   res.json({ message: `User ${req.params.id} deleted` });
// });

// // تشغيل السيرفر
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log(`📖 API Docs available at http://localhost:${PORT}/docs`);
// });

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
