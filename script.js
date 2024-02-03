//lets get all required elements
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form .onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.color = "#0d6efd";
    statusTxt.style.display = "block";
    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true); // sending post request message.php file
    xhr.onload = ()=>{ //once ajax load
if(xhr.readystate == 4 && xhr.status == 200){ //if ajax response status is 200 and ready status is 4 means there is no error
    let response = xhr.response; //storing ajax response in a responsive variable
    if(response.indexOf("Enter a email adress!") != -1 || response.indexOf("sorry failed to send your message!"));
    statusTxt.style.color = "#0d6efd";
    statusTxt.innerText = response;
}else{
    form.reset();
    setTimeout(()=>{
        statusTxt.style.display = "none";

    },3000 );
}
    }
    let formData = new FormData(form); //creating new formdata obj.This object is used to send from data
    xhr.send(formData); //sending form data
}
