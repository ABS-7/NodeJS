const fs = require('fs');

function f() {
    for (let i = 0; i < 1e8; i++) {
        fs.readFile("test.txt", 'utf8', (err, data) => {
            if (err)
                console.log(err);
        });
    }
}

process.nextTick(f);