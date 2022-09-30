const express = require('express');
const router = express.Router();
const { updateAllTasks } = require('../controller/update.controller');





router.put('/post', updateAllTasks );





module.exports= router;