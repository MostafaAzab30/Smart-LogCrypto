
// toggle

sonyup.addEventListener("click" , () => {

page2.classList.remove("page442")
index.classList.add("page442")
anuthercom.innerHTML = ``
document.getElementById("signemail").value = ``
document.getElementById("signpassword").value = ``

})

sonyin.addEventListener("click" , () => {

page2.classList.add("page442")
index.classList.remove("page442")
com.innerHTML = ``
document.getElementById("upemail").value = ``
document.getElementById("uppassword").value = ``
document.getElementById("upname").value = ``

})





// Sign up function


signup.addEventListener("click" , () =>{


var upname = document.getElementById("upname").value
var upemail = document.getElementById("upemail").value
var uppassword = document.getElementById("uppassword").value




if ( !upname || !upemail  || !uppassword ) {
com.innerHTML = `Name, E-mail and password are a required field`

} else {com.innerHTML = `Succes`

localStorage.setItem(`userename` , upname)
localStorage.setItem(`useremail` , upemail)
localStorage.setItem(`userepass` , uppassword)

}



} )



// Login function


// var getname = localStorage.getItem(`userepass`)

const niceone = document.getElementsByClassName("niceone")[0]

login.addEventListener("click" , () =>{

// const solana = document.createElement("div")

// body.append(solana)
// solana.classList.add("niceone")
// solana.innerText = `Welcome ` + getname
// solana.style.transform = "translatey(0vw)"

// setTimeout(() => { solana.style.transform = "translatex(-100vw)"     }, 3000)
// setTimeout(() => { solana.remove()     }, 4000)



var signemail = document.getElementById("signemail").value
var signpassword = document.getElementById("signpassword").value


var getemail = localStorage.getItem(`useremail`)
var getpass = localStorage.getItem(`userepass`)


if (signemail == getemail) {

if (signpassword == getpass) {

window.location.href = `home.html`

} 

}else if (!signemail || !signpassword) {

anuthercom.innerHTML = `password or E-mail are a required field`

} else if (signemail != getemail || signpassword != getpass) {
    anuthercom.innerHTML = `Incorrect email or password`
}

})

















































