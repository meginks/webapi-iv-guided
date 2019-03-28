require('dotenv').config();

const server = require('./api/server.js');


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// const greeting = process.env.GREETING

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
