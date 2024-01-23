const fs = require('fs');
const path = require('path');
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.stdout.write("Введите текст для записи:\n");
process.stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }
    writeStream.write(data.toString().trim() + '\n');
})

process.on('exit', () => {
    console.log('Спасибо, запись в файл программы завершена!');
})