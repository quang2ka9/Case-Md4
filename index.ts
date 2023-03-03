import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const DB_URL = 'mongodb://127.0.0.1:27017/FinancialManagement';

mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.listen(3000,()=>{
    console.log('app listening on http://localhost:3000')
})