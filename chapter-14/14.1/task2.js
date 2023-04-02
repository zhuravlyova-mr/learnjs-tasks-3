let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, property, receiver) {
    if (property < 0) {
      property = target.length + +property;
    }
    return Reflect.get(target, property, receiver);
  }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2