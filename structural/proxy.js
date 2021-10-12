// The proxy pattern is a structural pattern that creates a proxy object.
// It acts as a placeholder for another object, controlling the access to it.
// The proxy can also act as a cache and store the requests.

function networkFetch(url) {
  return `${url} - server side url`;
}

const cache = new Set();

const proxyFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - cache url`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

console.log(proxyFetch('angular.io'));
console.log(proxyFetch('react.io'));
console.log(proxyFetch('angular.io'));
