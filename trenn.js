// Andmete sisestamine
let age = prompt("Teie vanus");
let sex = prompt("Sisestage om sugu");
let load = prompt("Treeningu tüüp (1, 2, 3)");



// arvutan maksimaalse pulsi
let maxPulse;
if (sex === "M" || sex === "m" ){
    maxPulse = 220 - age;
} else if (sex === "N" || sex === "n"){
    maxPulse = 206 - age * 0.88;
} else {
    alert("Sellist sugu ei ole olemas :/")
}

// arvutan koormusele sobiliku maksimaalse pulsisageduse
let pulseRangeMin;
let pulseRangeMax;

// console.log(load)
// console.log(typeof load)

if (load === "1"){
    pulseRangeMin = (maxPulse * 0.5);
    pulseRangeMax = (maxPulse * 0.7);
}else if (load === "2"){
    pulseRangeMin = (maxPulse * 0.7);
    pulseRangeMax = (maxPulse * 0.8);
}else if (load === "3"){
    pulseRangeMin = (maxPulse * 0.8);
    pulseRangeMax = (maxPulse * 0.87);
}else {
    alert("Sisestusviga. Proovi uuesti.");
}

// console.log(Math.round(pulseRangeMax))

alert("Pulsivahemik " + Math.round(pulseRangeMin)+ " - " + Math.round(pulseRangeMax) + " bpm." );











