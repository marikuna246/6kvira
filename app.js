// // 1)დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.

// function generateRandomNumber(minimum, maximum) {
  
//    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
//  }
 

// console.log(generateRandomNumber(7, 60));
// // 2)დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
// // let word="hallo world"
// //   function capitalizeWords(str){
// //      let splited = str.split(" ");

// //      let capitalizeWord=splited.map((word)=>word[0].toUpperCase()+word.slice(1));
// //      return capitalizeWord.join(" ");
// //   }

// //  console.log(capitalizeWords(word));
// // 3)დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// let Array = [
//    { name: "lasha", age: 25 },
//    { name: "elene", age: 30 },
//    { name: "mari", age: 25 },
//    { name: "oto", age: 30 },
//  ];
//  function values(Array, Name) {
  
//    let uniqueValues = [];
//    for (const obj of Array) {
//       if (!uniqueValues.includes(obj[Name])) {
     
//        uniqueValues.push(obj[Name]);
//      }
//    }
 
//    return uniqueValues;
//  }
 

 
//  let uniqueNames = values(Array, "name");
//  console.log(uniqueNames); 
 

//  let uniqueAges = values(Array, "age");
//  console.log(uniqueAges); 

 
 
 
 
 
 

// // 4)დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.
// function pangram(str) {
//    let Letters = 'abcdefghijklmnopqrstuvwxyz';
 
//    for (const letter of Letters) {
//      if (!str.includes(letter)) {
    
//        return false;
//      }
//    }
   
//    return true;
//  }
 

// console.log(pangram("Hello, World!")); 




// 5)დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
let sentence= "A cat is sitting on the Windows."
function words(str) {
 let comonsWords = new Set(["the", "a", "is"]);
 let words = str.toLowerCase().split(" ").filter(word => !comonsWords.has(word))

  return [...new Set(words)].sort().join(" ")
}
  console.log( words(sentence));


// // 6)დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
// let array = [8, 5, true, false, NaN, undefined,0];
// function removeValue(arr) {
//   let falseValues = [false,undefined, 0, NaN];
//   let trueValues = arr.filter((elements) => !falseValues.includes(elements));
//   return trueValues;
// }
// console.log(removeValue(array));

// // 7)დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.
// // let sentence = "The old clock ticked softly .";
// // function reverseSentence(array) {
// //   let newSentence = array.split(" ");
// //   let reverceWords = newSentence.reverse();
// //   let reverseSentence = reverceWords.join(" ");
// //   return reverseSentence;
// // }
// // console.log(reverseSentence(sentence))

// // // 8)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
// let string = "irri";
// function palindrom(str) {
//   let arrString = string.split("");
//   let stringA = [...arrString];
//   let reversedString = stringA.reverse();
//   for (let i = 0; i < arrString.length; i++) {
//     if (arrString[i] !== reversedString[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrom(string));

// // 9)დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე const array1 = ['one', 'two', 'three'];დიდ რიცხვს(არ გამოვიყენოთ სორტი)
// let numbers = [20, 8, 97, 56, 77, 95];
// function theBigestNum(arr) {
//   let theBigest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (theBigest < arr[i]) {
//       theBigest = arr[i];
//     }
//   }
//   return theBigest;
// }
// console.log(theBigestNum(numbers));
// // 10)დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce)

// let number = [8, 4, 99, 30, 25, 45];
// function sumNum(arr) {
//   let sumNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumNum += arr[i];
//   }
//   return sumNum;
// }
// console.log(sumNum(number));
