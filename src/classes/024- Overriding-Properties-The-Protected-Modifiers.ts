// - private: this property only can use in own Class
// - protected: this property only can use in own and child Class
// - public: this property can use in anywhere

class Department {
  // public readonly id: string;
  // public name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

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

// ITDepartment繼承Department
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    if (admins.length > 0) {
      admins.forEach(admin => this.addEmployee(admin));
    }
  }

  showAdmin() {
    console.log(`Admins: ${this.admins.join(', ')}`);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  // overriding (method 覆寫)
  addEmployee(name: string): void {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name); // 父類的private 不能被子類使用，子類要可以使用要改成protected
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment('A1', ['Lily', 'Emma', 'Jocelyn']);
IT.showAdmin(); // Admins: Lily, Emma, Jocelyn
IT.printEmployeeInformation(); // 3 ['Lily', 'Emma', 'Jocelyn']

const accounting = new AccountingDepartment('b2', []);
accounting.addEmployee('Max');
accounting.addEmployee('Matthew');
accounting.printEmployeeInformation(); // 1 ['Matthew']
accounting.addReport('Something went wrong...');
accounting.printReport(); // ['Something went wrong...']

export {};
