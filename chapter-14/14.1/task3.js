let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function(handler) {
        this[handlers].push(handler);
    };
    
    return new Proxy(target, {
      set(target, property, value) {
        let ok = Reflect.set(...arguments);
        if (ok) {
          target[handlers].forEach(handler => handler(property, value));
        }
        return ok;
      }
    });
}
  
let user = {};
user = makeObservable(user);
  
user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});
  
user.name = "John"; 