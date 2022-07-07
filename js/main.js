// sign in page


let SigninLink = document.getElementById("SigninLink")
let SignupLink =  document.getElementById("SignupLink")
let signUpImg = document.querySelector(".img")
let signinBtn = document.getElementById("sign-inBtn")
let signupBtn = document.getElementById("sign-upBtn")
let card = document.querySelector(".card")

let imgUp = document.getElementById("imgUp")
let imgIn = document.getElementById("imgIn")

SigninLink.addEventListener("click",()=>{
    SignupLink.style.display="block"
    signinBtn.style.display="block"
    SigninLink.style.display="none"
    NameInput.style.display="none"
    signupBtn.style.display="none"
    imgUp.style.display="none"
    imgIn.style.display="block"
    EmailInput.value=""
    PasswordInput.value=""
    chick.innerHTML=""
})


SignupLink.addEventListener("click",()=>{
    SigninLink.style.display="block"
    NameInput.style.display="block"
    signupBtn.style.display="block"
    signinBtn.style.display="none"
    SignupLink.style.display="none"
    imgUp.style.display="block"
    imgIn.style.display="none"  
    text2.style.display="none"
    text1.style.display="none"
    text5.style.display="none"
    EmailInput.value=""
    PasswordInput.value=""
})







let NameInput = document.getElementById("NameInput")
let EmailInput = document.getElementById("EmailInput")
let PasswordInput = document.getElementById("PasswordInput")
let chick = document.getElementById("chick")

var emaillist;
if(localStorage.elist !=null){
    emaillist=JSON.parse(localStorage.elist)
}else{
    var emaillist=[]
}

function existlist(){
    for(let i = 0 ; i<emaillist.length;i++){
        if(emaillist[i].emi == EmailInput.value)
        return false
    }
}


function signUp(){
    var dil = {
        name:NameInput.value,
        emi:EmailInput.value,
        pass:PasswordInput.value
    }
    if(existlist() == false){
        chick.innerHTML = '<p style="color:red;">email already exists</p>'
    }else{
        if(validation2() == true &&validation1() == true &&  verifyPassLength() == true){
            emaillist.push(dil)
            localStorage.setItem("elist",JSON.stringify(emaillist))
            chick.innerHTML="succes"
        }else{
            chick.innerHTML = '<p style="color:red;">inputs not valid</p>'
        }

    }

    var text2 = document.getElementById("text2").style.display="none"
    var text1 = document.getElementById("text1").style.display="none"
    var text5 = document.getElementById("text5").style.display="none"

    text2.style.display="none"
    text1.style.display="none"
    text5.style.display="none"
    
}


let spaceLogin = document.getElementById("space-Login")
let welcomePage = document.getElementById("welcomePage")
let text = document.getElementById("text")
// login

function emtylogin(){
    if(EmailInput.value == "" || PasswordInput.value == ""){
        return false
    }else{
        return true
    }
}

function loginf(){
    if(emtylogin() == false){
        chick.innerHTML='<p style="color:orange;">All inputs is required</p>'
        return false
    }
   
    var email = EmailInput.value;
    var password = PasswordInput.value;
    
    for(let i =0 ; i<emaillist.length ; i++){
        if(emaillist[i].emi == email &&emaillist[i].pass == password ){
            welcomePage.style.display ="block"
            spaceLogin.style.display ="none"
           localStorage.setItem("uname",emaillist[i].name)
           var get = localStorage.getItem("uname")
            text.innerHTML="welcome"+" "+ get
            
        }else{
            chick.innerHTML='<p style="color:red;">Not Found email and password</p>'
            welcomePage.style.display ="none"
            spaceLogin.style.display ="block"
        }
    }
}

function logout(){
    spaceLogin.style.display ="block"
    welcomePage.style.display ="none"
    EmailInput.value=""
    PasswordInput.value=""
    text2.style.display="none"
    text1.style.display="none"
    text5.style.display="none"
    function preventBack() {window.history.forward();}
 setTimeout("preventBack()", 0);  window.onunload = function () {null}
}






// validation


function validation2(){
	var form = document.getElementById("form");
	var NameInput = document.getElementById("NameInput").value;
	var text2 = document.getElementById("text2");
	var patternName = /^[a-zA-Z]+[a-zA-Z]+$/;
	

	if (NameInput.match(patternName)){
		form.classList.add("valid")
		form.classList.remove("invalid")
		text2.innerHTML = "Your name  in valid"
		text2.style.color = "#00ff00"
		text2.style.display = "block"

	}else{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text2.innerHTML = "please Enter valid name "
		text2.style.color = "#ff0000"
		text2.style.display = "block"
		
	}

	if (NameInput == ""){
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text2.innerHTML = ""
		text2.style.display = "none"
	}
    return true
}

function validation1(){
	var form = document.getElementById("form");
	var EmailInput = document.getElementById("EmailInput").value;
	var text1 = document.getElementById("text1");
	var patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	

	if (EmailInput.match(patternEmail)){
		form.classList.add("valid")
		form.classList.remove("invalid")
		text1.innerHTML = "Your email address in valid"
		text1.style.color = "#00ff00"
		text1.style.display = "block"

	}else{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text1.innerHTML = "please Enter valid email address"
		text1.style.color = "#ff0000"
		text1.style.display = "block"
		
	}

	if (EmailInput == ""){
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text.innerHTML = ""
		text.style.display = "none"
	}
    return true

}

function verifyPassLength()

{
	var password = document.getElementById("PasswordInput").value;
	//check empty password field
	var text5 = document.getElementById("text5");
	if(password == "")
	{
		form.classList.remove("valid")
		form.classList.remove("invalid")
		text5.innerHTML = ""
		text5.style.display = "none"

		return false;
	}
	
	//Password minimum length
	if(password.length < 6) 
	{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text5.innerHTML = "Password should not be less than 6 characters...! "
		text5.style.color = "#ff0000"
		text5.style.display = "block"
		return false;
	}

	//Password maximum length
	if(password.length > 12)
	{
		form.classList.remove("valid")
		form.classList.add("invalid")
		text5.innerHTML = "Password should not be greater than 12 characters...! "
		text5.style.color = "#ff0000"
		text5.style.display = "block"
		
		return false;
	}
	else
	{
		form.classList.add("valid")
		form.classList.remove("invalid")
		text5.innerHTML = " Password Verified."
		text5.style.color = "#00ff00"
		text5.style.display = "block"
	}
    return true

}