// const fs = require('fs');

// const fileReadCallback = (error, data) => {
//     if(error){
//         console.log('Gagal membaca file');
//         return;
//     }
//     console.log(data);
// }

// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// Syncronous Version
// 1.	const fs = require('fs');
// 2.	 
// 3.	const data = fs.readFileSync('todo.txt', 'UTF-8');
// 4.	console.log(data);

// Latihan
const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error){
        console.log('Gagal membaca file');
        return;
    }
    console.log(data);
}

fs.readFile('notes.txt', 'utf-8', fileReadCallback);


// Output
// Di hari minggu saya akan:
// 1. Berolahraga pagi.
// 2. Membersihkan halaman rumah.
// 3. Menonton film.
// 4. Membaca buku Laskar Pelangi.