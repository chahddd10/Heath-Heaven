
function calc(e) {
    e.preventDefault()
    var height= document.form.height.value
    var weight= document.form.weight.value
   
  
   

     let result=weight/(height/100)**2
     
    console.log(result)
    var imc=document.getElementsByClassName("imc")
    imc[0].innerHTML=  "Your BMI:"+ parseInt(result)
}