const dob = document.querySelector('#birth');
const luckyNum = document.querySelector('#lucky-number');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const image = document.querySelector('#image');


const compare = (sum,luckyNum) => {

    if(sum % luckyNum === 0) {
        output.innerHTML="Your Birthday is Lucky 😁";
        image.src = "/luck.png";
        image.style.border = "3px solid green";
    }
    else {
        output.innerHTML="Sorry, It's Not Lucky 🙄";
        image.src = "/unluck.jpg";
        image.style.border = "3px solid red";
    }
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

// const lucky = () => {
//     const image = document.createElement('img');
//     image.src  = '/lucky.jpg';
//     document.querySelector('.graphic').appendChild(image);
// }

btn.addEventListener('click', checkLucky);