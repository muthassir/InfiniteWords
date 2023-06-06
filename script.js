let show = document.getElementById('show')
show.innerHTML = ""
let input = document.getElementById('inp')
let repitition = document.getElementById("repit")
let copybtn = document.getElementById('copy')


function reset(){
    show.innerHTML = ""
    input.value = ""
    repitition.value = ""
    show.style.border="none" 
    copybtn.style.display="none"
    copybtn.innerHTML="copy"
    copybtn.style.backgroundColor="black"
}
function cop(){
    for (let i = 0; i < repitition.value; i++) {
    console.log(show.innerHTML += input.value + "<br>")
    show.style.border="3px solid green" 
    show.style.padding="8px"
    show.style.borderRadius="5px" 
    copybtn.style.display="block"
    }
   
}
function copy(){
    navigator.clipboard.writeText(show.innerText)
     .then(()=>{
         console.log("Text Copied To The Clipboard")
         copybtn.innerHTML="copied"
         copybtn.style.backgroundColor="grey"
     })
     .catch((Error)=>{
         alert("Failed To Copy The Text", Error)
     })
 }




