const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.on('connect', function() {
    console.log('Connected');
    conn.write('Name: Cam')
  })
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };
