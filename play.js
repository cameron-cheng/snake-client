// play.js
const { connect } = require('./client');
console.log('Connecting ...');
const conn = connect();  

conn.on('connect', function() {
  console.log('Connected');
  conn.write('Name: Cam')
  // setInterval(() => {
  //   conn.write('Move: up')
  // }, 50);
})
conn.on('data', (data) => {
  console.log(data);
});

const handleUserInput = function(data) {
  if (data === '\x03') {
    process.exit()
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

setupInput();

