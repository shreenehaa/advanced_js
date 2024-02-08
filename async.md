```js
setTimeout(() => {
  console.log("hello");
}, 5000);
```

- it is to print the hello after 5 seconds

## CALL BACK FUNCTION

```js
setInterval(() => {
  console.log("it is call back function");
}, 2000);
```

- the funtion inside setInterval are called call back function eg. when an event that is 5 sec completes the function is calling.
- event completes(2000 ms completes) ,action is taken(function call)

## js

- - single thread and asynchronous

# Architecture

- call stack(main thread)
  - it will run the js
  - it will never wait for timeout function start executing next lines
- web api
  - knows only to wait
  - it will run the async code
  - eg the timeout function will wait here for respective interval time
  - setTimeout is part of webAPI it is part of browsers code
- queue
  - after waiting in web api async will wait in queue
- event loop
  - event loop will check if the stack is empty
  - it will take from queue
  - should reduce the synchronous code

async-if code running simultaniously

sync-one by one

# call back hell

- nesting of call back
- if we know waiting time no need of call back

# promise

- states
  - pending(any async operation)
  - fulfill
  - rejected
- type of promise-- "promise object"
- when reject it will show error
- untill resolve and reject it will wait in pending state

- methods

  - **then**
    - (after promise what to do).once promise resolved or rejected
    - it will return only promise object
  - **catch**
    - it will handle only the reject promise
  - **finally**
    - whether reject or resolve it will be executed
  - **all**

    - similar to AND operator if 1 promise is rejected then all the promise will be rejected
    - takes input as array of promise

    ```js
    var f1 = Promise.resolve("bhavai");
    var f2 = Promise.resolve("neha");
    var f3 = Promise.resolve("mano");

    Promise.all([f1, f2, f3]).then((ans) => console.log(ans));
    ```

  - **race**
    - first received response will be the output
    - fastest one rejected the whole thing is rejected
  - **allsettled**

    - it will wait untill everything finishes whether it is rejected or resolved

    ```js
    var f1 = Promise.resolve("bhavai");
    var f2 = Promise.reject("neha");
    var f3 = Promise.resolve("mano");
    Promise.allSettled([f1, f2, f3]).then((ans) => console.log(ans));
    ```

    - output is

    ```
    {status: 'fulfilled', value: 'bhavai'}
    {status: 'rejected', reason: 'neha'}
    {status: 'fulfilled', value: 'mano'}

    ```

## cloud delivery network

- cloud flare will copy data to all server
- all sever will have the copy of data and use race to get

- when resolve a promise use **await** use async infront of function
- async will return promise
- when a promise returns use await

```js
async function getTemp(cities) {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=bcd558e2652c44dc96145038240102&q=${cities}&aqi=no`
    );
    const data = await res.json();
    return [data.location.name, data.current.temp_c];
  } catch (e) {
    console.log(e);
  }
}

async function callFun() {
  const ans = await Promise.all(cities.map(getTemp));
  const data = Object.fromEntries(ans);
  console.log(data);
}
callFun();
```

assignment -post and put -change the avathar to national flag

### this

- only when function is called then only this will get context
- cant set by assignment
- different each time function is called
- points to the context

### bind

- creates a new function
- when this funtion is called bind takes this as first argument and others as argument to function

### call

- The call() method calls the function directly and sets this to the first argument passed to the call method
- force to take the context first arguments
- all arguments are comma seperated

### apply

- In the apply method, we pass arguments in the form of an array this is only the primary difference between call and apply.

## this

- only when function is called then only this will get context
- outer scope is window

```js
windows.firstName:nehaa
```

- if doesnt have inner value go to window similarly to setTimeout -<script scr=""></script>------> points to windows -<script scr="" type="module"></script>------> points to local scope

## class

- mimics the real world object
- eg blanket on function
- type of class is **function**

```js
class Bank {
  constructor(name, accNumber, balance) {
    this.name = name;
    this.accNumber = accNumber;
    this.balance = balance;
  }
}
const obj1 = new Bank("shree", 12345678, 1000);
console.log(obj1, typeof Bank);
```

**this points to obj1**

## cache statergies

- cache aside
- read through
- write through

### cache aside

    - data found in cache (cache hit)simply return it
    - if data not found in cache  (cache miss)app  search db, store it in cache and return it
    - eg news article ,frequently requested article will remain in cache ,less frequent articles removed.

### Read through

    - data found in cache (cache hit)simply return it
    - if data is not found in  cache,it fetch data from db and store it in cache
    - and return it to app

### write through

    - database and cache should be syncronised
    - The cache and the database immediately reflect any changes

# cache eviction

## least recently used

- work within a specific time frame
- replaces the item not requested for the longest time.

(1:50) Trash Pandas: The Musical
(1:43) Rats of New York
(1:30) Honey I Bought A Moose
(1:59) 12 Angry Birds

(1:50) Trash Pandas: The Musical
(1:43) Rats of New York
(1:59) 12 Angry Birds
(2:30) Moles: Dig It

## most recently used

(1:50) Trash Pandas: The Musical
(1:43) Rats of New York
(1:30) Honey I Bought A Moose
(1:59) 12 Angry Birds

after cache eviction
(1:50) Trash Pandas: The Musical
(1:43) Rats of New York
(1:30) Honey I Bought A Moose
(2:30) Moles: Dig It

## least frequently used

- based on count
  -(2) Trash Pandas: The Musical
  -(2) Rats of New York
  --(1) Honey I Bought A Moose
  (1) 12 Angry Birds

## time to live

- removes the item that has expired its time to live
- predefined duration that indicates how long an item can stay in the cache

## first in first out

- the element that was placed first is replaced
