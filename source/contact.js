//create my footer
const footer=document.createElement("div");
footer.classList.add("footer-class")
const addressP=document.createElement("p");
addressP.innerHTML="<p>1024 Oakwood Ave, <br/>Los Angeles CA,91423</p>"

const timeP=document.createElement("p");
timeP.innerHTML="<p>Mon-Thurs:8am-8pm<br/>Fri-Sun:8am-11pm</p>"
append(footer,addressP,timeP)
append(sectionDiv,footer)
