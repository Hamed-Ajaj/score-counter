let Homecount =0
let GuestCount = 0
let addHome = document.getElementById("home-score")
let addGuest = document.getElementById("guest-score")
function HcountAdd(){
    addHome.textContent = Homecount
}
function GcountAdd(){
    addGuest.textContent = GuestCount
}

function Hadd1points(){
    Homecount +=1
    HcountAdd()
}
function Hadd2points(){
    Homecount +=2
    HcountAdd()
}
function Hadd3points(){
    Homecount +=3
    HcountAdd()
}
function Gadd1points(){
    GuestCount +=1
    GcountAdd()
}
function Gadd2points(){
    GuestCount +=2
    GcountAdd()
}
function Gadd3points(){
    GuestCount +=3
    GcountAdd()
}
function restart(){
    Homecount = 0
    GuestCount=0
    addHome.textContent = Homecount
    addGuest.textContent = GuestCount
}