class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }
}

const accounting = new Department('Accounting');
console.log(accounting.name); // Accounting
accounting.describe(); // Department: Accounting

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // Department: undefined

const accountingCopy2 = {
  name: 'accountingCopy2',
  describe: accounting.describe,
};
accountingCopy2.describe(); // Department: accountingCopy2

export {};