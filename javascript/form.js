const form = document.createElement("form")

const nevInput = document.createElement("input")
nevInput.type = "text"
nevInput.placeholder = "Név"
nevInput.id = "nev"

const emailInput = document.createElement("input")
emailInput.type = "email"
emailInput.placeholder = "E-mail"
emailInput.id = "email"

const gomb = document.createElement("button")
gomb.type = "submit"
gomb.textContent = "Kuldes"

const eredmeny = document.createElement("p")

form.appendChild(nevInput)
form.appendChild(emailInput)
form.appendChild(gomb)

document.body.appendChild(form)
document.body.appendChild(eredmeny)

form.addEventListener("submit", function(event){
    event.preventDefault()
    const nev = nevInput.value.trim()
    const email = emailInput.value.trim()

    if (nev === ""){
        eredmeny.textContent = "A nev megadasa kotelezo"
        return
    }

    if (nev.length < 3){
        eredmeny.textContent = "A név legyen legalább 3 karakter"
        return
    }

    if (email === ""){
        eredmeny.textContent = "Az email megadasa kotelezo"
        return
    }

    if (!email.includes("@")){
        eredmeny.textContent = "Nem megfelelo email cim"
        return
    }

    if (!email.includes(".")){
        eredmeny.textContent = "Nem megfelelo email cim"
        return
    }

    eredmeny.textContent = "Név: " + nev + " | E-mail: " + email
})

