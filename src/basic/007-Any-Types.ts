// 一般來說，使用Typescript就是要讓型別嚴謹，使用any容易讓型別變得跟
// Vanilla Javascript沒有兩樣，因此不建議經常使用any type
let favoriteActivities007: any[];
favoriteActivities007 = ['Sports', 1];
console.log(favoriteActivities007); // ['Sports', 1]
