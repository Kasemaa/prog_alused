var punkt = window.prompt("Sisesta ainepunktide arv: "); //küsin ekp arvu
var week = window.prompt( "Sisesta nädalate arv: "); // küsin nädalate arvu

let ekp = (punkt*26); // arvutan ühe ekp ajakulu
let vastus = Math.round(ekp/week) // arvutan ajakulu kokku

alert("Sinu ajakulu on " + vastus + " tundi nädalas.")
console.log(vastus) // väljastan saadud vastuse