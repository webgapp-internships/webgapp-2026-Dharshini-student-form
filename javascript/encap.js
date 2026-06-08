class bankaccount{
    #balance;
    constructor(owner,balance){
        this.owner=owner;
        this.#balance=balance;
    }
get balance(){
    return this.#balance;
}
set balance(amount){
    if(amount>=0){
        this.#balance=amount;
    }
}
deposit(amount){
    this.balance+=amount;
}
}
const acc=new bankaccount("Alice",1000);
acc.deposit(500);
console.log(acc.balance);