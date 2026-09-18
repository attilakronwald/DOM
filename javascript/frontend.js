const body = document.querySelector("body")
body.id = "body"

const focim = document.createElement("h1")
focim.id = "focim"
focim.textContent = `DOM(Document Object Model)`

const alcim = document.createElement("h4")
alcim.id = "alcim"
alcim.textContent = `Alcim`

const vonal = document.createElement("hr")
vonal.id = vonal

const szoveg = document.createElement("p")
szoveg.id = "szoveg"
szoveg.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut est illum rem voluptatum quos officia placeat, repudiandae iure. Ipsum excepturi possimus hic incidunt dolore exercitationem pénzügyőr reiciendis totam dolorem adipisci.Voluptate dolorem ratione voluptates praesentium voluptas architecto neque, facere pariatur quisquam, consectetur eum a repellendus libero possimus ut laborum odio, consequuntur minus laudantium nisi voluptatum. Autem accusantium ducimus eligendi eum.A error in asperiores sunt excepturi, harum odit distinctio voluptatem odio ratione voluptatibus! Est rem quaerat aliquam aliquid facere nobis impedit ratione eius esse hic, adipisci nemo, quae provident corrupti!`

const masodikszoveg = document.createElement("p")
masodikszoveg.id = "masodikszoveg"
masodikszoveg.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut est illum rem voluptatum quos officia placeat, repudiandae iure. Ipsum excepturi possimus hic incidunt dolore exercitationem dolor reiciendis totam dolorem adipisci.Voluptate dolorem ratione voluptates praesentium voluptas architecto neque, facere pariatur quisquam, consectetur eum a repellendus libero possimus ut laborum odio, consequuntur minus laudantium nisi voluptatum. Autem accusantium ducimus eligendi eum.A error in asperiores sunt excepturi, harum odit distinctio voluptatem odio ratione voluptatibus! Est rem quaerat aliquam aliquid facere nobis impedit ratione eius esse hic, adipisci nemo, quae provident corrupti!`

const harmadikszoveg = document.createElement("p")
harmadikszoveg.id = "harmadikszoveg"
harmadikszoveg.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut est illum rem voluptatum quos officia placeat, repudiandae iure. Ipsum excepturi possimus hic incidunt dolore exercitationem dolor reiciendis totam dolorem adipisci.Voluptate dolorem ratione voluptates praesentium voluptas architecto neque, facere pariatur quisquam, consectetur eum a repellendus libero possimus ut laborum odio, consequuntur minus laudantium nisi voluptatum. Autem accusantium ducimus eligendi eum.A error in asperiores sunt excepturi, harum odit distinctio voluptatem odio ratione voluptatibus! Est rem quaerat aliquam aliquid facere nobis impedit ratione eius esse hic, adipisci nemo, quae provident corrupti!`

const gomb1 = document.createElement("button")
gomb1.id = "gomb"
gomb1.textContent = "kattints"

const gomb2 = document.createElement("button")
gomb2.id = gomb2
gomb2.textContent = "kattints"
const gomb3 = document.createElement("button")
gomb3.id = gomb3
gomb3.textContent = "kattints"
const gomb4 = document.createElement("button")
gomb4.id = gomb4
gomb4.textContent = "kattints"
// elemek összefuzese
document.body.appendChild(focim)
document.body.appendChild(alcim)
document.body.appendChild(gomb2)
document.body.appendChild(gomb3)
document.body.appendChild(gomb4)
document.body.append(vonal)
document.body.appendChild(szoveg)
document.body.appendChild(masodikszoveg)
document.body.appendChild(harmadikszoveg)
document.body.appendChild(gomb1)

//formazas css-ben
/*
focim.style.color = "Red"
alcim.style.color = "Blue"

focim.style.textAlign = "center"
alcim.style.textAlign = "center"


szoveg.style.lineHeight = '1.5'
masodikszoveg.style.lineHeight = '1.5'
harmadikszoveg.style.lineHeight = '1.5'

szoveg.style.textIndent = '1em'
masodikszoveg.style.textIndent = '1em'
harmadikszoveg.style.textIndent = '1em'
*/