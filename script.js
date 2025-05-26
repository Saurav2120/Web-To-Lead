let captchaChecked = false;
if(captchaChecked){
    function beforeSubmit(event){
        let outputDate = document.querySelector('.outputDate');
        let inputDate = document.querySelector('.inputDate');
        console.log('Input Date--> ',inputDate.value);//string-->Date(en_IN)

        let formattedDate = new Date(inputDate.value).toLocaleDateString('en-IN'); 
        outputDate.value = formattedDate;
    }
}
else{
    alert("Please complete the CAPTCHA before submitting the form.");
    event.preventDefault();
    
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } 
} 
setInterval(timestamp, 500);

function captchaSuccess(){
    captchaChecked = true;
}
    

