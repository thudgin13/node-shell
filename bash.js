const cat = require('./cat');
const ls = require('./ls');
const pwd = require('./pwd');
const curl = require('./curl');
process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const entry = data.toString().trim();
  const [cmd, arg] = entry.split(' ');
  if (cmd === 'pwd') {
    pwd();
  }
  if (cmd === 'ls') {
    ls();
  }
  if (cmd === 'cat') {
    cat(arg);
  }
  if (cmd === 'curl') {
    curl(arg);
  }
});
