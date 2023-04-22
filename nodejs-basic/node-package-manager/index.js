const lodash = require('lodash');

const myOddEvenArray = lodash.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
console.log(myOddEvenArray);

// D:\[KURSUS] Private Course Yosef\Dicoding.com\BackEnd Learning Paths AWS\[3] Belajar Membuat Aplikasi BackEnd Untuk Pemula\Project\nodejs-basic\node-package-manager>node index.
// js
// [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]