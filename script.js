var istatus = document.querySelector("h5")

var addf = document.querySelector("#add")

var check = 0


addf.addEventListener("click" , function(){
    if (check == 0){
        istatus.innerHTML= "Friends"
        istatus.style.color = "green"
        addf.innerHTML = "remove friends"
        console.log("hello")
        check = 1
  } else{
    istatus.innerHTML= "stranger"
    istatus.style.color = "red"
    addf.innerHTML = "Add events"
    console.log("hello0")
    check = 0
  }
   
})



