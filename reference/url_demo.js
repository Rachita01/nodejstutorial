const url = require('url');

const myURL = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myURL.href);

console.log(myURL.toString());

console.log(myURL.hostname);

console.log(myURL.host);

console.log(myURL.pathname);

console.log(myURL.search);

console.log(myURL.searchParams);

myURL.searchParams.append('abc','123');
console.log(myURL.searchParams);

myURL.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));