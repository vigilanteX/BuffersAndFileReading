import fs from "fs";
import fsPromise from "fs/promises";

const data = fs.readFileSync("data.txt");
console.log(data);
console.log(data.toString());

const data2 = await fsPromise.readFile("data.txt");
console.log(data2);
console.log(data2.toString());
