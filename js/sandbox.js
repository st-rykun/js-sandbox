"use strict"; // суворий режим ввімкнено

// Можна увімкнути всередині окремої функції, але зазвичай це роблять для всього файлу
//js comment
// Важливо: Коментарі не впливають на швидкість завантаження, бо зникають під час «мініфікації» коду перед деплоєм.

// MESSI GOALS
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// MAKE IT NEGATIVE
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//PERSONALIZE MESSAGE

function greet(name, owner) {
  let message = null;
  if (owner === "boss") {
    message = "Hello boss";
  } else if (owner === "guest") {
    message = "Hello guest";
  } else {
    message = "Hello unknown!";
  }
  return console.log(message);
}

// Boss vs Guest
function greet(name, owner) {
  let res = name === owner ? "Hello boss" : "Hello guest";
  return console.log(`${res}`);
}

// // KEEP HYDRATED
function litres(time) {
  return Math.floor(time * 0.5);
}

// // LOVE FUNCTION
function lovefunc(flower1, flower2) {
  let res = (flower1 + flower2) % 2 === 0 ? false : true;
  return res;
}

// Convert String to Array

function stringToArray(string) {
  return string.split(" ");
}

//DNAtoRNA

function DNAtoRNA(dna) {
  let strToArr = dna.split("");

  strToArr.forEach((char, i) => {
    if (char === "T") {
      strToArr[i] = "U";
    }
  });
  return strToArr.join("");
}

// MINIMUM AND MAXIMUM
//мені треба звернутиьсь до елемента масива
// передати його у змінну
// порівняти його з наступним елементом масива
// якщо він більший, то замінити його на наступний елемент масива

function getMinArrNum(list) {
  let isMin = list[0];
  list.forEach((num, i) => {
    if (num < isMin) {
      isMin = num;
    }
  });
  return isMin;
}

function getMaxArrNum(list) {
  let isMax = list[0];
  list.forEach((num, i) => {
    if (num > isMax) {
      isMax = num;
    }
  });
  return isMax;
}


