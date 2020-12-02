import{createHomePage}from "./home.js"
import{createMenu} from "./menu.js"
import{createContactUs}from "./contact.js"
createHomePage();
/*
const renderPage=(e)=>{
  if(e.target.id==="home"){
      document.querySelector("body").innerHTML="";
    createHomePage();
  }else if(e.target.id==="menu"){
      document.querySelector("body").innerHTML="";
    createMenu();
  }else if(e.target.id==="contact_us"){
      document.querySelector("body").innerHTML="";
    createContactUs();
  }
}

document.querySelector("header").addEventListener("click",renderPage)
*/
const clearEverything=()=>{
    document.querySelector("body").innerHTML=""
}

document.querySelector("#home").addEventListener("click",(e)=>{
  clearEverything();
  createHomePage();
})

document.querySelector("#menu").addEventListener("click",(e)=>{
  clearEverything();
  createMenu();
});

document.querySelector("#contact_us").addEventListener("click",(e)=>{
  clearEverything();
  createContactUs()
})
document.querySelector(".about button").addEventListener("click",(e)=>{
  clearEverything();
  createMenu();
})
