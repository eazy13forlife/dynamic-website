const createMenu=()=>{
  const body=document.querySelector("#content");

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

document.querySelector("#_1").querySelector(".name").textContent="Cheesestciks";
document.querySelector("#_1").querySelector("img").setAttribute("src","../../public/images/firstdessert.jpg")
document.querySelector("#_1").querySelector(".price").textContent=`$43.`

}

const append=(parent,...elements)=>{
  elements.forEach((element)=>{
    parent.appendChild(element)
  })
}

const createMenuCard=(id,foodName,picFileName,price)=>{
  document.querySelector(`_${id}`).querySelector(".name").textContent=`${foodName}`;
  document.querySelector(`_${id}`).querySelector("img").setAttribute("src",`../../public/images/${picFileName}`)
  document.querySelector(`_${id}`).querySelector(".price").textContent=`$${price}`
}

export{createMenu}
