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

// ITDepartment繼承Department
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT'); // 傳參給父類
    if (admins.length > 0) {
      admins.forEach(admin => this.addEmployee(admin));
    }
  }

  showAdmin() {
    console.log(`Admins: ${this.admins.join(', ')}`);
  }
}

// AccountingDepartment繼承Department
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
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
accounting.addReport('Something went wrong...');
accounting.printReport(); // ['Something went wrong...']

export {};