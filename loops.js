// var numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];
// var largestNumber = 0;
// var secondLargestNumber = 0;

// for (var i = 0; i < numbers.length; i++) {
//     if (largestNumber < numbers[i]) {
//         largestNumber = numbers[i];
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (secondLargestNumber < numbers[i] && numbers[i] < largestNumber) {
//         secondLargestNumber = numbers[i];
//     }
// }

// console.log(secondLargestNumber);



// var numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3,];
// var doplicate = [];


// for(var i = 0; i < numbers.length; i++){
//     var first = numbers[i];
//     for(var j = i + 1; j < numbers.length; j++){
//         var second = numbers[j];
//         if(first === second){
//             doplicate.push(second)
//         }
//     }
// }

// console.log(doplicate);





// var word = prompt('Enter a word:');
// var palindrom = '';
// for(var i = word.length - 1; i >= 0; i--){
//     palindrom += word[i];
// }

// if(palindrom === word){
//     console.log(palindrom + ' is a palindrom word.');
// }else{

//     console.log(palindrom + ' is not a palindrom word.');
// }








// var celsius = 100;
// function calsiusToFahrenhiet(cel){
//     return (cel * (9/5)) + 32
// }

// var fahrenhiet = calsiusToFahrenhiet(celsius);
// console.log(fahrenhiet);



// var word = prompt('Enter a word:');
// var count = 0;

// for(var i = 0; i < word.length; i++){
//     if(word[i] === 'a'){
//         count++
//     }else if(word[i] === 'i'){
//         count++
//     }else if(word[i] === 'e'){
//         count++
//     }else if(word[i] === 'o'){
//         count++
//     }else if(word[i] === 'u'){
//         count++
//     }
// }

// console.log(count);



// var number = +prompt('Enter a number');
// var isPrime = true;

// if(number <= 1){
//     isPrime = false;

// }


// for (var i = 2; i < number; i++) {
//     if (number % i === 0) {
//         isPrime = false;
//         break
//     }
// }


// if (isPrime) {
//     console.log("It's a Prime.");
// } else {
//     console.log("It's not a Prime.");

// }



// var number = +prompt('Enter a number:');
// var first = 0;
// var second = 1;


// for (var i = 0; i <= number; i++) {
//     if (i === 0) {
//         console.log(first);
//     } else if (i === 1) {
//         console.log(second);
//     } else {
//         var third = first + second;
//         console.log(third);

//         first = second;
//         second = third;
//     }
// }





// var clothingBrands = ['Sana', 'Bakra', 'Jabra', 'Zara', 'Ronaq', 'Beej', 'Soule', 'Jabra', 'Sana', 'Sana', 'Bakra', 'Jabra', 'Zara', 'Ronaq'];
// // var clothingBrands = ['sana', 'sana', 'sana']
// var same = [];
// var count = 1;

// for (var i = 0; i < clothingBrands.length; i++) {
//     var first = clothingBrands[i];
//     for (var j = i + 1; j < clothingBrands.length; j++) {
//         var second = clothingBrands[j];
//         if (first === second && first !== third) {
//             count++;
//             same.push(first)
//         }

//     }
//     if (count > 1) {
//         console.log(first, count);
//         count = 1;
//     }
// }





// var clothingBrands = ['Sana', 'Bakra', 'Jabra', 'Zara', 'Ronaq', 'Beej', 'Soule', 'Jabra', 'Sana', 'Sana', 'Bakra', 'Jabra', 'Zara', 'Ronaq'];
// // var clothingBrands = ['sana', 'sana', 'sana']

// for (var i = 0; i < clothingBrands.length; i++) {
//     var first = clothingBrands[i];
//     for (var j = i + 1; j < clothingBrands.length; j++) {
//         var second = clothingBrands[j];
//         if (first === second) {
//             clothingBrands.splice(j, 1)
//         }

//     }
// }

// console.log(clothingBrands);




// var numbers = [1, 10, 2, 3, 4, 5, 6, 7];
// var largest = 0;

// for(var i = 0; i < numbers.length; i++){
//     var itration = numbers[i];
//     if(itration > largest){
//         largest = itration;
//     }
// }

// var secondLargest = 0;

// for(var i = 0; i < numbers.length; i++){
//     var itration = numbers[i];
//     if(itration > secondLargest && itration < largest){
//         secondLargest = itration;
//     }
// }

// console.log(largest);
// console.log(secondLargest);



// var word = 'prompt';
// var specificLetter = 'p';
// var count = 0;

// for(var i = 0; i < word.length; i++){
//     var letter = word[i]
//     if(specificLetter === letter){
//         count++
//     }
// }

// console.log(specificLetter, count);


// var number = +prompt('Enter a number:');

// for(var i = 1; i <= 10; i++){
//     console.log(number + ' X ' + i + ' = ' + (number*i));    
// }

// var cities = ['Karachi', 'Lahore', 'Multan', 'Pishawar'];
// var newCities = [];

// for(var i = cities.length - 1; i >= 0; i--){
//     newCities.push(cities[i])
// }

// console.log(newCities);

//   *
//  ***
// *****

// ```js

// var star = '';

// for(var i = 0; i < 5; i++){
//     star += '*'
//     console.log(star);
    
// }

// ```

// Output:

// ```text
// *
// **
// ***
// ****
// *****
// ``



// var word = 'r a c e c a        r';
// var palindrom = '';
// var correct = '';


// for(var i = 0; i < word.length; i++){
//     if(word[i] !== ' '){
//         correct += word[i];
//     }
// }

// for(var i = word.length - 1; i >= 0; i--){
//     if(word[i] !== ' '){
//         palindrom += word[i];
//     }
// }

// if(correct === palindrom){
//     console.log('ok');
// }else{
//     console.log('No');
    
// }


var sentence = 'I am a begineer in English.';

var word = '';
for(var i = 0; i < sentence.length; i++){
    if(sentence[i] !== ' '){
        word += sentence[i];
    }else if(sentence[i] === ' '){
        var count = 0;
        for(var i = 0; i < word.length; i++){
            if(count <= word.length){
                count++
            }
        
     
        }
        word = ''
    }
}
console.log(count);
