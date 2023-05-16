// Using Process stdin

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  // const name = process.stdin.read();
  const name = data;
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
