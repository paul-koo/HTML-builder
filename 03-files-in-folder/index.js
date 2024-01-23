const fs = require('fs');
const path = require('path');
const fsPromises = require('node:fs/promises');

const files = fsPromises.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true});
files.then((data) => {
    data.forEach((item) => {
        fs.stat(path.join(__dirname, "secret-folder", item.name), (err, stats) => {
            const pathFile = path.join(__dirname, "secret-folder", item.name);
            if (err) {
              console.error(err);
              return;
            }
            if (stats.isFile()) {
                console.log(`${path.basename(pathFile, path.extname(item.name))} - ${path.extname(item.name)} - ${stats.size}`)
            }
          }); 
    })
})
