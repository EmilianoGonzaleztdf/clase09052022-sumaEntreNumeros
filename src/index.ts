let numero1: number = 0;
let numero2: number = 0;
let resultado: number = 0;

numero1 = Number(prompt("infrese el primer numero entero"));
numero2 = Number(prompt("ingrese el segundo numero entero"));

for (let i: number = numero1; i <= numero2; i++) {
  resultado = resultado + i;
}
console.log("la suma entre los numeros ingresados es: ", resultado);
