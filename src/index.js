/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
  let str = '';
  for(let count = 0; count < string.length; count++) {
    if((string[count] === 'v') || (string[count] === 'z') || (string[count] === 'V') || (string[count] === 'Z')) {
      str += '*';
      continue;
    }
    str += `${string[count]}`;
  }
  string = str;
  return string;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
  let str = '';
  if(!string.includes(word)){
    return string;
  }
  str = `${string.slice(0, string.indexOf(word))}` +
    `${newWord}${string.slice((string.indexOf(word) + word.length), string.length)}`;
  string = str;
  return string;
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
  string = `${string.slice(0, 3)}`;
  return string;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
  let numberOfCharacters = 0;
  string = string.toLocaleLowerCase();
  symbol = symbol.toLocaleLowerCase();
  for(let count = 0; count < string.length; count++) {
    if(string[count] === symbol) {
      numberOfCharacters++;
    }
  }
  return numberOfCharacters;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
  let numberOfCharacters = 0;
  let count = 0;
  string = string.toLocaleLowerCase();
  symbol = symbol.toLocaleLowerCase();

  while (true) {
    if(string.indexOf(symbol, count) === -1) {
      break;
    }
    count = string.indexOf(symbol, count);
    numberOfCharacters++;
    count++;
  }
  return numberOfCharacters;
};
