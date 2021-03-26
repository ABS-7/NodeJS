content = `keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.";`;

const fs = require('fs');

fs.writeFile('test.txt', content, err => {
    if (err) {
        console.log(new Error(err));
    } else {
        console.log('sucess write');
        fs.appendFile('test.txt', '***end***', err => {
            if (err) {
                console.log(new Error(err));
            } else {
                console.log('sucess append');
                fs.readFile('test.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.log(new Error(err));
                    } else {
                        console.log('sucess read');
                        //console.log('data:::', data);
                        fs.readFile('test.txt', 'utf8', (err, data) => {
                            if (err) {
                                console.log(new Error(err));
                            } else {
                                console.log('sucess read');
                                //console.log('data:::', data);
                                fs.readFile('test.txt', 'utf8', (err, data) => {
                                    if (err) {
                                        console.log(new Error(err));
                                    } else {
                                        console.log('sucess read');
                                        //console.log('data:::', data);
                                        fs.readFile('test.txt', 'utf8', (err, data) => {
                                            if (err) {
                                                console.log(new Error(err));
                                            } else {
                                                console.log('sucess read');
                                                //console.log('data:::', data);

                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});