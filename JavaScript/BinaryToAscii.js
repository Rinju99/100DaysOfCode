// Convert string into base-64 incoded ASCII
const encoded = (str) => Buffer.from(str, "binary").toString("base64");

console.log(encoded("Sherpa")); //Y29kaW5n