const fs = require('fs');
const path = require('path');
const Course = require('../models/update.model');



exports.updateAllTasks = async (req, res) => {
  // write a program to update a file and backup the old file
  // if the file does not exist, create it
  // if the file exists, backup the old file and update the new file
  // if the backup file exists, delete it

  const filePath = path.join(__dirname, 'data.txt');
  //backup path with format date to YYYYMM-DD--HH_mm
  const backupPath = path.join(
    __dirname,
    `data-${new Date()
      .toISOString()
      .replace(/:/g, '_')
      .replace(/-/g, '_')
      .replace(/\./g, '_')
      .replace('T', '--')}.txt`
  );

  if (fs.existsSync(filePath)) {
    fs.copyFileSync(filePath, backupPath);
    fs.unlinkSync(filePath);
  }

  fs.writeFileSync(filePath, req.body.name);

  // send the new file content back to the db

  const course = new Course({
    name: req.body.name,
  });

  await course.save();

  res.send('file written');
};


