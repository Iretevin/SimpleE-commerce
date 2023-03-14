const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    });
}

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    });
}


/*counter js starts here */
const count = document.getElementById("count");

incrementVisitsCount();

function incrementVisitsCount() {
let visits;

if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
else {
visits = +localStorage.getItem("visits");
const incrementedCount = visits + 1;

localStorage.setItem("visits", incrementedCount);
}

count.innerText = localStorage.getItem("visits");
}

/*counter js starts here */
