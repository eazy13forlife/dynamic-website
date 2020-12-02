import{append}from"./menu.js"
import{addressIcon,calendarIcon}from "./icons.js"
import{homeTab,menuTab,contactUsTab}from "./home.js"

const createContactUs=()=>{
  //create my footer

  //create my header section
  const header=document.createElement("header");
  const headerContainer=document.createElement("div");
  headerContainer.classList.add("header-container")

  //create left div header section that contains restaurants name
  const leftHeaderDiv=document.createElement("div")
  const restName=document.createElement("p");
  restName.textContent="Apples To Bananas";
  leftHeaderDiv.appendChild(restName);
  headerContainer.appendChild(leftHeaderDiv);

  //create right div header section that contains nav links
  const rightHeaderDiv=document.createElement("nav");
  contactUsTab.textContent="Contact Us"
  append(rightHeaderDiv,homeTab,menuTab,contactUsTab)
  headerContainer.appendChild(rightHeaderDiv);
  header.appendChild(headerContainer)

  //append the header to my document first
  document.querySelector("body").appendChild(headerContainer)

  //create a section called contact us
  const body=document.createElement("section");
  body.classList.add("contact-us");

  //create a container that holds the section indo
  const container=document.createElement("div");
  container.classList.add("contact-us-container");
  body.appendChild(container);
  document.querySelector("body").appendChild(body);



  const addressP=document.createElement("p");
  addressP.innerHTML="<p>1024 Oakwood Ave, <br/>Los Angeles CA,91423</p>"
  //create a span element that holds the address Icon
  const spanEl=document.createElement("span");
  spanEl.classList.add("address-icon")
  const addressImage=document.createElement("img");
  addressImage.setAttribute("src",addressIcon)
  spanEl.appendChild(addressImage)
  addressP.appendChild(spanEl)

  const timeP=document.createElement("p");
  timeP.innerHTML="<p>Mon-Thurs:8am-8pm<br/>Fri-Sun:8am-11pm</p>"
  append(container,addressP,timeP)
  const spanEl2=document.createElement("span");
  spanEl2.classList.add("calendar-icon")
  const calendarImage=document.createElement("img");
  calendarImage.setAttribute("src",calendarIcon)
  spanEl2.appendChild(calendarImage)
  timeP.appendChild(spanEl2)

}

//append(footer,addressP,timeP)
//append(sectionDiv,footer)

export{createContactUs}
