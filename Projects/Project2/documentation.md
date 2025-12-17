## JavaScript  Operators

# Arithmetic Operators

Arithmetic operators perform calculations on numbers (literals or variables).

| Operator | Description          | Example               | Result |
|----------|--------------------|---------------------|--------|
| `+`      | Addition            | `5 + 3`             | `8`    |
| `-`      | Subtraction         | `5 - 3`             | `2`    |
| `*`      | Multiplication      | `5 * 3`             | `15`   |
| `**`     | Exponentiation      | `2 ** 3`            | `8`    |
| `/`      | Division            | `10 / 2`            | `5`    |
| `%`      | Modulus (Remainder) | `10 % 3`            | `1`    |
| `++`     | Increment           | `let a = 1; a++`    | `2`    |
| `--`     | Decrement           | `let a = 2; a--`    | `1`    |


# Comparison Operators

Comparison operators are used to **compare two values**.  
They always return **true** or **false**.

| Operator | Description                       | Example           | Result |
|----------|-----------------------------------|-----------------|--------|
| `==`     | Equal (after type conversion)      | `5 == '5'`      | `true` |
| `===`    | Strict equal (no type conversion) | `5 === '5'`     | `false`|
| `!=`     | Not equal (after type conversion) | `5 != '3'`      | `true` |
| `!==`    | Strict not equal                  | `5 !== '5'`     | `true` |
| `>`      | Greater than                       | `5 > 3`         | `true` |
| `<`      | Less than                          | `3 < 5`         | `true` |
| `>=`     | Greater than or equal to           | `5 >= 5`        | `true` |
| `<=`     | Less than or equal to              | `3 <= 5`        | `true` |

# Logical Operators

Logical operators are used to **combine boolean expressions** and determine logic between variables or values.  
They are often used with comparison operators to create more complex conditions.

Types of Logical Operators:

*AND (&&)

OR (||)

NOT (!)

## JavaScript Data Types

In JavaScript, a variable can hold **8 types of data**:  
- **7 Primitive Data Types**  
- **1 Object (Non-Primitive) Data Type**  

The **Object** type can hold many different object types.

---

# 1. Primitive Data Types

Primitive data types represent **single immutable values**.

| Type       | Description |
|------------|-------------|
| **Number** | Represents numbers (integer or decimal) |
| **BigInt** | Represents very large integers (append `n` at the end) |
| **String** | Sequence of characters enclosed in quotes |
| **Boolean** | Represents `true` or `false` |
| **Undefined** | Variable declared but not assigned a value |
| **Null** | Represents absence of an object |
| **Symbol** | Unique and immutable identifier |

### Examples

```js
let x = 250;
let y = 40.5;


let str = 'Hello All';
let str1 = "Welcome to my new house";


let u;
console.log(u); 

let flag = true;

let n = null;

let bigNum = 12345678901234567890n;

let sym = Symbol("id");
console.log(typeof(sym)); 


# Non-Primitive (Object) Data Types

Non-primitive types are also called **reference types**.  
They can store collections of values or more complex entities.

---

## 2.1 Object

- Collection of **key-value pairs**.  
- Can have **properties** and **methods**.

```js
let person = {
    firstName: "Luiza",
    lastName: "Shaikh"
};

console.log(person.firstName + " " + person.lastName); // Luiza Shaikh
## 2.2 Array

- Stores **multiple values** under a single name.  
- Arrays are **objects** in JavaScript.

### Ways to create arrays:

```js
let a = new Array();

let b = new Array(10);

let d = new Array(1, 2, 3, "Hello");

console.log(a); 
console.log(b); 
console.log(d); 
