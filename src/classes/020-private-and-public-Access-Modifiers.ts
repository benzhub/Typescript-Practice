class Department {
    public name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log(`Department: ${this.name}`)
    }

    addEmployee(employee: string) {
        // validation etc
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);

    }
}

const accounting = new Department("Accounting");
accounting.addEmployee("Emma")
accounting.addEmployee("Josh")
accounting.addEmployee("Jason")
accounting.addEmployee("Joey")
// accounting.employees[4] = "Donaldson"; // 會出錯，因為employee是private
accounting.name = "NEW NAME";
console.log(accounting.name); // NEW NAME // 可以修改，因為name是public
accounting.printEmployeeInformation(); // 4 ['Emma', 'Josh', 'Jason', 'Joey']

export {};