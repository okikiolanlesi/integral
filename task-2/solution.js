const a = (symbol, numChars, numOfLines) => {
  const line = symbol.repeat(numChars);

  for (let i = 0; i < numOfLines; i++) {
    console.log(line);
  }
};

console.log("a)");
a("*", 10, 10);

const b = (symbol, numOfLines) => {
  let line = symbol;

  for (let i = 0; i < numOfLines; i++) {
    console.log(line);
    line += symbol;
  }
};

console.log("\nb)");
b("*", 10);

const c = (symbol, numOfLines) => {
  let line = symbol.repeat(numOfLines);

  for (let i = 0; i < numOfLines; i++) {
    console.log(line);
    line = line.slice(1);
  }
};

console.log("\nc)");
c("*", 10);
