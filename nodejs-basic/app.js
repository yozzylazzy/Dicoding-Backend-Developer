// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

const firstname = process.argv[2];
const lastname = process.argv[3];

console.log(`Hello ${firstname} ${lastname}`)