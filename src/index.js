// const, let

// const val4 = {
//   name: "まこと",
//   age: 28
// };
// val4.name = "mak";
// val4.address = "Nagasaki";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// // テンプレート文字列
// const name = "まこと";
// const age = 28;

// const message = `私の名前は${name}です。年齢は　${age}です`;
// console.log(message);

// // アロー関数
// // function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// // const func2 = (str) => str
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "まこと",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// // console.log(message2);

// const myProfile = ["まこと", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// スプレッド構文
// // 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// map, filter
// const nameArr = ["田中", "山田", "まことと"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }

// map: 配列の各要素に処理を繰り返す
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "まことと") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// filter: 条件式に一致するものだけ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// 三項演算子
// ある条件 ? 上限がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString(num));

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));

// 論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

// const num = 100;
const num = null;
const fee = num || "金額未設定です";
console.log(fee);
