const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 1500);
});

// Using Promise.all to handle multiple promises
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise was rejected:", error);
  });
