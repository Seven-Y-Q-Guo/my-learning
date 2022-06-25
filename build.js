const fs = require('fs');

let myLearning = '# My learning \n';
const files = fs.readdirSync('./');

const filesPromise = files
  .filter((file) => file !== '.git' && fs.lstatSync(file).isDirectory())
  .map((file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(__dirname + '/' + file + '/markmap.md', 'utf8', (err, data) => {
        resolve(data);
      });
    })
  }
);

Promise.all(filesPromise).then((data) => {
  data.map(item => {
    myLearning += item.replace(/#+/g, (value) => {
      return value + '#';
    });
  });

  console.log(myLearning);
})
