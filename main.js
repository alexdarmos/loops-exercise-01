let i = 1;
let j = 10;
let a = 0;
let b = 11;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let string = "planet";

//log increment from 1 to 10
for (i; i < 11; i++) {
  // console.log(i);
}

//log decrement from 10 to 1
for (j; j > 0; j--) {
  // console.log(j);
}

//log increment from 1 to 10
do {
  a++;
  // console.log(a);
} while (a < 10);

//log decrement from 10 to 1
do {
  b--;
  // console.log(b);
} while (b > 0);

//logs numbers in array
for (let c of numbers) {
  // console.log(c);
}

//add spaces to string
let empty = '\xa0';
for (let z=0; z < 10 - string.length; z++) {
   console.log(empty+string);
}
