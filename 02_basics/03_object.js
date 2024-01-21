const mySym = Symbol("key1");

const jsUser = {
  name: "king",
  "full name": "king khan",
  [mySym]: "myKey1",
  location: "mumbai",
  email: "kingkhan@google.com",
  isLoggedIn: false,
  lastLoginInDays: ["Monday", "Saturday"],
};

(jsUser.email = "king@chatgpt.com"), Object.freeze(jsUser);
(jsUser.email = "king@chatgpt.com"), console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user,${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
