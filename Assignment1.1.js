//Task 1
const Buton1 = document.querySelector('.Buton1');
const image = document.querySelector('#pp');
 Buton1.addEventListener('click',Photo);
 //Debug
 console.log(Buton1);
 console.log(image);
let count =0;
 function Photo(){
    console.log("Photo function called.");
    if (count%2===0){
        image.src='/Pictures/Hatt.jpg';
    }
    else{
    image.src='/Pictures/Dora.jpg';

    }
    count++;
     

}



//Task 2
const para = document.querySelector('.para');
const button1 = document.querySelector('.button1');
 
button1.addEventListener('click',paraa);

count =0;
function paraa(){
if (count%2===0)
{
    para.style.display = 'none';
    button1.innerText = 'Show Text';
}

else {
    para.style.display = 'block';
    button1.innerText = 'Hide Text';

}
count++;
}




//Task 3
const para1 = document.querySelector('.para1');

para1.addEventListener('mouseover',Hello);

function Hello()
{
    para1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum quaerat ea! Corporis itaque voluptas exercitationem est quis enim mollitia cumque, ducimus consectetur sapiente iure asperiores ut dolorem esse provident?';
}

 
para1.addEventListener('mouseout',Helloo);

function Helloo()
{
    para1.innerText = 'Hover Mouse';
}


//Task 4
const slide = document.querySelector(".slide");
const slider =  document.querySelectorAll(".slider");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let index = 0;
let a = slider.length;
console.log(a);
left.addEventListener("click", show);
function show(){
    slider[index].style.display = "none";
    slider[index].style.borderRadius = "50%";
    
    if(index===0){
        index=a-1;
    }
    else{
        index--;
    }

    slider[index].style.display = "block";
    slider[index].style.borderRadius = "50%";
}


right.addEventListener("click",next)
 function next(){
    slider[index].style.display = "none";
    slider[index].style.borderRadius = "50%";

    if(index===a-1){
        index = 0;
    }
    else{
        index++;
    }

    slider[index].style.display = "block";
    slider[index].style.borderRadius = "50%";
 }

