class Department {
  // public name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe() {
    console.log(`ID: ${this.id}, Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('A1', 'Accounting');
accounting.describe(); // ID: A1, Department: Accounting
accounting.addEmployee('Josh');
accounting.printEmployeeInformation(); // 1 ['Josh']

export {};