const createMenu=()=>{
  const body=document.createElement("div")
  body.classList.add("menu-content")

document.querySelector("body").appendChild(body);

  const hEl=document.createElement("h1");
  hEl.textContent="Menu"


  const menuContainer=document.createElement("div");
  menuContainer.classList.add("menu-container")
  body.appendChild(menuContainer);


  const appetizers=document.createElement("h2");
  appetizers.classList.add("menu-heading");
  appetizers.textContent="Appetizers";
  const appsContainer=document.createElement("div");
  appsContainer.classList.add("grid-container")
  for(let i=1;i<=6;i++){
    const foodItem=document.createElement("div");
    foodItem.setAttribute("id",`_${i}`);
    appsContainer.append(foodItem);
    const nameEl=document.createElement("p");
    nameEl.classList.add("name");
    const image=document.createElement("img");
    const priceEl=document.createElement("p");
    priceEl.classList.add("price");
    append(foodItem,nameEl,image,priceEl)
  }

  const mainCourse=document.createElement("h2");
  mainCourse.classList.add("menu-heading");
  mainCourse.textContent="Main courses"
  const mainContainer=document.createElement("div");
  mainContainer.classList.add("grid-container");
  for(let i=7;i<=12;i++){
    const foodItem=document.createElement("div");
    foodItem.setAttribute("id",`_${i}`);
    mainContainer.append(foodItem)
    const nameEl=document.createElement("p");
    nameEl.classList.add("name");
    const image=document.createElement("img");
    const priceEl=document.createElement("p");
    priceEl.classList.add("price");
    append(foodItem,nameEl,image,priceEl)
  }

  const desserts=document.createElement("h2");
  desserts.classList.add("menu-heading");
  desserts.textContent="Desserts"
  const dessertsContainer=document.createElement("div");
  dessertsContainer.classList.add("grid-container");
  for(let i=13;i<=18;i++){
    const foodItem=document.createElement("div");
    foodItem.setAttribute("id",`_${i}`);
    dessertsContainer.append(foodItem);
    const nameEl=document.createElement("p");
    nameEl.classList.add("name");
    const image=document.createElement("img");
    const priceEl=document.createElement("p");
    priceEl.classList.add("price");
    append(foodItem,nameEl,image,priceEl)
  }



append(menuContainer,hEl,appetizers,appsContainer,mainCourse,mainContainer,desserts,dessertsContainer)
createMenuCard(1,"Cheese fluffers","firstapp",43);
createMenuCard(2,"Egg Rolls","secondapp",43);
createMenuCard(3,"Pigs in a blanket","thirdapp",45)
createMenuCard(4,"Zuchini Bites","fourthapp",43)
createMenuCard(5,"Bacon Rolls","fifthapp",43)
createMenuCard(6,"Mini Frittatas","sixthapp",43)
createMenuCard(7,"Scallops","firstmain",43);
createMenuCard(8,"Risotto","secondmain",43);
createMenuCard(9,"Macaroni&Cheese","thirdmain",43);
createMenuCard(10,"Meatloaf","fourthmain",43);
createMenuCard(11,"Sushi","fifthmain",43);
createMenuCard(12,"Hamburger","sixthmain",43);
createMenuCard(13,"Fudge Cookies","firstdessert",43);
createMenuCard(14,"Crumble Bars","seconddessert",43);
createMenuCard(15,"Oreo Cake","thirddessert",43);
createMenuCard(16,"Cheesecake","fourthdessert",43);
createMenuCard(17,"Lemon Bars","fifthdessert",43);
createMenuCard(18,"Rainbow Icecream","sixthdessert",43)



}

const append=(parent,...elements)=>{
  elements.forEach((element)=>{
    parent.appendChild(element)
  })
}

const createMenuCard=(id,foodName,picFileName,price)=>{
  document.querySelector(`#_${id}`).querySelector(".name").textContent=`${foodName}`;
  document.querySelector(`#_${id}`).querySelector("img").setAttribute("src",`../../public/images/${picFileName}.jpg`)
  document.querySelector(`#_${id}`).querySelector(".price").textContent=`$${price}`
}

export{createMenu}
