const createHomePage=()=>{
  const body=document.querySelector("#content")
  //create my header section
  const header=document.createElement("header");
  const headerContainer=document.createElement("div");
  headerContainer.classList.add("header-container")

  //create left div header section that contains restaurants name
  const leftHeaderDiv=document.createElement("div")
  const restName=document.createElement("p");
  restName.textContent="Apples To Bananas";
  leftHeaderDiv.appendChild(restName);
  headerContainer.appendChild(leftHeaderDiv)

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

  //append the header to the body
  body.appendChild(header)
  //now that header is attached to the body, i
  const allLinks=document.querySelectorAll("nav a")
  allLinks.forEach((link)=>{
    link.classList.add("link")
  })

  //create a sectiondiv that contains the body
  const sectionDiv=document.createElement("section")
  sectionDiv.classList.add("about")

  body.appendChild(sectionDiv)

  //create my main heading
    const heading=document.createElement("h1");
    heading.textContent="Hop on in for some delicious cuisine!"

    const buttonEl=document.createElement("button");
    buttonEl.textContent="Order Now"
    append(sectionDiv,heading,buttonEl)


}


const append=(parent,...elements)=>{
  elements.forEach((element)=>{
    parent.appendChild(element)
  })
}



export{createHomePage}
