const fs = require('fs'); //подключение модуля file system (require команда подключения модуля)
const path = require('path'); //подключение модуля path
// const stream = require('node:stream'); //подключение модуля stream, для работы с потоками
const streamRead = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
streamRead.on('data', (chunk) => {
    console.log(chunk);
})

// fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (err, data) => {  //первый параметр путь к файла, второй параметр кодировка, третий параметр функция обратного вызова
//     if (err) throw err;
//     console.log(data);
// })