// 與下方語法相同
const userInputElement1 = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement2 = <HTMLInputElement>document.getElementById('user-input')!;

userInputElement1.value = 'Hi there!';

// 與下方語法相同
userInputElement1.addEventListener('keydown', (event: Event): void => {
    const input = event.target as HTMLInputElement;
    if(input.value.length) console.log(input.value);
})

userInputElement2.addEventListener('keydown', (event: Event): void => {
    if((event.target as HTMLInputElement).value) console.log((event.target as HTMLInputElement).value);
})

export {};