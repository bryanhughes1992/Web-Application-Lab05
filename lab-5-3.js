//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 3:  MAKE THE BANK
//alert("Connected");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!
//bankCustomer object holds information about a customer
var bankCustomer = {
    lastName: 'Hughes',
    branchNumber: 1001,
    accountBalance: 5000000,
    interestRate: 1.25,
    /*  -Takes 'amount', adds to account balance.
        -Console logs previous balance and current balance. */
    makeDeposit: function(amount) {
        var previousBalance = this.accountBalance;
        this.accountBalance += amount;
        console.log(`Thank you, your account balance was $${previousBalance.toFixed(2)}, your balance is now $${this.accountBalance.toFixed(2)}`);
    },
    /*  -Takes 'amount', subtracts from account balance
        -Console logs previous balance and current balance */
    makeWithdrawal: function(amount) {
        var previousBalance = this.accountBalance;
        this.accountBalance -= amount;
        console.log(`Thank you, your account balance was $${previousBalance.toFixed(2)}, your balance is now $${this.accountBalance.toFixed(2)}`);
    },
    /*  -Adds 25% to account balance
        -Console logs previous balance and current balance */
    addInterest: function() {
        var previousBalance = this.accountBalance;
        this.accountBalance *= this.interestRate;
        console.log(`Thank you, your account balance was $${previousBalance.toFixed(2)}, your balance is now $${this.accountBalance.toFixed(2)}`);
    }
};
