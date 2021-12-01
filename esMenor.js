const esMenor = (num1, num2) => {
    if (num1 < num2)
        return num1;
    else 
        return num2;
}

console.log(esMenor(24, 25));
console.log(esMenor(26, 22));
console.log(esMenor(22, 25));
console.log(esMenor(4, 25));
console.log(esMenor(1, 25));