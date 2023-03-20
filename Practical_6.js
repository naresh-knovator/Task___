// 1
const company = "Coding Academy";
const str1 =
  "You cannot end a sentence with because because because is a conjunction";
const str2 = "because because because";

// 2
// console.log("company :", company)

// 3
// console.log("company length :", company.length)

// 4
// console.log("company toUpperCase :", company.toUpperCase())

// 5
// console.log("company toLowerCase :", company.toLowerCase())

// 6
// console.log("company slice :", company.slice(company.indexOf(" ") + 1))
// console.log("company substring :", company.substring(company.indexOf(" ") + 1))
// console.log("company substr :", company.substr(company.indexOf(" ") + 1))

// 7
const phrase = str1.substr(str1.indexOf("because"), 23);
// console.log(phrase);

// 8
// console.log(company.includes("Academy"));

//9
const array = company.split("");
// console.log(array);

// 10
// console.log(company.split(" "));

// 11
const str3 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(str3.split(","))

// 12
// console.log(company.replace("Coding Academy", "Microsoft Academy"))

// 13
// console.log(company.charAt(10))

// 14
// console.log(company.charCodeAt("A"))

// 15
// console.log("company indexOf c :",company.indexOf("c"))

// 16
// console.log("company lastIndexOf c :",company.lastIndexOf("c"))

// 17
// console.log("company indexOf because :",str1.indexOf("because"))

// 18
// console.log("company lastIndexOf because :",str1.lastIndexOf("because"))

// 19
// console.log("company search :",str1.search("because"))

// 20
// console.log("company trim :",company.trim(""))

// 21
// console.log("company startsWith :",company.startsWith("Coding"))

// 22
// console.log("company endsWith :",company.endsWith("Academy"))

// 23
// console.log("company match :",company.match(/c/gi))

// 24
// console.log(str1.match(/because/gi))
// console.log(str1.match(/because/gi).length)

// 25
// console.log(company.concat(str1));

// 26
// console.log(company.repeat(5))

// 27
const str4 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
// Total income from salary per year = 5000 euro/month x 12 months = 60,000 euro/year
// Total annual bonus = 10,000 euro/year
// Total income from online courses per year = 15000 euro/month x 12 months = 180,000 euro/year

// Therefore, the person's total annual income can be calculated by adding the above figures:

// Total Annual Income = 60,000 euro/year (salary) + 10,000 euro/year (bonus) + 180,000 euro/year (online courses) = 250,000 euro/year

// 28
let x = 1;
let y = "1";
let z = [1];
// console.log(x == y)
// console.log(y == z)
// console.log(z == x)

// 29
x = 1;
y = "1";
z = [1];
// console.log(x === y)
// console.log(y === z)
// console.log(z === x)

// 30
// console.log(4 > 3)
// console.log(4 >= 3)
// console.log(4 < 3)
// console.log(4 <= 3)
// console.log(4 == 4)
// console.log(4 === 4)
// console.log(4 != 4)
// console.log(4 !== 4)
// console.log(4 != '4')
// console.log(4 == '4')
// console.log(4 === '4')

// 31
const arr = [
  { English: 25 },
  { French: 45 },
  { Arabic: 91 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 },
];
const sortedArr = arr
  .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
  .slice(0, 5);
// console.log(sortedArr);

// 32
let ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
class statistics {
  static count(age) {
    return age.length;
  }
  static sum(age) {
    return age.reduce((a, b) => {
      return a + b;
    });
  }
  static min(age) {
    return Math.min.apply(null, age);
  }
  static max(age) {
    return Math.max.apply(null, age);
  }
  static range(age) {
    return Math.max.apply(null, age) - Math.min.apply(null, age);
  }
  static mean(age) {
    return Math.ceil(
      age.reduce((a, b) => {
        return a + b;
      }) / age.length
    );
  }
  static median(age) {
    const sort = age.sort((a, b) => {
      return a - b;
    });
    const middle = sort[(sort.length - 1) / 2];
    return middle;
  }
  static mode(age) {
    let mode = 0;
    let count = 0;
    for (let i = 0; i < age.length; i++) {
      let tempMode = age[i];
      let tempCount = 1;
      for (let j = i + 1; j < age.length; j++) {
        if (age[j] == tempMode) {
          tempCount++;
        }
      }
      if (tempCount > count) {
        mode = tempMode;
        count = tempCount;
      }
    }
    return { mode, count };
    // const mean = statistics.mean(age)
    // const median = statistics.median(age)
    // const mode = 3*median - 2*mean;
    // return mode;
  }
  static variance(age) {
    const mean = statistics.mean(age);
    const squareDiffs = age.map((val) => Math.pow(val - mean, 2));
    const variance = squareDiffs.reduce((a, b) => a + b, 0) / age.length;
    return variance.toFixed(1);
  }
  static standardDeviation(age) {
    const variance = statistics.variance(age);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation.toFixed(1);
  }
  static frequencyDistribution(age) {
    let freq = {};
    for (let i = 0; i < age.length; i++) {
      if (freq[age[i]]) {
        freq[age[i]]++;
      } else {
        freq[age[i]] = 1;
      }
    }
    return freq;
  }
}

// console.log("count: ", statistics.count(ages))
// console.log("sum: ", statistics.sum(ages))
// console.log("min: ", statistics.min(ages))
// console.log("max: ", statistics.max(ages))
// console.log("range: ", statistics.range(ages))
// console.log("mean: ", statistics.mean(ages))
// console.log("median: ", statistics.median(ages))
// console.log("mode: ", statistics.mode(ages))
// console.log("variance: ", statistics.variance(ages))
// console.log("standardDeviation: ", statistics.standardDeviation(ages))
console.log("frequencyDistribution: ", statistics.frequencyDistribution(ages));

// 33
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const clean = sentence.replace(/[^\w\s]/gi, "");
// console.log(clean)
text = clean.toLowerCase();
const words = text.split(" ");
const filteredWords = words.filter((word) => word !== "");
const wordCounts = filteredWords.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1;
  return counts;
}, {});

const wordArray = Object.entries(wordCounts).map((entry) => {
  return {
    word: entry[0],
    count: entry[1],
  };
});
const topWords = wordArray.sort((a, b) => b.count - a.count).slice(0, 3);
// console.log('topWords: ', topWords);

// 34
const arr3 = [3, 5, 7];
const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
// console.log(shuffle(arr3))

// 35
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
    isLogged: true,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
    isLogged: false,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
    isLogged: true,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
    isLogged: false,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
    isLogged: true,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
    isLogged: false,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
    isLogged: false,
  },
];

function filterUsersByScore(users, score) {
  return users.filter((user) => user.scores > score);
}

function addUserIfNotExists(users, user) {
  const userExists = users.some((u) => u.name === user.name);
  if (!userExists) {
    users.push(user);
  }
}

function addUserSkill(users, name, skill) {
  const user = users.find((u) => u.name === name);
  if (user) {
    user.skills.push(skill);
  }
}

function editUser(users, name, newValues) {
  const user = users.find((u) => u.name === name);
  if (user) {
    Object.assign(user, newValues);
  }
}

const highScoringUsers = filterUsersByScore(users, 85);
// console.log(highScoringUsers);

const newUser = {
  name: "Max",
  scores: 85,
  skills: ["HTM", "CSS"],
  age: 24,
};
addUserIfNotExists(users, newUser);
// console.log(users);

addUserSkill(users, "John", "Node");
// console.log(users);

editUser(users, "David", { scores: 80, skills: ["HTM", "CSS", "JS"] });
// console.log(users)

// 36
const doggy = {
  name: "",
  legs: 4,
  color: "",
  age: 0,
  bark: function () {
    return "woof woof";
  },
};
// 37
// console.log(doggy)

// 38
const dog = {
  name: "Fido",
  legs: 4,
  color: "brown",
  age: 3,
  bark: function () {
    return "woof woof";
  },
};

// 39
// console.log("Dog Name :",dog.name);
// console.log("Dog Legs :",dog.legs);
// console.log("Dog Color :",dog.color);
// console.log("Dog Age :",dog.age);
// console.log("Dog Bark :",dog.bark())

// 40
dog.breed = "Labrador";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs and is ${this.age} years old.`;
};
// console.log("Dog Breed :",dog.breed);
// console.log("Dog Info :",dog.getDogInfo());

// 41
const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [
    { description: "Salary", amount: 5000 },
    { description: "Freelance Work", amount: 1000 },
  ],
  expenses: [
    { description: "Rent", amount: 1500 },
    { description: "Groceries", amount: 500 },
    { description: "Entertainment", amount: 300 },
  ],
  totalIncome: function () {
    let total = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      total += this.incomes[i].amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      total += this.expenses[i].amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Account Information:\nName: ${this.firstName} ${
      this.lastName
    }\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
// console.log(personAccount)

// 42
const loggedInUsersCount = users.filter((user) => user.isLogged).length;
// console.log('Number of logged in users :', loggedInUsersCount);

const usersWith50PointsOrMoreCount = users.filter(
  (user) => user.scores >= 50
).length;
// console.log('Number of users with 50 points or more :', usersWith50PointsOrMoreCount);

// 43
const newUsers = [
  ...users,
  {
    name: "DEV",
    scores: 100,
    skills: ["JS", "TS", "Node.js"],
    age: 99,
  },
];

// console.log(newUsers);

// 44
const keys = Object.keys(users[0]);
// console.log('All keys of users object:', keys)

// 45
const values = users.map((user) => Object.values(user));
// console.log('All values of users object:', values);

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

// 46
const response = JSON.stringify(student.skills);
// console.log(response)

// 47
const response2 = JSON.stringify(student.age);
// console.log(response2)

// 48
const response3 = JSON.stringify(student.isMarried);
// console.log(response3)

// 49
const response4 = JSON.stringify(student);
// console.log(response4)

// 50
const response5 = JSON.stringify(student, ["firstName", "lastName", "skills"]);
// console.log(response5)
