/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    for (const func of functions) {
      func()
        .then(res => results.push(res))
        .catch(err => reject(err));
    }

    resolve(results);
  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */