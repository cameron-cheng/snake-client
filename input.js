let connection;

const handleUserInput = function(data) {
  if (data === '\x03') {
    process.exit()
  }
  if (data === 'w') {
    connection.write('Move: up')
  }
  if (data === 's') {
    connection.write('Move: down')
  }
  if (data === 'a') {
    connection.write('Move: left')
  }
  if (data === 'd') {
    connection.write('Move: right')
  }
  if (data === 't') {
    connection.write('Say: Move Please!')
  }
  if (data === 'y') {
    connection.write('Say: Whoa That Was Close!')
  }
}

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  

  return stdin;
}
setupInput();
module.exports = { setupInput }