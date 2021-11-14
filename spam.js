let fontSize = prompt("Kirja suurus:")
let heading = prompt ("Sisestage pealkiri:")
let fail = prompt("Kas kirja manuses on fail?")
if (heading !== "") {
    if (fontSize > 1 ) {
        if (fail == "jah") {
            console.log("See on spämm")
        } else {
            console.log("See ei ole spämm")
        }

    } else {
        console.log("See ei ole spämm")
    }

} else {
    console.log("See ei ole spämm")
}