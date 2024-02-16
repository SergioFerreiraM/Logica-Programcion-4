
let numero = prompt ("Ingrese un numero para calcular fibonacci: ");
fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let i = 2; i < numero; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
}
alert("El fibonacci es: " + fibonacci);