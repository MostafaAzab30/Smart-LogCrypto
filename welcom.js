
var getname = localStorage.getItem(`userename`)

var thelast = document.getElementById("thelast")



function vego() {
    const solana = document.createElement("div")

body.append(solana)
solana.classList.add("niceone")
solana.innerText = `Welcome ` + getname
solana.style.transform = "translatey(0vw)"

setTimeout(() => { solana.style.transform = "translatex(-100vw)"     }, 3000)
setTimeout(() => { solana.remove()     }, 4000)
}

vego()





























