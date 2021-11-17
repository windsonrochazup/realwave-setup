import { green } from "chalk";

function run(inputText: string) {
  console.log(green(`My name is ${inputText}.`));
}

const Formula = run;
export default Formula;
