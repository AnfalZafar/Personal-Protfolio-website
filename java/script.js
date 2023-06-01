// burger js
let burgers = document.querySelector(".burgers"),
na = document.querySelector(".nav"),
croos = document.querySelector(".crooss");

burgers.addEventListener("click" , () => {
    na.classList.add("show")
});
croos.addEventListener("click" , () => {
    na.classList.remove("show")
})

// dark mode js

const them = document.querySelector(".them"),
inde = document.querySelector(".indecator"),
nave = document.querySelector(".nav"),
bu = document.querySelector(".hea-button"),
inder = document.querySelector(".indecator-2");

inde.addEventListener("click" , () =>{
    nave.classList.add("bak");
    inde.classList.add("sto");
    them.classList.add("change");
    bu.classList.add("bor");
    inder.classList.add("mov");
    document.body.classList.add("light-them");
})
inder.addEventListener("click" , () =>{
    inde.classList.remove("sto");
    them.classList.remove("change");
    nave.classList.remove("bak");
    bu.classList.remove("bor");
    inder.classList.remove("mov");
    document.body.classList.remove("light-them");
});

let btn1 = document.querySelector(".skills-btn"),
btn2 = document.querySelector(".project-btn"),
skills = document.querySelector(".skills"),
project = document.querySelector(".protofo");

btn2.addEventListener("click" , () =>{
    skills.classList.add("right");
    project.classList.add("left");

});
btn1.addEventListener("click" , () =>{
    skills.classList.remove("right");
    project.classList.remove("left");

});

const inp = document.querySelector(".slider"),
valu = document.querySelector(".values");

inp.oninput = (() =>{
    let value = inp.value;
    valu.textContent = value;
})

const inpu = document.querySelector(".slider-2"),
val = document.querySelector(".value");

inpu.oninput = (() =>{
    let value2 = inpu.value;
    val.textContent = value2;
})

const inpute = document.querySelector(".slider-3"),
values = document.querySelector(".valu");

inpute.oninput = (() =>{
    let value3 = inpute.value;
    values.textContent = value3;
    values.style.left = (value3/2) + "%"
})