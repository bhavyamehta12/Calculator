
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

// ```text
// map       → ⭐⭐⭐⭐☆
// filter    → ⭐⭐⭐⭐⭐
// find      → ⭐⭐⭐⭐⭐
// some      → ⭐⭐⭐⭐⭐
// every     → ⭐⭐⭐⭐⭐
// reduce    → ⭐⭐☆☆☆
// sort      → not attempted yet
// forEach   → not attempted yet
// ```

// The next step that will help you most is to attempt **questions 7–10 yourself**, especially the `sort()` and `reduce()` combinations, without looking at the answers.
