class DataStorage<T> {
    private data: Array<T | number> = [];
    constructor(public readonly id: number, public weight: number) {}

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [this.id, ...this.data, this.weight];
    }
}

const textStorage = new DataStorage<string>(1, 60);
textStorage.addItem('Max');
textStorage.addItem('Lisa');
textStorage.removeItem('Max');
console.log(textStorage.getItems()); // [1, 'Lisa', 60]

const textStorage2 = new DataStorage<number>(2, 55);
textStorage2.addItem(1);
textStorage2.addItem(2);
textStorage2.removeItem(1);
console.log(textStorage2.getItems()); // [2, 2, 55]

const textStorage3 = new DataStorage<number | string | Object>(3 , 100);
textStorage3.addItem(1);
textStorage3.addItem("2");
textStorage3.addItem("Lisa");
textStorage3.addItem("Max");
textStorage3.addItem({name: 'Linda'});
textStorage3.addItem(10);
textStorage3.removeItem(1);
textStorage3.removeItem("Max");
console.log(textStorage3.getItems()); // [3, '2', 'Lisa', {name: 'Linda'}, 10, 100]

export {};