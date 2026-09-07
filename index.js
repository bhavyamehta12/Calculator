
const display = document.getElementById('display');

let firstNumber = '';
let secondNumber = '';
let operator = '';

function appendValue(value) {

    if (value == "-" || value == "/" || value == "*" || value == "+") {

        operator = value;
        firstNumber = display.value;
        display.value = "";

    } else {

        display.value += value;

    }
}

function calculate() {

    secondNumber = display.value;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let result;

    if (operator == "+") {
        result = num1 + num2;
    }

    else if (operator == "-") {
        result = num1 - num2;
    }

    else if (operator == "*") {
        result = num1 * num2;
    }

    else if (operator == "/") {

        if (num2 == 0) {
            display.value = "Error";
            return;
        }

        result = num1 / num2;
    }

    display.value = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function clearDisplay() {

    display.value = "";

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function remove() {

    display.value = display.value.slice(0, -1);

}

// Here are **all the interview questions we've done so far**, along with **your original answers** and my **rating/correction**.

// ## Question 1 — How the Web Works

// **Question:**

// > You type `https://example.com` into your browser and press Enter. Explain what happens from that moment until the webpage appears in the browser.

// **Your answer:**

// > "when we pass url the browser would analyse it and then dns comes to work it convert name into number that assaigned to url because browser can only acess number after that http request send to server than server process request ask database then server will send http request after it renders on browser then user can see th eresult"

// **Score: 7/10**

// ### Main corrections

// You understood the overall flow correctly, but:

// * DNS **resolves a domain name to an IP address**; it doesn't simply "convert the name into a number."
// * The browser can work with domain names, but DNS resolution gives it the destination IP.
// * The server sends an **HTTP response**, not another HTTP request.
// * You missed the **TLS handshake** because the URL uses HTTPS.
// * A database isn't necessarily contacted for every request.

// ### Professional answer

// > "When the user enters a URL, the browser parses it and DNS resolves the domain name to an IP address. Because the URL uses HTTPS, a TLS-secured connection is established. The browser then sends an HTTP request to the server. The server processes the request and may communicate with a database or other services if needed. It then sends an HTTP response back to the browser, which processes the returned resources and renders the webpage."

// ---

// # Question 2 — Client vs Server

// **Question:**

// > You're building a React + Node.js + Express application. A user clicks Login and enters an email and password. What is the responsibility of the client, and what is the responsibility of the server?

// **Your answer:**

// > "when user click login the data will send to server through https request through tns then server will check data if it is authenticated then it will give acess through http response to cliet"

// **Score: 7/10**

// ### Main corrections

// * "TNS" → **TLS**
// * The client sends the request.
// * The server performs the actual authentication.
// * The server should validate the credentials and check the database.
// * The client should not decide whether authentication succeeded.
// * After successful authentication, the server establishes authenticated state, commonly through a session/cookie or an appropriate token mechanism.

// ### Professional answer

// > "When the user submits the login form, the React client sends the credentials to the backend over HTTPS. The Express server validates the request, looks up the user in the database, and verifies the password against the stored password hash. If authentication succeeds, the server establishes authenticated state, such as a session cookie or another appropriate mechanism, and sends a response back to the client. React then updates the UI based on the result."

// ---

// # Question 3 — HTTP vs HTTPS

// **Question:**

// > What is the difference between HTTP and HTTPS, and why would you never want to send login credentials over plain HTTP in production?

// **Your answer:**

// > "http means hypertext transfer protocol it will communicate with client and server but anyone can acess the text that were communicated but in https it has s which is secure then tls comes to work it will secured data then http will communicate"

// **Score: 7.5/10**

// ### Main corrections

// Your basic concept was correct.

// The more precise explanation is:

// ```text
// HTTP = communication protocol
// HTTPS = HTTP over TLS
// ```

// Don't say that literally "anyone can access the text." More accurately, an attacker who can intercept the traffic may be able to read or modify it because plain HTTP doesn't provide TLS protection.

// You also need to remember:

// ```text
// TLS provides:
// Confidentiality
// Integrity
// Authentication
// ```

// ### Professional answer

// > "HTTP is a protocol used for communication between clients and servers. HTTP itself doesn't provide encryption, so sensitive data sent over plain HTTP may be exposed or modified if an attacker can intercept the traffic. HTTPS is HTTP over TLS, which provides confidentiality, integrity, and server authentication. That's why production applications use HTTPS, especially for login credentials, cookies, payments, and other sensitive data."

// ---

// # Question 4 — Production HTTPS Scenario

// **Question:**

// > Your React application runs at `https://myapp.com` and your backend at `https://api.myapp.com`. Why do we use HTTPS instead of HTTP, and what could happen if login requests were sent over plain HTTP?

// **Your answer:**

// > "anyone can acess plain text data because it doent use encryption and users credentials will be leaked or hacked thats why we use https which will handle encryption through tls which provide confidentiality integrationj and encryption"

// **Score: 8/10**

// ### Main corrections

// You correctly understood the security reason.

// Two terminology corrections:

// You said:

// > "integration"

// It should be:

// > **integrity**

// And:

// > "confidentiality, integration and encryption"

// should be:

// ```text
// Confidentiality
// Integrity
// Authentication
// ```

// Encryption is a **mechanism** used by TLS to help provide confidentiality; it isn't the third security property.

// Also, don't say credentials definitely "will be leaked." Say they **could potentially be exposed or modified if traffic is intercepted**.

// ### Professional answer

// > "We use HTTPS because login credentials are sensitive and should not be transmitted over an unencrypted HTTP connection. HTTPS uses TLS to protect the communication between the client and server. TLS provides confidentiality, integrity, and server authentication. With plain HTTP, an attacker who can intercept the traffic could potentially read sensitive information or modify the request. Therefore, production applications should use HTTPS for login and other sensitive communication."

// ---

// # Question 5 — HTTP Request and Response

// **Question:**

// > Your React application sends:
// >
// > `POST /api/login`
// >
// > with `Content-Type: application/json` and a JSON body containing email and password.
// >
// > What are the important parts of this HTTP request, and what should the server send back after successful login?

// **Your answer:**

// > "idk please explain me in detail"

// **Score: Not scored**

// You asked for an explanation rather than attempting the question, so I explained:

// ### HTTP Request

// ```text
// Request
// ├── Method
// ├── URL / Endpoint
// ├── Headers
// └── Body
// ```

// Example:

// ```http
// POST /api/login
// Content-Type: application/json
// ```

// ```json
// {
//   "email": "user@gmail.com",
//   "password": "123456"
// }
// ```

// The server then:

// ```text
// Receive request
//       ↓
// Validate input
//       ↓
// Find user
//       ↓
// Verify password hash
//       ↓
// Authenticate user
//       ↓
// Establish authenticated state
//       ↓
// Send response
// ```

// A successful response might be:

// ```http
// 200 OK
// ```

// with appropriate response data and authenticated state, such as a secure session cookie depending on the architecture.

// The password itself should **never be returned**.

// ---

// # Question 6 — Request Header vs Request Body

// **Question:**

// > What is the difference between a request header and a request body? Give me a real example from a React application.

// **Your answer:**

// > "request header contain what type of data you are given and in body it contains the data"

// **Score: 8/10**

// ### What you got right

// You understood the central difference:

// ```text
// Header → information/metadata about the request
// Body   → actual data being sent
// ```

// For example:

// ```http
// Content-Type: application/json
// ```

// tells the server that the body is JSON.

// And:

// ```json
// {
//   "email": "user@gmail.com",
//   "password": "123456"
// }
// ```

// is the actual request data.

// ### Important addition

// Headers are not limited to `Content-Type`.

// Examples:

// ```http
// Content-Type: application/json
// Authorization: Bearer <token>
// Accept: application/json
// Cookie: session=...
// ```

// ### Professional answer

// > "The request header contains metadata or additional information about the request, such as the content type, authorization information, or cookies. The request body contains the actual data being sent to the server, such as login credentials or product information."

// ---

// # Your Current Interview Performance

// Based on the questions you've attempted:

// | Topic                     | Performance |
// | ------------------------- | ----------: |
// | Basic web flow            |        7/10 |
// | Client vs Server          |        7/10 |
// | HTTP vs HTTPS             |      7.5/10 |
// | HTTPS production security |        8/10 |
// | Headers vs Body           |        8/10 |
// | **Current overall**       | **~7.5/10** |

// ### Your biggest strengths

// You already understand the **big picture**:

// ```text
// Client
//  ↓
// Request
//  ↓
// Server
//  ↓
// Database
//  ↓
// Response
//  ↓
// Client
// ```

// And you've correctly connected:

// ```text
// HTTPS → TLS → security
// ```

// ### Your biggest weakness

// Your **technical vocabulary and precision** need improvement.

// For example:

// ```text
// "number"        → IP address
// "TNS"           → TLS
// "HTTP request"  → HTTP response
// "integration"   → integrity
// ```

// This is actually good news: your underlying understanding is developing; now you need to make your explanations more technically precise.

// ## The questions you still need to answer

// We haven't completed the next one yet:

// > **A React application sends `GET /api/products`, and the server responds with `404 Not Found`. What does 404 mean, and what is the difference between 404, 401, and 500?**

// That is your **next interview question**.

// Here are **all the array-method questions you have done in this conversation, along with your answers and corrections**.

// # JavaScript Array Methods — Your Questions & Answers

// ## Question 1 — `map()`

// Given:

// ```js
// const orders = [
//     {
//         id: 1,
//         customer: "A",
//         amount: 5000,
//         status: "delivered"
//     },
//     {
//         id: 2,
//         customer: "B",
//         amount: 2000,
//         status: "pending"
//     },
//     {
//         id: 3,
//         customer: "C",
//         amount: 8000,
//         status: "delivered"
//     },
//     {
//         id: 4,
//         customer: "D",
//         amount: 3000,
//         status: "cancelled"
//     }
// ];
// ```

// **Question:** Get names of all customers.

// ### Your answer:

// ```js
// let names = orders.map((n) => {
//     return n.name
// })
// ```

// ### Result:

// ❌ **Incorrect**

// Your object contains `customer`, not `name`.

// ### Correct answer:

// ```js
// const names = orders.map((n) => {
//     return n.customer;
// });
// ```

// Output:

// ```js
// ["A", "B", "C", "D"]
// ```

// ### What you learned:

// `map()` is used when you want to **transform every element**.

// ---

// # Question 2 — `filter()`

// **Question:** Get only delivered orders.

// ### Your answer:

// ```js
// let ordered = orders.filter((val) => {
//     return val.status == "delivered"
// })

// console.log(ordered)
// ```

// ### Result:

// ✅ **Correct**

// A cleaner production-style version:

// ```js
// const ordered = orders.filter(
//     order => order.status === "delivered"
// );
// ```

// Output:

// ```js
// [
//     {
//         id: 1,
//         customer: "A",
//         amount: 5000,
//         status: "delivered"
//     },
//     {
//         id: 3,
//         customer: "C",
//         amount: 8000,
//         status: "delivered"
//     }
// ]
// ```

// ### What you learned:

// `filter()` keeps **all elements that satisfy a condition**.

// ---

// # Question 3 — `find()`

// **Question:** Find the order with `id = 3`.

// ### Your answer:

// ```js
// let fin = orders.find((val) => {
//     return val.id == 3
// })

// console.log(fin)
// ```

// ### Result:

// ✅ **Correct**

// Production-style:

// ```js
// const fin = orders.find(order => order.id === 3);
// ```

// Output:

// ```js
// {
//     id: 3,
//     customer: "C",
//     amount: 8000,
//     status: "delivered"
// }
// ```

// ### What you learned:

// `find()` returns the **first matching element**.

// Important:

// ```text
// find()   → one element
// filter() → array of elements
// ```

// ---

// # Question 4 — `some()`

// **Question:** Check whether any order is cancelled.

// ### Your answer:

// ```js
// let check = orders.some((n) => {
//     return n.status =="cancelled"
// })

// console.log(check)
// ```

// ### Result:

// ✅ **Correct**

// Production-style:

// ```js
// const check = orders.some(
//     order => order.status === "cancelled"
// );
// ```

// Output:

// ```js
// true
// ```

// ### Why?

// Because this order exists:

// ```js
// {
//     id: 4,
//     customer: "D",
//     amount: 3000,
//     status: "cancelled"
// }
// ```

// ### What you learned:

// `some()` asks:

// > **Does at least one element satisfy the condition?**

// It returns only:

// ```js
// true
// ```

// or

// ```js
// false
// ```

// ---

// # Question 5 — `every()`

// **Question:** Check whether every order has an amount greater than `1000`.

// ### Your answer:

// ```js
// let ch = orders.every((n) => n.amount>1000)

// console.log(ch)
// ```

// ### Result:

// // ✅ **Correct**

// // Production-style:

// // ```js
// // const ch = orders.every(
// //     order => order.amount > 1000
// // );
// // ```

// // Output:

// // ```js
// // true
// // ```

// // Because:

// // ```text
// // 5000 > 1000 → true
// // 2000 > 1000 → true
// // 8000 > 1000 → true
// // 3000 > 1000 → true
// // ```

// // ### What you learned:

// // `every()` asks:

// // > **Do all elements satisfy the condition?**

// // ---

// // # Question 6 — `reduce()`

// // **Question:** Calculate the total amount of all orders.

// // ### Your answer:

// // ```js
// // let total = orders.reduce((val,sum)=>{

// //     return val.amount+sum

// // })

// // console.log(total)
// ```

// ### Result:

// ❌ **Incorrect**

// There are two important issues.

// You named the parameters:

// ```js
// val, sum
// ```

// but the first parameter is normally the **accumulator**, while the second is the **current element**.

// Your data contains objects, so you need:

// ```js
// order.amount
// ```

// from the current order.

// You should also provide an initial accumulator value:

// ```js
// 0
// ```

// ### Correct answer:

// ```js
// const total = orders.reduce((total, order) => {
//     return total + order.amount;
// }, 0);

// console.log(total);
// ```

// Output:

// ```js
// 18000
// ```

// ---

// # Understanding your `reduce()` mistake

// Your array:

// ```js
// [
//     { amount: 5000 },
//     { amount: 2000 },
//     { amount: 8000 },
//     { amount: 3000 }
// ]
// ```

// We want:

// ```text
// 0 + 5000 = 5000
// 5000 + 2000 = 7000
// 7000 + 8000 = 15000
// 15000 + 3000 = 18000
// ```

// So:

// ```js
// (total, order)
// ```

// means:

// ```text
// total → accumulated result
// order → current object
// ```

// Then:

// ```js
// total + order.amount
// ```

// produces the next accumulator.

// This is the most important concept for you to strengthen right now.

// ---

// # Your overall performance

// | Method     | Your answer                 | Status              |
// | ---------- | --------------------------- | ------------------- |
// | `map()`    | `n.name`                    | ⚠️ Property mistake |
// | `filter()` | `val.status == "delivered"` | ✅                   |
// | `find()`   | `val.id == 3`               | ✅                   |
// | `some()`   | `n.status == "cancelled"`   | ✅                   |
// | `every()`  | `n.amount > 1000`           | ✅                   |
// | `reduce()` | `val.amount + sum`          | ❌                   |

// So you correctly understood the **purpose** of most methods.

// Your biggest area to practice is:

// ```text
// reduce()
// ↓
// accumulator
// ↓
// currentValue
// ↓
// initialValue
// ```

// ---

// # The questions you were given before attempting the answers

// These were the full production-style questions:

// ### 1. Get names of all customers.

// Expected concept:

// ```js
// map()
// ```

// ### 2. Get only delivered orders.

// Expected concept:

// ```js
// filter()
// ```

// ### 3. Find order with ID 3.

// Expected concept:

// ```js
// find()
// ```

// ### 4. Check whether any order is cancelled.

// Expected concept:

// ```js
// some()
// ```

// ### 5. Check whether every order has amount > 1000.

// Expected concept:

// ```js
// every()
// ```

// ### 6. Calculate total order amount.

// Expected concept:

// ```js
// reduce()
// ```

// ### 7. Sort orders from highest amount to lowest.

// Expected concept:

// ```js
// sort()
// ```

// ### 8. Get names of delivered customers, sorted alphabetically.

// Expected concepts:

// ```text
// filter()
// map()
// sort()
// ```

// ### 9. Get total amount of delivered orders.

// Expected concepts:

// ```text
// filter()
// reduce()
// ```

// ### 10. Create:

// ```js
// {
//     delivered: 2,
//     pending: 1,
//     cancelled: 1
// }
// ```

// Expected concept:

// ```js
// reduce()
// ```

// ---

// # Your current mastery level

// Based on the answers you've actually attempted:

// // ```text
// // map       → ⭐⭐⭐⭐☆
// // filter    → ⭐⭐⭐⭐⭐
// // find      → ⭐⭐⭐⭐⭐
// // some      → ⭐⭐⭐⭐⭐
// // every     → ⭐⭐⭐⭐⭐
// // reduce    → ⭐⭐☆☆☆
// // sort      → not attempted yet
// // forEach   → not attempted yet
// // ```

// // The next step that will help you most is to attempt **questions 7–10 yourself**, especially the `sort()` and `reduce()` combinations, without looking at the answers.
// Yes. I pulled together the **JavaScript questions and answers you worked on today (September 7, 2026)** from our conversations. I’ve included your answer where you gave one, then the **corrected/interview-ready answer**.

// # 1. Data Types — Interview Questions

// ### Q1. Is JavaScript statically typed or dynamically typed?

// **Your answer:** Correct — JavaScript is dynamically typed.

// **Correct answer:**
// JavaScript is **dynamically typed**, meaning a variable doesn't have a fixed type. The value currently stored in it has a type.

// ```js
// let x = 10;
// x = "Hello";
// x = true;
// ```

// The same binding can refer to values of different types.

// ---

// ### Q2. How are primitive values copied?

// **Your answer:** Correct.

// **Answer:**
// Primitive values are copied by value.

// ```js
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20
// ```

// `b` receives its own value.

// ---

// ### Q3. What happens when two variables reference the same object?

// **Your answer:** Correct.

// ```js
// const user = {
//     name: "Bhavya"
// };

// const copy = user;

// copy.name = "Rahul";

// console.log(user.name); // Rahul
// ```

// Both variables contain a reference to the **same object**.

// ---

// ### Q4. Why are these different?

// ```js
// {} === {}
// ```

// **Your answer:** Correct.

// **Answer:**

// ```js
// {} === {} // false
// ```

// Each object is a different object with a different identity.

// But:

// ```js
// const a = {};
// const b = a;

// a === b; // true
// ```

// Both variables reference the same object.

// ---

// ### Q5. What happens when an object is passed to a function?

// **Your answer:** Correct.

// ```js
// function change(obj) {
//     obj.name = "Rahul";
// }

// const user = {
//     name: "Bhavya"
// };

// change(user);

// console.log(user.name); // Rahul
// ```

// JavaScript is **pass-by-value**. For an object, the value being copied is a reference to the same object.

// ---

// ### Q6. What happens if the parameter itself is reassigned?

// ```js
// function change(obj) {
//     obj = {
//         name: "Rahul"
//     };
// }

// const user = {
//     name: "Bhavya"
// };

// change(user);

// console.log(user.name);
// ```

// **Your answer:** Correct.

// Output:

// ```text
// Bhavya
// ```

// The parameter gets its own copied reference. Reassigning the parameter doesn't change the caller's variable.

// ---

// ### Q7. What does `typeof` return?

// You worked through:

// ```js
// typeof 10
// typeof "hello"
// typeof true
// typeof undefined
// typeof null
// typeof {}
// typeof []
// typeof function(){}
// typeof 10n
// typeof Symbol()
// typeof NaN
// ```

// **Correct answers:**

// ```text
// number
// string
// boolean
// undefined
// object
// object
// object
// function
// bigint
// symbol
// number
// ```

// Important:

// ```js
// typeof null // "object"
// typeof NaN  // "number"
// ```

// These are common interview questions.

// ---

// ### Q8. What is the result?

// ```js
// console.log(NaN === NaN);
// console.log(typeof NaN);
// console.log(Number.isNaN(NaN));
// ```

// **Your answer:** Correct.

// ```text
// false
// number
// true
// ```

// `NaN` is a special value of the Number type, and it is not equal to itself using `===`.

// ---

// ### Q9. Why does this happen?

// ```js
// 0.1 + 0.2 === 0.3
// ```

// **Answer:**

// ```js
// false
// ```

// JavaScript `Number` uses IEEE-754 double-precision floating-point representation. Values such as `0.1` and `0.2` cannot be represented exactly in binary, so their sum contains a tiny floating-point error.

// For production financial calculations, don't rely on ordinary floating-point arithmetic for exact decimal money calculations.

// ---

// ### Q10. What happens here?

// ```js
// const x = { value: 10 };
// const y = x;

// x = { value: 20 };
// ```

// You also learned the important distinction between:

// ```js
// x.value = 20;
// ```

// and:

// ```js
// x = { value: 20 };
// ```

// Mutation:

// ```js
// x.value = 20;
// ```

// changes the existing object.

// Reassignment:

// ```js
// x = { value: 20 };
// ```

// makes `x` reference another object.

// ---

// ### Q11. Is spread syntax a deep copy?

// **Your example:**

// ```js
// const user = {
//     name: "Bhavya",
//     address: {
//         city: "Ahmedabad"
//     }
// };

// const copy = { ...user };

// copy.name = "Rahul";
// copy.address.city = "Mumbai";
// ```

// Correct:

// ```js
// console.log(user.name);          // Bhavya
// console.log(user.address.city);  // Mumbai
// ```

// Why?

// ```text
// copy
//  ├── name → independent value
//  └── address ─────┐
//                   ↓
//              same object
// ```

// Spread creates a **shallow copy**, not a deep copy.

// ---

// # 2. Type Coercion Questions

// You also worked through these today.

// ### Q12. What is:

// ```js
// 5 + "5"
// ```

// Answer:

// ```text
// "55"
// ```

// `+` can perform string concatenation.

// ---

// ### Q13. What is:

// ```js
// 5 - "5"
// ```

// Answer:

// ```text
// 0
// ```

// `-` performs numeric coercion.

// ---

// ### Q14.

// ```js
// true + 1
// ```

// Answer:

// ```text
// 2
// ```

// `true` is converted to `1`.

// ---

// ### Q15.

// ```js
// false + 10
// ```

// Answer:

// ```text
// 10
// ```

// `false` → `0`.

// ---

// ### Q16.

// ```js
// null + 1
// ```

// Answer:

// ```text
// 1
// ```

// For numeric conversion:

// ```text
// null → 0
// ```

// ---

// ### Q17.

// ```js
// undefined + 1
// ```

// Answer:

// ```text
// NaN
// ```

// Not an exception.

// ---

// ### Q18.

// ```js
// "5" == 5
// "5" === 5
// ```

// Answer:

// ```text
// true
// false
// ```

// `==` allows type coercion.

// `===` requires same type and same value.

// ---

// ### Q19.

// ```js
// Boolean("0")
// ```

// Answer:

// ```text
// true
// ```

// Because a non-empty string is truthy.

// ---

// ### Q20.

// ```js
// "0" == false
// ```

// Answer:

// ```text
// true
// ```

// This is one of the weird coercion cases.

// ---

// ### Q21.

// ```js
// [] == false
// ```

// Answer:

// ```text
// true
// ```

// Simplified coercion:

// ```text
// [] → ""
// "" → 0
// false → 0

// 0 == 0
// → true
// ```

// ---

// ### Q22.

// ```js
// null == undefined
// null === undefined
// ```

// Answer:

// ```text
// true
// false
// ```

// Loose equality has a special rule for `null` and `undefined`.

// ---

// ### Q23.

// ```js
// [] + []
// ```

// Answer:

// ```text
// ""
// ```

// Arrays undergo primitive conversion and ultimately become strings in this operation.

// ---

// ### Q24.

// ```js
// true + true
// ```

// Answer:

// ```text
// 2
// ```

// Both booleans become numbers.

// ---

// ### Q25.

// ```js
// [1] == 1
// ```

// Answer:

// ```text
// true
// ```

// The array undergoes coercion.

// ---

// ### Q26.

// ```js
// [1, 2] == "1,2"
// ```

// Answer:

// ```text
// true
// ```

// The array's primitive/string representation is `"1,2"`.

// ---

// ### Q27.

// ```js
// null == 0
// ```

// Answer:

// ```text
// false
// ```

// Important interview trap.

// Although:

// ```js
// Number(null) === 0
// ```

// loose equality has special handling for `null`.

// ---

// # 3. `Object.is()` Questions

// ### Q28.

// ```js
// NaN === NaN
// Object.is(NaN, NaN)
// ```

// Answer:

// ```text
// false
// true
// ```

// ---

// ### Q29.

// ```js
// 0 === -0
// Object.is(0, -0)
// ```

// Answer:

// ```text
// true
// false
// ```

// So:

// ```text
// ===       Object.is()

// NaN/NaN   false       true
// 0/-0      true        false
// ```

// ---

// # 4. Operators & Conditions

// ### Q30.

// ```js
// 2 + 3 * 4
// ```

// **Your answer:** Correct.

// ```text
// 14
// ```

// Because multiplication has higher precedence:

// ```js
// 2 + (3 * 4)
// ```

// ---

// ### Q31.

// ```js
// (2 + 3) * 4
// ```

// **Your answer:** Correct.

// ```text
// 20
// ```

// Parentheses override normal precedence.

// ---

// ### Q32.

// ```js
// 0 && 100
// ```

// **Your answer:** Correct.

// ```text
// 0
// ```

// `&&` returns the first falsy operand.

// `100` isn't evaluated.

// ---

// ### Q33.

// ```js
// let x = "Hello";

// x || "Guest"
// ```

// **Your answer:** Initially incorrect.

// Correct:

// ```text
// "Hello"
// ```

// Because `"Hello"` is truthy.

// ```text
// truthy || anything
// → first value
// ```

// ---

// ### Q34.

// ```js
// 0 || 100
// 0 ?? 100
// ```

// Correct:

// ```text
// 100
// 0
// ```

// Because:

// ```text
// || → truthiness
// ?? → null/undefined
// ```

// ---

// ### Q35. Increment operators

// ```js
// let x = 10;

// console.log(x++ + ++x);
// ```

// **Your answer:** Initially `21`.

// Correct:

// ```text
// 22
// ```

// Step by step:

// ```text
// x = 10

// x++
// → returns 10
// → x becomes 11

// ++x
// → x becomes 12
// → returns 12

// 10 + 12
// → 22
// ```

// Final:

// ```text
// x = 12
// ```

// ---

// ### Q36. `NaN` and `Object.is`

// You correctly answered:

// ```js
// NaN === NaN              // false
// Object.is(NaN, NaN)      // true
// 0 === -0                 // true
// Object.is(0, -0)         // false
// ```

// ✅ All correct.

// ---

// # 5. Logical Operator Evaluation

// ### Q37.

// ```js
// a && b || c
// ```

// What does JavaScript evaluate first?

// **Answer:**

// Because `&&` has higher precedence:

// ```js
// (a && b) || c
// ```

// ---

// ### Q38.

// For:

// ```js
// a && b || c
// ```

// what happens if `a` is falsy?

// **Answer:**

// ```js
// a && b
// ```

// short-circuits.

// Then:

// ```js
// a || c
// ```

// so `c` is evaluated.

// ---

// ### Q39.

// What happens if `a` is truthy and `b` is truthy?

// ```js
// a && b || c
// ```

// becomes:

// ```js
// b || c
// ```

// Since `b` is truthy, `c` isn't evaluated.

// ---

// ### Q40. Prior challenge

// ```js
// let x = 10;

// const result = false && x++ || x++;

// console.log(result);
// console.log(x);
// ```

// Correct:

// ```text
// 10
// 11
// ```

// Why?

// ```text
// false && x++
// ```

// short-circuits, so the first `x++` doesn't execute.

// Then:

// ```text
// false || x++
// ```

// so the second `x++` executes.

// It returns `10`, then increments `x` to `11`.

// ---

// # 6. Optional Chaining `?.`

// This was your most recent topic.

// ### Q41.

// ```js
// let user = null;

// console.log(user?.name);
// ```

// Correct:

// ```text
// undefined
// ```

// No TypeError.

// ---

// ### Q42.

// ```js
// let user = {
//     name: "Bhavya"
// };

// console.log(user?.name);
// ```

// Correct:

// ```text
// Bhavya
// ```

// ---

// ### Q43.

// ```js
// let user = {
//     profile: null
// };

// console.log(user?.profile?.name);
// ```

// Correct:

// ```text
// undefined
// ```

// Not `null`.

// The optional chain encounters `null` and produces `undefined`.

// ---

// ### Q44.

// ```js
// let user = {
//     age: 0
// };

// console.log(user?.age || 18);
// console.log(user?.age ?? 18);
// ```

// **Your answer:** Correct.

// ```text
// 18
// 0
// ```

// ---

// ### Q45. `&&` vs `?.`

// You were asked to understand:

// ```js
// user && user.name
// ```

// versus:

// ```js
// user?.name
// ```

// Core difference:

// ```text
// &&
// → checks truthiness

// ?.
// → checks specifically null/undefined
// ```

// So they aren't exactly equivalent.

// ---

// ### Q46. API example

// ```js
// const response = {
//     data: {
//         user: null
//     }
// };

// const name =
//     response?.data?.user?.profile?.name ?? "Guest";

// console.log(name);
// ```

// Correct answer:

// ```text
// Guest
// ```

// Evaluation:

// ```text
// response
//  ↓
// data
//  ↓
// user → null
//  ↓
// ?. short-circuits
//  ↓
// undefined
//  ↓
// undefined ?? "Guest"
//  ↓
// "Guest"
// ```

// ---

// # 7. The Most Important Concepts You Learned Today

// If you're preparing for a **deep JavaScript interview**, these are the concepts from today you should be able to explain without memorizing:

// ```text
// 1. Dynamic typing
// 2. Primitive vs object values
// 3. Value copying
// 4. Object references
// 5. Object identity
// 6. Pass-by-value
// 7. Shallow copying
// 8. Type coercion
// 9. ToPrimitive
// 10. ToNumber
// 11. ToString
// 12. ToBoolean
// 13. == vs ===
// 14. Object.is()
// 15. NaN
// 16. Floating-point numbers
// 17. Truthy/falsy
// 18. Operator precedence
// 19. Short-circuit evaluation
// 20. Evaluation order
// 21. Side effects
// 22. ++ and --
// 23. && / || / ??
// 24. Optional chaining ?.
// 25. ?. with nested objects
// 26. ?. with arrays
// 27. ?. with dynamic properties
// 28. ?. with function calls
// 29. ?.() vs method?.()
// 30. ?. + ??
// 31. ?. vs &&
// 32. API-response safety
// ```

// ### Your overall progress today

// You did particularly well on the **conceptual questions** around:

// * dynamic typing
// * object references
// * mutation vs reassignment
// * `NaN`
// * floating-point behavior
// * `==` vs `===`
// * `Object.is()`
// * operator precedence
// * short-circuiting
// * `||` vs `??`

// The areas where you made mistakes were mostly **evaluation tracing**, especially with `++`, `&&`, `||`, and `?.`. That's actually useful for interview preparation because those are exactly the questions that test whether you understand JavaScript's execution rather than just memorizing definitions.
