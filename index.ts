
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./src/routers/index";

const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const DB_URL = 'mongodb://127.0.0.1:27017/FinancialManagement';

mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.use("", router);

app.listen(PORT, () => {
    console.log("App running on port: "+ PORT)
});
