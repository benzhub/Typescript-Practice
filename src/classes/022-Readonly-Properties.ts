class Department {
  // public readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

// accounting.id = 'A2'; // Cannot assign to 'id' because it is a read-only property.

export {};