const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });

  console.log('Successfully connected to game server!');
  conn.write('Name: Cam');

  return conn;
}

module.exports = { connect };
