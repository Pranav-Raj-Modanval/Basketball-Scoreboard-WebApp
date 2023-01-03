let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let incHomeOne = document.getElementById("home-plus-1");
let incHomeTwo = document.getElementById("home-plus-2");
let incHomeThree = document.getElementById("home-plus-3");
let incGuestOne = document.getElementById("guest-plus-1");
let incGuestTwo = document.getElementById("guest-plus-2");
let incGuestThree = document.getElementById("guest-plus-3");
let resetter = document.getElementById("resetter");
let countHome = 0;
let countGuest = 0;


function incHomeOneFun(){       
    countHome+=1;
    homeScore.innerText = countHome;
}

function incHomeTwoFun(){       
    countHome+=2;
    homeScore.innerText = countHome;
}

function incHomeThreeFun(){       
    countHome+=3;
    homeScore.innerText = countHome;
}

incHomeOne.addEventListener('click',incHomeOneFun);
incHomeTwo.addEventListener('click',incHomeTwoFun);
incHomeThree.addEventListener('click',incHomeThreeFun);


function incGuestOneFun(){       
    countGuest+=1;
    guestScore.innerText = countGuest;
}

function incGuestTwoFun(){       
    countGuest+=2;
    guestScore.innerText = countGuest;
}

function incGuestThreeFun(){       
    countGuest+=3;
    guestScore.innerText = countGuest;
}

incGuestOne.addEventListener('click',incGuestOneFun);
incGuestTwo.addEventListener('click',incGuestTwoFun);
incGuestThree.addEventListener('click',incGuestThreeFun);

function resetterFun(){
    guestScore.innerText = "00";
    homeScore.innerText = "00";
    countHome = 0;
    countGuest = 0;
}
resetter.addEventListener('click',resetterFun);




