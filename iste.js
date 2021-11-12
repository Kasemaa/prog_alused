// loos või ise
let valik = prompt("Kas soovite valida oma istekoha? (jah/ei)");

// istme valik
if (valik === "jah") {
    // valiti ise
    console.log ("Valisite ise")
    let koht = prompt("Kas soovid istet akna ääres või mujal?")
    if(koht === "aken"){
        console.log("Akna")
    } else {
        console.log("Muu koht")
    }
}
else {
    //loos
    console.log("Istekoht loositi")
    let toenaosus = Math.trunc(Math.ceil(Math.random()*3))
    if(toenaosus === 1) {
        console.log("Istute akna kõrval")
    } else {
        console.log("Muu koht")
    }
}