let ringid = prompt("Mitu jooksuringi?");
let porgandid = 0;
// tsükkel
let ring = 1;
while(ring <= ringid) {
    if(ring % 2 ==0) {
        porgandid = porgandid + ring;
    }
    ring++;
}
console.log("Porgandeid saab " + porgandid)