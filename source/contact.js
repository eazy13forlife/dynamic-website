import{append}from"./menu.js"

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
  const homeTab=document.createElement("a");
  homeTab.textContent="Home";
  const menuTab=document.createElement("a");
  menuTab.textContent="Menu"
  const contactUsTab=document.createElement("a");
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

  const timeP=document.createElement("p");
  timeP.innerHTML="<p>Mon-Thurs:8am-8pm<br/>Fri-Sun:8am-11pm</p>"
  append(container,addressP,timeP)

}

//append(footer,addressP,timeP)
//append(sectionDiv,footer)

export{createContactUs}
