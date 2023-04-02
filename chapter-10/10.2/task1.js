class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

let error = new FormatError("Error of formatting");

console.log(error.message);
console.log(error.name);
console.log(error.stack);

console.log(error instanceof FormatError);
console.log(error instanceof SyntaxError);