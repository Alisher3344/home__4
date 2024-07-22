// // for1
// let a = 2;
// let b = 5;

// for (i = a; i <= b; i++) {
// console.log(i);
// }

// // for2
// let a = 10;
// let b = 5;

// for (i = a - 1; i >= b - 1; i--) {
//   console.log(i);
// }

// // for3
// let a = 2000;
// for (let i = 1; i <= 10; i++) {
//   console.log(i + " kg " + a * i + "so'm");
// }

// // for4
// let a = 10000;

// for (let i = 1.2; i < 2; i += 0.1) {
//   console.log(Math.round(a * i));
// }

// // for5
// let a = 10;
// let b = 5;
// let y = 0;

// for (let i = b; i <= a; i++) {
//   y += i;
// }
// console.log(y);

// // for6
// let a = 5;
// let b = 3;
// let y = 1;

// for (let i = b; i <= a; i++) {
//   y*= i;
// }
// console.log(y);

// // for7
// let a = 5;
// let b = 3;
// let y = 0;
// let x = 0;

// for (let i = b; i <= a; i++) {
//   x += Math.pow((y += i), 2);
// }
// console.log(x);

// // for8
// let n = 5;
// let x = 0;
// let y = 1;

// for (let i = 0; i <= n; i++) {
//   x += y /= i;
// }
// console.log(x);

// // for9
// let n = 1.3;
// let x = 0;
// let y = 1;

// for (let i = 1.2; i <= n; i += 0.1) {
//   y *= i;
// }
// console.log(y);

// // for 10
// let n = 5;
// let y = 0;

// for (let i = 1; i <= 5; i += 2) {
//   y += i;
// }
// console.log(Math.pow(n, 2) + y);
// // for11
// let a = 4;
// let n = 5;

// console.log(a + " ** " + n);
// console.log("");
// for (let i = 1; i <= n; i++) {
//   console.log(a + " *");
// }
// console.log("");
// console.log(Math.pow(a, n));

// // for12
// let a = 4;
// let n = 3;

// for (let i = 1; i <= n; i++) {
//   console.log(a + " ** " + i + " = " + Math.pow(a, i));
// }

// // for13
// let a = 2;
// let n = 7;
// let x = 0;
// let y = 1;
// for (let i = 2; i <= n; i++) {
//   // x += Math.pow(a, i);
//   console.log(Math.pow(a, i));
// }
// console.log(x);

// // for14
// let n = 4;
// let y = 0;

// for (let i = 0; i <=n; i++) {
// console.log(i);
// }
// console.log(2);

// // for15
// let n = 4;
// let k = 2;
// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += Math.pow(i, k);
// }
// console.log(s);

// // for16
// let n = 4;
// let s = 0;
// let y = 0;
// let x = 0;

// for (let i = 1; i <= n; i++) {
//   s = Math.pow(x++, y++);
//   console.log(s);
//   // console.log(x);
// }
// // console.log(s);

// // for17
// let a = 5;
// let b = 10;

// for (let i = a; i <= b; i++) {
//   for (let y = 1; y <= i; y++) {
//     console.log(i);
//   }
// }

// // for 18
// let y = 20;
// let x = 0;
// let c = 0;
// console.log("bo'linuvchilar");
// for (let i = 2; i < y; i++) {
//   if (y % i == 0) {
//     console.log(i);
//     x += i;
//     c++;
//   }
// }
// console.log(" ");
// console.log("bo'linuvxhilar yig'indisi = ", x);
// console.log("bo'linuvxhilar soni = ", c);

// // for19
// let n = 10;
// console.log(2);
// for (let i = 2; i <= n; i++) {
//   // console.log(i);
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// for20

// // while1
// let a = 10;
// let b = 5;
// let y = 0;

// while (y == 0) {
//   console.log(a - b, "cm bo'sh joy bor");
//   y++;
// }

// // while2
// let a = 10;
// let b = 2;
// let c = 0;
// while (b <= a) {
//   b += b;
//   c++;
// }
// console.log(c + 2 + " ta o'tkazish mum");

// while3
// let n = 10;
// let i = 1;
// let a = 1;
// while ((i == a)) {
//   if (n % 3 == 0) {
//     console.log(" 3 ning darajasi");
//   } else {
//     console.log("3 ning darajasi emas");
//   }
//   i++;
// }
// console.log("sdf");

// while4
let n = 11;
let m = 2;

let x = 0;
let i = 0;
while (x <= 1) {
  x = +(n - m);
  i++;
  m++;
}
console.log(x);
console.log(i);
