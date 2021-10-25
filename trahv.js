var nimi = window.prompt("Teie nimi: "); // küsib nime
var num1 = window.prompt( "Lubatud kiirus: "); // küsib kiiruspiirangut
var num2 = window.prompt("Tegelik kiirus"); //küsib tegelikku kiirust

let tulemus = (num2-num1)*3;
let vastus = Math.min( 190, tulemus); // arvutab trahvi summa

alert(nimi + " ,teie trahv on " + vastus +" €.");
console.log(vastus); //väljastab sõnumi