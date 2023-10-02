const promise = Promise.resolve(3);
const promise2 = Promise.reject('boo');

promise2.then((res) => console.log(res)).catch((err)=> console.log(err))
promise.then((res) => console.log(res)).catch((err) => console.log(err))