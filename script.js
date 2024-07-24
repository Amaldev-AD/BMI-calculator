
// function male(){
//     document.getElementById('malebtn').style.border="2px solid rgb(209, 217, 135)";
// }
// function female(){
//     document.getElementById('femalebtn').style.border="2px solid rgb(209, 217, 135)";
// }
// function other(){
//     document.getElementById('otherbtn').style.border="2px solid rgb(209, 217, 135)";
// }
function setActive(buttonId) {
   const buttns=document.querySelectorAll('.body-button button')

   buttns.forEach(btn=>btn.classList.remove('active'))
   document.getElementById(buttonId).classList.add('active')
}


function wrtheight(){
    
    var wrtheight=document.getElementById('wrt_height').value
    
    bmi_height.value=wrtheight;
    outweight()
  
    
}
function wrtweight(){
    var wrtweight=document.getElementById('wrt_weight').value
   
    bmi_weight.value=wrtweight;
    outweight()
  
    
}
function outweight(){
    var weight=document.getElementById('bmi_weight').value

    var height=document.getElementById('bmi_height').value
    document.getElementById('bmi_input_weight').innerHTML=`${weight} kg`
    document.getElementById('bmi_input_height').innerHTML=`${height} cm`
}

function calculate(){
    var weight=document.getElementById('bmi_weight').value

    var height=document.getElementById('bmi_height').value
    let height_status=false
    let Weight_status=false
    if(height==='' || isNaN(height) || height<=0){
        document.getElementById('height_error').innerHTML='please provide a valid height'

    }else{
        document.getElementById('height_error').innerHTML=''
        height_status=true;

    }
    if(weight==='' || isNaN(weight) || weight<=0){
        document.getElementById('weight_error').innerHTML='please provide a valid weight'

    }else{
        document.getElementById('weight_error').innerHTML=''
        Weight_status=true;

    }
    
    if(height_status&&Weight_status){
    var bmi=(weight/Math.pow((height/100),2)).toFixed(2)
    document.getElementById('result-score').innerHTML=`${bmi}`;

    if(bmi < 18.5){
    document.getElementById('result-status').innerHTML=`Under Weight`;
    document.getElementById('result-status').style.color="#ff0000"


    }

    else if(bmi >= 18.5 && bmi<=24.9){
    document.getElementById('result-status').innerHTML=`Healthy Weight `;
    document.getElementById('result-status').style.color="#ff0000"


    }
    else if(bmi >= 25 && bmi<=29.9){
    document.getElementById('result-status').innerHTML=`Over Weight `;
    document.getElementById('result-status').style.color="#ff0000"


    }
    else{
    document.getElementById('result-status').innerHTML=`Obesity `;
    document.getElementById('result-status').style.color="#ff0000"


    }
}
else{
    alert("the form has errors")
    document.getElementById('output').innerHTML='' 
}

    if(height>=100 && height<105){
        healthyweight.innerHTML=`18.5Kg - 24.9kg`
    }
    else if(height>=105 && height<110){
        healthyweight.innerHTML=`20.3kg - 27.4kg`
    }
    else if(height>=110 && height<115){
        healthyweight.innerHTML=`22.4kg - 30.2kg`
    }
    else if(height>=115 && height<120){
        healthyweight.innerHTML=`24.5kg - 33.0kg`
    }
    else if(height>=120 && height<125){
        healthyweight.innerHTML=`26.6kg - 35.8kg`
    }
    else if(height>=125 && height<130){
        healthyweight.innerHTML=`28.9kg - 38.9kg`
    }
    else if(height>=130 && height<135){
        healthyweight.innerHTML=`31.2Kg - 42.1kg`
    }
    else if(height>=135 && height<140){
        healthyweight.innerHTML=`33.6Kg - 45.3kg`
    }
    else if(height>=140 && height<145){
        healthyweight.innerHTML=`36.1Kg - 48.8kg`
    }
    else if(height>=145 && height<150){
        healthyweight.innerHTML=`38.8Kg - 52.4kg`
    }
    else if(height>=150 && height<155){
        healthyweight.innerHTML=`41.6Kg - 56.0kg`
    }
    else if(height>=155 && height<160){
        healthyweight.innerHTML=`44.4Kg - 59.7kg`
    }
    else if(height>=160 && height<165){
        healthyweight.innerHTML=`47.4Kg - 63.8kg`
    }
    else if(height>=165 && height<170){
        healthyweight.innerHTML=`50.4Kg - 67.6kg`
    }
    else if(height>=170 && height<175){
        healthyweight.innerHTML=`53.5Kg - 72.0kg`
    }
    else if(height>=175 && height<180){
        healthyweight.innerHTML=`56.6Kg - 76.2kg`
    }
    else if(height>=180 && height<185){
        healthyweight.innerHTML=`59.9Kg - 81.0kg`
    }
    else if(height>=185 && height<190){
        healthyweight.innerHTML=`63.3Kg - 85.0kg`
    }
    else if(height>=190 && height<195){
        healthyweight.innerHTML=`66.6Kg - 90.2kg`
    }
    else if(height>=195 && height<200){
        healthyweight.innerHTML=`70.2Kg - 94.7kg`
    }
    else if(height>=200 && height<205){
        healthyweight.innerHTML=`73.6Kg - 99.6kgkg`
    }

}