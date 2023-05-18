const j = "драгоценности";
const s = "камни";

let arrayJ = j.split("");
let arrayS = s.split("");
let total = 0;

for (let i = 0; i < arrayS.length; i += 1) {
  if (arrayJ.includes(arrayS[i])) {
    total += 1;
  } else {
    total += 0;
  }
}

console.log(total);
