const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
});
promise.then(function () {
  console.log("promise resoloved ");
});

const promise3 = new Promise(function (resolve, reject) {
  const error = false;
  if (!error) {
    setTimeout(function () {
      resolve({ name: "mimohshukla", number: 723301000000 });
    }, 1000);
  } else {
    reject("error:something went wrong");
  }
});

promise3
  .then(function (params) {
    // console.log(name);
    return params.name;
  })
  .then(function (name) {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally all promise is resolved ");
  });

const promise4 = new Promise(function (resolve, reject) {
  const error = true;
  if (!error) {
    setTimeout(function () {
      resolve({ name: "javascript", number: 723091999 });
    });
  } else {
    reject("error:somethingwent wrong");
  }
});
async function promisefour() {
  try {
    const resolved = await promise4;

    console.log(resolved);
    console.log(resolved.name);
  } catch (error) {
    console.log("your error");
  }
}
// promisefour();
