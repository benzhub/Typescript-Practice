class Department {
    static fiscalYear = 2023;
    // public readonly id: string;
    // public name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
        // console.log(this.fiscalYear); // 靜態屬性不可以在構造函數裡面使用this，使用this會出錯
        console.log(Department.fiscalYear); // 靜態屬性要在內部調用的話，就必須直接使用class名進行調用
    }

    static createEmployee(name: string) {
        return { name }
    }

    describe() {
        console.log(`ID: ${this.id}, Department: ${this.name}`)
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

// ITDepartment繼承Department
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT")
        if(admins.length > 0) {
            admins.forEach(admin => this.addEmployee(admin))
        }
    }

    showAdmin() {
        console.log(`Admins: ${this.admins}`)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No Report Found.")
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error("Please pass in a valid value!")
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, "Accounting")
        this.lastReport = reports[0]
    }  

    // overriding (method 覆寫)
    addEmployee(name: string): void {
        if(name === 'Max') {
            return 
        }
        this.employees.push(name); // 父類的private 不能被子類使用，子類要可以使用要改成protected
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReport(){
        console.log(this.reports);
    }
}

// Static Method 不用new 一個新物件就可以直接使用
const employee1 = Department.createEmployee("Anna")
console.log(employee1); // {name: 'Anna'}
console.log(Department.fiscalYear); // 2023

export {};