const mongoose = require('mongoose');




// create a schema
const updateSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

// create a model
const Update = mongoose.model('Update', updateSchema);



module.exports = Update;
