module.exports = function () {
  process.stdout.write(process.cwd().toString().trim());
  process.stdout.write('\nprompt > ');
};
