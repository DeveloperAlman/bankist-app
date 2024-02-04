'use strict';
//----------------------------------------------
//----------------------------------------------
// LECTURES

// Array Methods
let arr = ["a", "b", "c", "d", "e"];

// slice() method for array
// slice(beginning parameter where start to slice, ending parameter to finish slice)
// it start slice from what index and does NOT mutate or change original arr Array
console.log(arr.slice(2)); // (3 el) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // (2 el) ['c', 'd']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(0, 3)); // (3 el) ['a', 'b', 'c']

// splice() method
// splice works the same with slice() but return updated new array. Sliced elements are begone
// rest 2 elements were sliced and erased
console.log(arr.splice(3)); // (2 el) ['d', 'e']
console.log(arr); // (3 el) ['a', 'b', 'c']
console.log(arr.splice(-1)); // delete the last element from Array
console.log(arr); // (2 el) ['a', 'b']

// reverse() method
// reverse method reverse array elements from bottom to top and mutate (update) array
let arr2 = ["f", "c", "d", "e", "g"];
console.log(arr2.reverse()); // (5 el) ['g', 'e', 'd', 'c', 'f']

// concat() method
// concat method combines some arrays in 1 big array and update them
console.log(arr.concat(arr2)); // (7 el) ['a', 'b', 'g', 'e', 'd', 'c', 'f']
// or in other method use ... spread operator (the same works with concat())
let newArray = [];
console.log(newArray.push([...arr, ...arr2])); // (7) ['a', 'b', 'g', 'e', 'd', 'c', 'f']
console.log(newArray);

// join() method
// join method joins all letters between of all array elements and return as 1 string
console.log([...arr, ...arr2].join("+++")); // a+++b+++g+++e+++d+++c+++f

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop array
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You have debosit of ${movement}`)
  } else {
    console.log(`You have withdrawn ${Math.abs(movement)}`)
  }
}

// forEach() method for array
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You have debosit of ${movement}`)
  } else {
    console.log(`You have withdrawn ${Math.abs(movement)}`)
  }
});

// get current index inside of forEach() method
// arrayElements.forEach(function(elements, index){.....})
movements.forEach(function (movement, index, arr) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You have debosit of ${movement}`)
  } else {
    console.log(`Movement ${index + 1}: You have withdrawn ${Math.abs(movement)}`)
  }
});

// forEach() method on maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
});

// map method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (movement) {
  return movement * eurToUsd;
});
console.log(movements, movementsUSD);

/* Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀 */

const checkDogs = function (dogJulia, dogKate) {
  const dogsJuliaCorrected = dogJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogKate);
  console.log(dogs);

  dogs.forEach(function (dog, index) {
    const checkAdult = dog >= 3 ? "an adult" : "a puppy";
    console.log(`Dog ${index + 1} is ${checkAdult}, and is ${dog} years old`);
  })
}

checkDogs([3, 5, 2, 10, 7], [4, 1, 9, 8, 3]);

/* Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀 */

const calcAveragHumanAges = function (ages) {
  let humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges)
}

calcAveragHumanAges([5, 2, 4, 1, 15, 8, 3]);

//----------------------------------------------
//----------------------------------------------
// BANKIST APP

// Data
const account1 = {
  owner: 'Alman Nazyrov',
  movements: [221.26, 458.44, -430, 3667.13, -640, -231.92, 74, 1322, -199.21, 891],
  interestRate: 0.04, // %
  pin: 1111,
  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2022-12-26T21:31:17.178Z',
    '2022-12-29T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2024-01-01T17:01:17.194Z',
    '2024-01-02T23:36:17.929Z',
    '2024-01-05T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Sakhab Nazyrov',
  movements: [5000.22, 3400.98, -150, -790, -3210.81, -1000, 8500.01, -30.3],
  interestRate: 0.04,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Alvi Nazyrov',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.04,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account4 = {
  owner: 'Alim Nazyrov',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 0.04,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
  ],
};

const startLogOutTimer = function () {
  const tick = function () {
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${minutes}:${seconds}`;
    // when reach 0 seconds, log out and hide UI
    if (time === 0) {
      startLogOutTimer();
      clearInterval(timer);
    }

    time--;
  }
  // set time for 10 minutes
  let time = 10;
  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}

const accounts = [account1, account2, account3, account4];
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  // deleting (clearing) old html elements with empty string
  containerMovements.innerHTML = "";

  const movementsSort = sort ? movements.slice().sort((a, b) =>
    a - b) : movements;
  // creating new movement
  movementsSort.forEach(function (movement, index) {
    const checkType = movement > 0 ? "deposit" : "withdrawal";
    const operationSign = movement > 0 ? "+" : "";

    const date = new Date(currentAccount.movementsDates[index]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const hour = `${date.getHours()}`.padStart(2, 0);
    const minute = `${date.getMinutes()}`.padStart(2, 0);

    const displayDate = `${day}/${month}/${year}, ${hour}:${minute}`;
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;

    const movementHtml =
      ` <div class="movements__row">
        <div class="movements__type movements__type--${checkType}">№ ${index + 1}  ${checkType}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${operationSign}${movement.toFixed(2)} Pi</div>
      </div>`;
    // insertAdjacentHTML works when we need to attach element to html tag
    // movement element was attached to container (inserted as html)
    containerMovements.insertAdjacentHTML('afterbegin', movementHtml);
  });
};

// displayMovements(account1.movements);

// computing and transforming names to Usernames
const createUsername = function (users) {
  users.forEach(function (user) {
    user.username = user.owner.toLowerCase().split(" ")[0];
  });
}
createUsername(accounts);
console.log(accounts);

// return only positive (that more than 0 (deposits)) movements
const deposits = movements.filter(function (movement) {
  return movement > 0;
});
console.log(deposits); // (5 el) [200, 450, 3000, 70, 1300]

// return only negative (that less than 0 (withdrawals)) movements
const withdrawals = movements.filter(function (movement) {
  return movement < 0;
});
console.log(withdrawals);

// accumulating balance with all movements together in 1 value number
// combinening all movements values to 1 number
const balance = movements.reduce(function (accumulator, movement) {
  return accumulator + movement;
}, 0); // 0 is required to tell accumulator in reduce method that balance starter from 0 and increases with movemenets
console.log(balance); // 3840€

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(function (accumulator, movement) {
    return accumulator + movement;
  }, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)} Pi`;
  console.log(account.balance);
};

// calcDisplayBalance(account1.movements);

// Covert Pi currency to USD
const piConvertUSD = 27.2;
let depositUSD = movements.filter(function (movement) {
  console.log(movement);
  return movement > 0;
}).map(function (movemenet) {
  return movemenet = movemenet * piConvertUSD;
}).reduce(function (accumulator, movemenet) {
  return accumulator = movemenet + accumulator;
}, 0);
console.log(depositUSD);

const calcDisplaySummary = function (account) {
  // Incomes green in below
  const incomes = account.movements.filter(function (movement) {
    return movement > 0;
  }).reduce(function (accumulator, movement) {
    console.log(movement);
    return accumulator = movement + accumulator;
  }, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)} Pi`;

  // Outcomes red out below
  const outcomes = account.movements.filter(function (movement) {
    return movement < 0;
  }).reduce(function (accumulator, movement) {
    return movement = accumulator + movement
  }, 0);
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)} Pi`;

  // Interest
  const interest = account.movements.filter(function (movement) {
    return movement > 0;
  }).map(function (movement) {
    return movement = movement * account.interestRate;
  }).filter(function (movement) {
    return movement >= 1;
  }).reduce(function (accumulator, deposit) {
    return accumulator = deposit + accumulator;
  }, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} Pi`;
};

// calcDisplaySummary(account1.movements);

// find() method
// find method works to find only the first element that satisfies condition
const accountTest = accounts.find(function (account) {
  return account.username === "alman";
});
console.log(accountTest);

// Event handlers
// defining for current account
let transferWarning = ["Wrong account", "Transfer to", "Transfer successful!"];
let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {
  // prevent from submitting and reloading page
  e.preventDefault();

  // finding the first account that matches with condition
  currentAccount = accounts.find(function (account) {
    return account.username === inputLoginUsername.value;
  });
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI of current account and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
    document.querySelector(".form-check-account").textContent = `${transferWarning[1]}`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputCloseUsername.value = inputClosePin.value = inputTransferAmount.value = inputTransferTo.value = inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // Clear interval while log in other account
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOutTimer();
    // Display movements
    displayMovements(currentAccount.movements);
    // Display Balance
    calcDisplayBalance(currentAccount);
    // Display Summary
    calcDisplaySummary(currentAccount);

  } else if (currentAccount === undefined) {
    prompt(`Account ${inputLoginUsername.value} was deleted!`);
  }
});

// Transfer
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amountToTransfer = Number(inputTransferAmount.value);
  const receiveAccount = accounts.find(function (account) {
    return account.username === inputTransferTo.value;
  });
  if (receiveAccount === undefined) {
    document.querySelector(".form-check-account").textContent = `${transferWarning[0]}`;
  } else {
    document.querySelector(".form-check-account").textContent = `${transferWarning[1]}`;
  }

  if (amountToTransfer > 0 && receiveAccount && currentAccount.balance >= amountToTransfer && receiveAccount?.username !== currentAccount.username) {
    currentAccount.movements.push(-amountToTransfer);
    receiveAccount.movements.push(amountToTransfer);
    document.querySelector(".form-check-account").textContent = `${transferWarning[2]}`;
    setTimeout(function () {
      // Add new dates
      currentAccount.movementsDates.push(new Date().toISOString());
      receiveAccount.movementsDates.push(new Date().toISOString());
      // Display movements
      displayMovements(currentAccount.movements);
      // Display Balance
      calcDisplayBalance(currentAccount);
      // Display Summary
      calcDisplaySummary(currentAccount);
      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 800);
  }
});

// Close account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(function (acc) {
      return acc.username === currentAccount.username;
    });
    accounts.splice(index, 1);
    console.log(index);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

// Request loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);
  if (loanAmount > 0 && currentAccount.movements.some(movement => movement >= loanAmount * 0.2)) {
    setTimeout(function () {    // Add new movements from requested loan
      currentAccount.movements.push(loanAmount);
      currentAccount.movementsDates.push(new Date().toISOString());
      // Display movements
      displayMovements(currentAccount.movements);
      // Display Balance
      calcDisplayBalance(currentAccount);
      // Display Summary
      calcDisplaySummary(currentAccount);
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = "";
});

// Sort movements
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//----------------------------------------------
//----------------------------------------------

// DATES, TIMERS, NUMBERS SECTION LECTURES
// DIFFERENT DATA! Contains movement dates, currency and locale
const accountTest1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const accountTest2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accountsTest = [accountTest1, accountTest2];

console.log(23 === 23.0);

// Create new date
const currentDate = new Date();
console.log(currentDate);