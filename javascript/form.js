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