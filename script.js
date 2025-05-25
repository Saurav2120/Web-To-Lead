function beforeSubmit(){
    let outputDate = document.querySelector('.outputDate');
    let inputDate = document.querySelector('.inputDate');
    console.log('Input Date--> ',inputDate.value);//string-->Date(en_IN)

    let formattedDate = new Date(inputDate.value).toLocaleDateString('en-IN'); 
    outputDate.value = formattedDate;
}