// alert("Welcome to the Instagram Bio Character Counter  It Helps you to keep the track of your Bios for the Word Linit and can also check for the possible grammar");


// import * as Grammarly from "@grammarly/editor-sdk";

// await Grammarly.init("YOUR_CLIENT_ID");

const charVal = document.getElementById("textarea");
let totalcount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;

const updateCounter = ()=>{
    // console.log("Hello World");
    userchar = charVal.value.length;
    console.log(userchar);

    totalcount.innerHTML = userchar;

    remainingCount.innerHTML = 150-userchar;
};


charVal.addEventListener("keyup",()=> updateCounter());

// copy the text code

const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(charVal.value);
  };