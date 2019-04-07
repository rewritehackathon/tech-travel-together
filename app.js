import express from "express";
import http from "http";
import bodyParser from "body-parser";
import data from "./routes/data";

const app = express();

app.use(express.static(__dirname + "/src"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/data", data);

app.listen(3000, () =>
  console.log(`Server is listening on port 3000`)
);
