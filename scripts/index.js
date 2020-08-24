

var botton = document.getElementById("btn")
var photo = document.getElementById("photo")
var brand = document.getElementById("brand")

const push = () =>{
    var menu = document.getElementById("opcion-menu")

    if(menu.classList.contains("ocul-menu")){
        menu.classList.remove("ocul-menu")
        menu.classList.add("most-menu")
      
    }
    else{
        menu.classList.remove("most-menu")
        menu.classList.add("ocul-menu")
    
    }
}

botton.addEventListener("click", push)

const change = (e) =>{
    e.preventDefault()
    document.getElementById("foto1").src="./images/1.jpg"
    document.getElementById("foto2").src="./images/2.jpg"
    document.getElementById("foto3").src="./images/3.jpg"
    document.getElementById("foto4").src="./images/4.jpg"
    document.getElementById("foto5").src="./images/6.jpg"
    document.getElementById("foto6").src="./images/7.jpg"
    document.getElementById("foto7").src="./images/8.jpg"
    document.getElementById("foto8").src="./images/9.jpg"
    document.getElementById("foto9").src="./images/10.jpg"
}
brand.addEventListener("click", change)

const cambiar = (e) =>{
    e.preventDefault()
    document.getElementById("foto1").src="./images/11.jpg"
    document.getElementById("foto2").src="./images/12.jpg"
    document.getElementById("foto3").src="./images/13.jpg"
    document.getElementById("foto4").src="./images/14.jpg"
    document.getElementById("foto5").src="./images/15.jpg"
    document.getElementById("foto6").src="./images/16.jpg"
    document.getElementById("foto7").src="./images/17.jpg"
    document.getElementById("foto8").src="./images/18.jpg"
    document.getElementById("foto9").src="./images/19.jpg"
}
     photo.addEventListener("click", cambiar)  
    
    


