const dob = document.querySelector('#birth');
const luckyNum = document.querySelector('#lucky-number');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const image = document.querySelector('#image');
const msgDiv = document.querySelector('.mssg-contain');
const cross = document.querySelector('#cross');


cross.addEventListener('click', ()=> {
    msgDiv.style.display = 'none';
})

const compare = (sum,luckyNum) => {

    if(sum % luckyNum === 0) {
       setter();
        setTimeout(function(){ 
            output.innerHTML="Your Birthday is Lucky 😁";
            image.src = "/luck.png";
            image.style.border = "3px solid green";
        }, 2000);
    }
    else {
       setter();
        setTimeout(function(){ 
            output.innerHTML="Sorry, It's Not Lucky 🙄";
            image.src = "/unluck.jpg";
            image.style.border = "3px solid red";
        },2000)
    }
}


const setter = () => {
    image.src = "/load.jpg";
    output.innerText = ""
    image.style.border = "3px solid black";
}


const checkLucky = () => {
    const bdate = dob.value;
    const sum = calcSum(bdate);
    compare(sum,luckyNum.value);
}

const calcSum = (bdate) => {
    bdate = bdate.replaceAll("-","");
    let sum = 0;

    for(let i=0;i<bdate.length;i++) {
        sum = sum + Number(bdate.charAt(i));
    }
    return sum;
}

btn.addEventListener('click', checkLucky);