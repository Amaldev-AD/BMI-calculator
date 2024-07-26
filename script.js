
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
    document.getElementById('bmi-body1').style.display="block"
    document.getElementById('result-score').innerHTML=`${bmi}`;
    
   

    if(bmi < 18.5){
    document.getElementById('result-status').innerHTML=`Under Weight`;
    document.getElementById('result-status').style.color="#ff0000"
    document.getElementById('bmi-result-body2').style.display="flex"
    var discription="Under Weight"
    let rotate=Math.floor(((45/18.5)*bmi)-90)
    document.getElementById('needleimg').style.transform=`rotate(${rotate}deg)`

    const text=`Your BMI is ${bmi}.You are Underweight.Being underweight can be a sign of malnutrition, health problems, or other medical conditions.`
    }

    else if(bmi >= 18.50 && bmi<=24.99){
    document.getElementById('result-status').innerHTML=`Healthy Weight `;
    document.getElementById('result-status').style.color="#ff0000"
        document.getElementById('bmi-result-body2').style.display="flex"
        var discription="Healthy"
        let rotate=Math.floor(((45/(24.9-18.5))*(bmi-18.5))-45)
        document.getElementById('needleimg').style.transform=`rotate(${rotate}deg)`

    }
    else if(bmi >= 25 && bmi<=29.99){
    document.getElementById('result-status').innerHTML=`Over Weight `;
    document.getElementById('result-status').style.color="#ff0000"
    document.getElementById('bmi-result-body2').style.display="flex"
    var discription="Over Weight"
    let rotate=Math.floor(((45/(25-19.9))*(bmi-25)))
        
    document.getElementById('needleimg').style.transform=`rotate(${rotate}deg)`

    }
    else if(bmi >= 30 && bmi<=34.50){
    document.getElementById('result-status').innerHTML=`Obesity `;
    document.getElementById('result-status').style.color="#ff0000"
        document.getElementById('bmi-result-body2').style.display="flex"
        var discription="obese"
        let rotate=Math.floor(((45/(30-35.5))*(bmi-35))+45)
        
        document.getElementById('needleimg').style.transform=`rotate(${rotate}deg)`
        

    }
    else{
        document.getElementById('needleimg').style.transform=`rotate(90deg)`
        document.getElementById('result-status').innerHTML=`Obesity `;
    document.getElementById('result-status').style.color="#ff0000"
      document.getElementById('bmi-result-body2').style.display="flex"
      var discription="obese"

    }
}
else{
    alert("the form has errors")

    // document.getElementById('output').innerHTML='' 
}

    if(height>=100 && height<105){
        healthyweight.innerHTML=`18.5Kg - 24.9kg`
        if(bmi >= 18.50 && bmi<=24.99){
            var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription},  being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 18.5Kg to 24.9kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=105 && height<110){
        healthyweight.innerHTML=`20.3kg - 27.4kg`
        if(bmi >= 18.50 && bmi<=24.99){
         var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)               
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 20.3kg to 27.4kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=110 && height<115){
        healthyweight.innerHTML=`22.4kg - 30.2kg`
        if(bmi >= 18.50 && bmi<=24.99){
           var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)           
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 22.4kg to 30.2kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    
    else if(height>=115 && height<120){
        healthyweight.innerHTML=`24.5kg - 33.0kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 24.5kg to 33.0kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=120 && height<125){
        healthyweight.innerHTML=`26.6kg - 35.8kg`
        if(bmi >= 18.50 && bmi<=24.99){

        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 26.6kg to 35.8kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=125 && height<130){
        healthyweight.innerHTML=`28.9kg - 38.9kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 28.9kg to 38.9kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=130 && height<135){
        healthyweight.innerHTML=`31.2Kg - 42.1kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 31.2Kg to 42.1kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }

    }
    else if(height>=135 && height<140){
        healthyweight.innerHTML=`33.6Kg - 45.3kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 33.6Kg to 45.3kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    //
    else if(height>=140 && height<145){
        healthyweight.innerHTML=`36.1Kg - 48.8kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 36.1Kg to 48.8kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=145 && height<150){
        healthyweight.innerHTML=`38.8Kg - 52.4kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 38.8Kg - 52.4kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=150 && height<155){
        healthyweight.innerHTML=`41.6Kg - 56.0kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight.being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 41.6Kg to 56.0kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=155 && height<160){
        healthyweight.innerHTML=`44.4Kg - 59.7kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 44.4Kg to 59.7kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=160 && height<165){
        healthyweight.innerHTML=`47.4Kg - 63.8kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 47.4Kg to 63.8kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=165 && height<170){
        healthyweight.innerHTML=`50.4Kg - 67.6kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 50.4Kg to 67.6kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=170 && height<175){
        healthyweight.innerHTML=`53.5Kg - 72.0kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 53.5Kg to 72.0kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=175 && height<180){
        healthyweight.innerHTML=`56.6Kg - 76.2kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 56.6Kg to 76.2kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=180 && height<185){
        healthyweight.innerHTML=`59.9Kg - 81.0kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 59.9Kg to 81.0kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=185 && height<190){
        healthyweight.innerHTML=`63.3Kg - 85.0kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 63.3Kg to 85.0kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=190 && height<195){
        healthyweight.innerHTML=`66.6Kg - 90.2kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 66.6Kg to 90.2kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=195 && height<200){
        healthyweight.innerHTML=`70.2Kg - 94.7kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 70.2Kg to 94.7kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }
    else if(height>=200 && height<205){
        healthyweight.innerHTML=`73.6Kg - 99.6kg`
        if(bmi >= 18.50 && bmi<=24.99){
             var healthtext=`you are Healthy. Maintaining a healthy BMI is a great achievement! Keep up the good work by eating a balanced diet, staying active, and listening to your body's needs.`
            const utterance=new SpeechSynthesisUtterance(healthtext);
            speechSynthesis.speak(utterance)
        }else{
        const text=`Your BMI is ${bmi}, You are ${discription}, being ${discription} can indicate underlying health issues or imbalances, and it's important to seek professional advice to achieve and maintain a healthy weight., Healthy weight range for your height is 73.6Kg to 99.6kg`;
        const utterance=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance)
        }
    }

}