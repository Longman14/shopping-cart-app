const express = require('express');
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

