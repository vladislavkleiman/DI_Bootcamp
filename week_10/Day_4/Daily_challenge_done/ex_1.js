const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

const promises = [promise1,promise2,promise3]

Promise.all(promises).then((res) => console.log(res)).then((err) => console.log(err))