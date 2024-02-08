class Bank {
  #balance;
  constructor(name, accNumber, balance) {
    this.name = name;
    this.accNumber = accNumber;
    this.#balance = balance;
    this.transactions = [];
  }
  Deposit(amt) {
    this.#balance += amt;
    this.transactions.push({
      accNum: this.accNumber,
      type: "deposit",
      amount: amt,
      balancee: this.#balance,
    });
    // console.log(this.transactions);
    return this.getBalance();
  }
  getBalance() {
    return `your balance is ${this.#balance}`;
  }

  withdraw(amt) {
    if (amt <= this.#balance) {
      this.#balance -= amt;
      this.transactions.push({
        accNum: this.accNumber,
        type: "withdraw",
        amount: amt,
        balancee: this.#balance,
      });
      return this.getBalance();
    } else {
      return `you dont have enough balance - ${this.getBalance()}`;
    }
  }
  getTransactions() {
    return this.transactions;
  }
}
const acc1 = new Bank("shree", 1234567891, 1000);
const acc2 = new Bank("neha", 1234567812, 1500);
const acc3 = new Bank("esa", 1234567831, 1800);
console.log("account holder 1");
console.log(acc1.Deposit(2000));
console.log(acc1.withdraw(500));
console.log(acc1.getTransactions());
console.log("account holder 2");
console.log(acc2.Deposit(500));
console.log(acc1.getTransactions());
