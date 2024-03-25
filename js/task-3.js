// // Задача 3. Конструктор рядків
// //Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.
// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.

class StringBuilder {
  #initialValue;
  constructor(initialValue) {
    this.#initialValue = initialValue;
  }
  getValue() {
    return this.#initialValue;
  }
  padEnd(str) {
    this.#initialValue += str;
  }
  padStart(str) {
    this.#initialValue = `${str}${this.#initialValue}`;
    // console.log('this: ', this.#initialValue);
    // console.log('str: ', str);
  }
  padBoth(str) {
    // this.#initialValue = `${str}${this.#initialValue}${str}`;
    this.#initialValue = str + this.#initialValue + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
