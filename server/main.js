const express = require('express');
const cors = require('cors');

const mainApp = express();
mainApp.use(cors());

// Import and mount your separate Express apps
const app1 = require('./token');
// const app2 = require('./simple_search');
// const app3 = require('./paystack');

// Use different ports for different apps
const PORT1 = 3001;
// const PORT2 = 3002;
// const PORT3 = 3003;

// Start the individual Express apps on different ports
app1.listen(PORT1, () => {
  console.log(`Access Token Service is running on port ${PORT1}`);
});

// app2.listen(PORT2, () => {
//   console.log(`Simple Search Service is running on port ${PORT2}`);
// });

// app3.listen(PORT3, () => {
//   console.log(`Paystack Service is running on port ${PORT3}`);
// });

// You can still run some routes on the main app if needed
mainApp.get('/', (req, res) => {
  res.send('Main Server is running');
});

const MAIN_PORT = process.env.PORT || 8080;
mainApp.listen(MAIN_PORT, () => {
  console.log(`The Main Server is running on port ${MAIN_PORT}`);
});
