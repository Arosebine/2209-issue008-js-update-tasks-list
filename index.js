const express = require('express');
const connectDB = require('./database/db');
const indexRoute = require('./routes/updateRoutes');



const app = express();
app.use(express.json());

connectDB();

app.use('/api', indexRoute);




app.listen(4545, () => {
  console.log('Server is running on port 4545');
});