///// Задание 1 /////

function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/\s/g, '');
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

///// Задание 2 /////

function findShortestWord(sentence) {
const words = sentence.split(' ');
return words.reduce((shortest, word) =>
word.length < shortest.length ? word : shortest, words[0]);
}

console.log(findShortestWord("The quick brown fox jumps")); // "The"
console.log(findShortestWord("I love programming")); // "I"

///// Задание 3 /////

function createPhoneNumber(numbers) {
    const numStr = String(numbers).padStart(10, '0');
    
    return `8 (${numStr.slice(0, 3)}) ${numStr.slice(3, 6)}-${numStr.slice(6)}`;
}

console.log(createPhoneNumber(123456789)); // 8 (123) 456-789
console.log(createPhoneNumber(987654321)); // 8 (987) 654-321
console.log(createPhoneNumber(123));        // 8 (000) 000-0123


///// Задание 4 /////

function findMinMax(arr) {
    if (arr.length === 0) return null; 

    const min = Math.min(...arr); // Находим минимум
    const max = Math.max(...arr); // Находим максимум

    return { min, max }; 
}

console.log(findMinMax([3, 5, 1, 8, 2])); // { min: 1, max: 8 }
console.log(findMinMax([-1, -5, 0, 3])); // { min: -5, max: 3 }

///// Задание 5 /////

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr; 
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]