// siesnd
let midget = prompt("Mitu pöialpoissi tahab õunu? (0-7)")

console.log( "Mitu pöialpossi tahtis õunu: " + midget)

let sum_õun = 14

for (let i = 1; i <= midget; i++) {
    let õunad = Math.floor(Math.random() * 2) +1
    sum_õun = sum_õun - õunad
    console.log(i + ". pöialpoiss sai " + õunad)
}

console.log("Lumivalgekesele jäi " + sum_õun + " õuna")