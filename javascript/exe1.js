class BankAccount {
    #balance;
    constructor(owner, accountNumber, balance) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }
    get balance() {
        return this.#balance;
    }
    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        }
    }
    deposit(amount) {
        let previousBalance = this.balance;
        this.balance += amount;
        console.log("-----Account Details-----");
        console.log("Account Holder :", this.owner);
        console.log("Account Number :", this.accountNumber);
        console.log("Previous Balance :", previousBalance);
        console.log("Deposit Amount :", amount);
        console.log("Current Balance :", this.balance);
    }
}
const acc = new BankAccount("Kovi", 56789, 1000);
const acc1=new BankAccount("Praveen",45763,1200);
const acc2=new BankAccount("Gayathri",67894,800);
acc.deposit(500);
acc1.deposit(1000);
acc2.deposit(300);