// #region Basic Type and Variable

let myName: string = "Ketut";

let myAge: number = 25;

let isStudent: boolean = true;

console.log(myName); // Output: Ketut
console.log(myAge); // Output: 25
console.log(isStudent); // Output: true

let myAnyVar: any = "Hello";

myAnyVar = 123;

myAnyVar = true;

console.log(myAnyVar); // Output: true


// #endregion

// #region Basic Union

type MyColor = "Purple" | "Orange" | "Blue";

const myColor1: MyColor = "Purple";

const myColor2: MyColor = "Orange";

const myColor3: MyColor = "orange";

const myColor4: MyColor = true;

const myColor5: MyColor = 123;

const myColor6: MyColor = "Yellow";

// #endregion

// #region Basic Typeof

const shirt = {
  color: "black",
  size: "XXL",
  prize: 150000,
  material: "cotton",
  merk: "uniqlo"
}

const myShirt: typeof shirt = {
  color: "white",
  size: "L",
  prize: 110000,
  material: "cotton",
  merk: "adidas"
}

const mySisterShirt: typeof shirt = {
  color: "pink",
  size: "XL",
  prize: 120000,
  material: "cotton",
  merk: "uniqlo",
  year: 2025
}

// #endregion

// #region Basic Enum

enum TrafficLight {
  Red = 1,
  Yellow = 2,
  Green = 3
}

let currentLight: number = 1;

if (currentLight === TrafficLight.Red) {
  console.log("Stop")
} else if (currentLight === TrafficLight.Yellow) {
  console.log("Caution")
} else if (currentLight === TrafficLight.Green) {
  console.log("Go")
}

// #endregion

// #region Basic Array

const fruits: string[] = ["Apple", "Banana", "Cherry"];

fruits.push("Grape");

console.log(fruits);

const randomThings: (string | number | boolean)[] = ["Tomato", 2, true];

console.log(randomThings)

// #endregion

// #region Basic Object

type PersonalInfo = {
  name: string;
  age?: number;
  isStudent?: boolean;
}

const personalInfo: PersonalInfo = {
  name: "Ketut",
  age: 25,
  isStudent: true
};

personalInfo.age = 26;

console.log(personalInfo);

// personalInfo.name = 123; // Error: Type 'number' is not assignable to type 'string'.
// personalInfo.isStudent = "true"; // Error: Type 'string' is not assignable to type 'boolean'.
// personalInfo.height = 170; // Error: Property 'height' does not exist on type 'PersonalInfo'.

const myPersonalInfo: PersonalInfo = {
  name: "Pututtt",
} // note error, because `age` and `isStudent` is optional

myPersonalInfo.name = "Putu"
myPersonalInfo.age = 30

console.log(myPersonalInfo)

// type People = Array<{
//   name: string;
//   age?: number;
//   isStudent?: boolean;
// }>

// type People = {
//   name: string;
//   age?: number;
//   isStudent?: boolean;
// }[]

type People = PersonalInfo[];

const people: People = [{
  name: "Nyoman",
  age: 25,
  isStudent: true
}, {
  name: "Made",
  age: 29,
  isStudent: true
}, {
  name: "Kadek",
  age: 23,
  isStudent: false
}]

console.log(people)

// #endregion

// #region Basic Record

type FruitCount = Record<string, number>;

const fruitCount: FruitCount = {
  apple: 10,
  banana: 5,
  orange: 7,
};

console.log(fruitCount)

type FruitCountDetail = Record<string, { count: number; price: number }>;

const fruitCountDetail: FruitCountDetail = {
  apple: { count: 10, price: 1 },
  banana: { count: 5, price: 0.5 },
  orange: { count: 7, price: 0.8 },
};

console.log(fruitCountDetail)

type FruitEnum = "apple" | "banana" | "orange";

type FruitCountDetailWithEnum = Record<FruitEnum, { count: number; price: number }>;

const fruitCountDetailWithEnum: FruitCountDetailWithEnum = {
  apple: { count: 10, price: 1 },
  banana: { count: 5, price: 0.5 },
  orange: { count: 7, price: 0.8 },
  // peach: { count: 3, price: 0.7 } // Error: Type '"peach"' is not assignable to type '"apple" | "banana" | "orange"'
};

console.log(fruitCountDetailWithEnum.orange)

// #endregion

// #region Basic Omit

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
};

type UserWithoutPassword = Omit<User, "password">;

const user: UserWithoutPassword = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30,
  // password: "password123" // Error: Type 'string' is not assignable to type 'never'.
};

type UserWithoutPasswordAndEmail = Omit<User, "password" | "email">;

const user2: UserWithoutPasswordAndEmail = {
  id: 1,
  name: "John",
  age: 30,
  // password: "password123" // Error: Type 'string' is not assignable to type 'never'.
  // email: "john@example.com" // Error: Type 'string' is not assignable to type 'never'.
}

console.log(user2)

// #endregion

// #region Basic Function

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3))

function greet(name?: string): string {
  return `Hello, ${name ?? "Brother"}`;
}

console.log(greet("Kadek"))

function stringToWordArray(str: string): string[] {
  return str.split(" ");
}

console.log(stringToWordArray("Hello World"))

function wordArrayToString(arr: string[]): string {
  return arr.join(" ");
}

console.log(wordArrayToString(["Hello", "World"]))

// #endregion

// #region Generic

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));

const myDatabase = [
  {
    tableName: "fruit",
    data: [
      { name: "melon", count: 20 },
      { name: "banana", count: 10 },
      { name: "apple", count: 5 }
    ],
  },
  {
    tableName: "game",
    data: [
      { name: "The Legend of Zelda", genre: "Action-Adventure", playTime: 123 },
      { name: "Super Mario Bros.", genre: "Platformer", playTime: 45 },
      { name: "Genshin Impact", genre: "Gacha RPG", playTime: 60 }
    ]
  }
]

function getDataFromDatabase<T>(tableName: string, database: typeof myDatabase): T | string {

  let currentData: T | undefined = undefined

  database.forEach((table) => {
    if (table.tableName === tableName) {
      const data = table.data
      currentData = data as T
    }
  });

  if (currentData && (currentData as unknown[]).length > 0) {
    return currentData
  }

  return `Table ${tableName} not found`;
}

console.log(getDataFromDatabase<{ name: string; count: number }[]>("fruit", myDatabase));
console.log(getDataFromDatabase<{ name: string; genre: string; playTime: number }[]>("game", myDatabase));
console.log(getDataFromDatabase<{ name: string; genre: string; price: number }[]>("vegetable", myDatabase));



async function fetchPostData<T>(stringUrl: string): Promise<T> {
  // Like the browser fetch API, the default method is GET
  const response = await fetch(stringUrl);
  const data: T = await response.json();
  return data
  // returns something like:
  //   {
  //   userId: 1,
  //   id: 1,
  //   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //   body: 'quia et suscipit\n' +
  //     'suscipit recusandae consequuntur expedita et cum\n' +
  //     'reprehenderit molestiae ut ut quas totam\n' +
  //     'nostrum rerum est autem sunt rem eveniet architecto'
  // }
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function displayData() {
  const postData = await fetchPostData<Post>('https://jsonplaceholder.typicode.com/posts/1');
  console.log(postData);
  console.log(postData.userId);
  console.log(postData.id);
  console.log(postData.title);
  console.log(postData.body);
  console.log("")
  console.log("Your TS environment is working fine!");
}
displayData()

// #endregion
