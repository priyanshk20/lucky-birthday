const dob = document.querySelector('#birth');
const luckyNum = document.querySelector('#lucky-number');
const btn = document.querySelector('#btn');


btn.addEventListener('click', () => {
    console.log(dob.value);
    console.log(luckyNum.value);
    preventDefault();
})


const checkLucky = () => {
    const bdate = dob.value;
    const num = luckyNum.value;

}

const calcSum = (bdate) => {
    bdate.replaceAll("-","");
}