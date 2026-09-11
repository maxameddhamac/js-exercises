function maxamaed(massage, callback) {
  setTimeout(() => {
    callback(massage);
  }, 3000);
}

const massage = "Hello, World!";
console.log(
  maxamaed(massage, (result) => {
    console.log(result);
  }),
);
