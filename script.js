
const buttonAuth = document.querySelector('#autorizationBtn')
const inputAuth = document.querySelector('#autorizationInput')
const windowAuth = document.querySelector('.windowAutorization')
const welcomeName = document.querySelector('#welcomeText')
let nameAuth;
const welcomeButton = document.querySelector('#playBtn')
const welcomeWindow = document.querySelector('.welcome')
const playBlock = document.querySelector('.play')

    buttonAuth.addEventListener('click', function(){
        if(inputAuth.value.trim() === ''){
            alert('введите имя')
            
        } else{
            windowAuth.classList.add('hide')
            nameAuth = inputAuth.value;
            welcomeName.innerHTML = `Welcome, &nbsp ${nameAuth} <br> HIGH &nbsp SCORE: &nbsp ${Score}`
            welcomeWindow.classList.remove('hide')
        }

    })


    welcomeButton.addEventListener('click', function(){
        playBlock.classList.remove('hide')
        welcomeWindow.classList.add('hide')
    })

    const random = (min, max) => {
        const rand = min = Math.random() * (max - min + 0, 90);
        return Math.floor(rand);
    }
    var bg = 0;
    var Score = 0;
    document.querySelector('#Score').innerHTML =`&nbsp SCORE: &nbsp ${Score}`;
    
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseenter", () => {
        btn.style.left = `${random(0.80)}%`;
        btn.style.top = `${random(0.80)}%`;
        bg = bg + 1;
        if(bg % 2 == 1){
            btn.classList.add('BGChange');
            btn.classList.remove('BGChange2');
        } else{
            btn.classList.add('BGChange2');
            btn.classList.remove('BGChange');
        }
        
    });
    document.querySelector('.btn').onclick = btnClick;
    function btnClick(){
        btn.style.left = `${random(0.80)}%`;
        btn.style.top = `${random(0.80)}%`;
        Score = Score + 1;
        document.querySelector("#Score").innerHTML =`SCORE: &nbsp ${Score}`;
    };

    const btn1 = document.querySelector(".btn1");
    btn1.addEventListener("mouseenter", () => {
        btn1.style.left = `${random(0.80)}%`;
        btn1.style.top = `${random(0.80)}%`;
        bg = bg + 1;
        if(bg % 2 == 1){
            btn1.classList.add('BGChange2');
            btn1.classList.remove('BGChange');
        } else{
            btn1.classList.add('BGChange');
            btn1.classList.remove('BGChange2');
        }
    });
    document.querySelector('.btn1').onclick = btnClick1;
    function btnClick1(){
        btn1.style.left = `${random(0.80)}%`;
        btn1.style.top = `${random(0.80)}%`;
        Score = Score + 1;
        document.querySelector("#Score").innerHTML =`SCORE: &nbsp ${Score}`;
    };

    const btn2 = document.querySelector(".btn2");
    btn2.addEventListener("mouseenter", () => {
        btn2.style.left = `${random(0.80)}%`;
        btn2.style.top = `${random(0.80)}%`;
        bg = bg + 1;
        if(bg % 2 == 1){
            btn2.classList.add('BGChange');
            btn2.classList.remove('BGChange2');
        } else{
            btn2.classList.add('BGChange2');
            btn2.classList.remove('BGChange');
        }    });
    document.querySelector('.btn2').onclick = btnClick2;
    function btnClick2(){
        btn2.style.left = `${random(0.80)}%`;
        btn2.style.top = `${random(0.80)}%`;
        Score = Score + 1;
        document.querySelector("#Score").innerHTML =`SCORE: &nbsp ${Score}`;
    };

    const btn3 = document.querySelector(".btn3");
    btn3.addEventListener("mouseenter", () => {
        btn3.style.left = `${random(0.80)}%`;
        btn3.style.top = `${random(0.80)}%`;
        bg = bg + 1;
        if(bg % 2 == 1){
            btn3.classList.add('BGChange2');
            btn3.classList.remove('BGChange');
        } else{
            btn3.classList.add('BGChange');
            btn3.classList.remove('BGChange2');
        }    });
    document.querySelector('.btn3').onclick = btnClick3;
    function btnClick3(){
        btn3.style.left = `${random(0.80)}%`;
        btn3.style.top = `${random(0.80)}%`;
        Score = Score + 1;
        document.querySelector("#Score").innerHTML =`SCORE: &nbsp ${Score}`;
    };
    const btn4 = document.querySelector(".btn4");
    btn4.addEventListener("mouseenter", () => {
        btn4.style.left = `${random(0.80)}%`;
        btn4.style.top = `${random(0.80)}%`;
        bg = bg + 1;
        if(bg % 2 == 1){
            btn4.classList.add('BGChange');
            btn4.classList.remove('BGChange2');
        } else{
            btn4.classList.add('BGChange2');
            btn4.classList.remove('BGChange');
        }    });
    document.querySelector('.btn4').onclick = btnClick4;
    function btnClick4(){
        btn4.style.left = `${random(0.80)}%`;
        btn4.style.top = `${random(0.80)}%`;
        Score = Score + 1;
        document.querySelector("#Score").innerHTML =`SCORE: &nbsp ${Score}`;
    };
