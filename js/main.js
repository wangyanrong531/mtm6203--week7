
const employee ={
    name: "Jax",
    id:041075430,
    hireDate:23,
    hireMonth:"Aug",
    hireYear:2001,
    department: "Innovation",
    email:"jax@company.com",
    skills:["UX","prototyping","research","documentation"],
    address:{
        street:"123 Street",
        city:"Merlot",
    },
    selfIntro: function(){
        const temp =`Hi I am${this.name}!I started working in ${this.department} since ${this.hireDate} ${this.hireMonth},${this.hireYear}`
        return temp
    }
}

const empSection =document.getElementById("employee")
empSection.insertAdjacentHTML("beforeend",`<h2>Welcome ${employee.name}!<h2>`)

//非常常用的东西//'

employee.department ="Innovation and Research"

const empInfo =`<dl>
<dt>ID</dt>
<dd>${employee.id}</dd>
<dt>Department</dt>
<dd>${employee.department}</dd>
</dl>`

empSection.insertAdjacentHTML("beforeend",empInfo)



//adding a property to object, not recommended, we should try to add properties in the original declaration
employee.pronouns ="They/Them"
empSection.insertAdjacentHTML("beforeend",`<p>${employee.name}uses pronous ${employee.pronouns}</p>`)

empSection.insertAdjacentHTML("beforeend", `<p>${employee.name}is skilled in ${employee.skills.join(',')}</p>`)

empSection.insertAdjacentHTML("beforeend", `<p>Address:${employee.address.street},${employee.address.city}</p>`)  //object inside a object

empSection.insertAdjacentHTML("beforeend",employee.selfIntro())