
function handleFocus(event){
    const ele = document.getElementById(event.target.id);
    const parent_id = ele.parentElement.id;
    if(parent_id == 'id-container'){
        const parent = document.getElementById(parent_id);
        const label = parent.getElementsByClassName('animate-text');
        toggleTextAnimation(label[0]);
    } else{
        const parent = document.getElementById(parent_id);
        const label = parent.getElementsByClassName('animate-text');
        toggleTextAnimation(label[0]);
    }
}

function toggleTextAnimation(ele){
    const element = ele;
    element.classList.add('animate-small');
}

function getLoader(){
    const btn = document.getElementById('login-btn');
    btn.innerHTML = '<div class="loader"></div>';
    btn.firstChild.classList.add('loader-come');
}

function packUp(){
    document.getElementById('login-section').classList.add('login-after');
    const img = document.getElementsByClassName('house-img');
    img[0].classList.add('house-img-animate');
    const icon_text = document.getElementsByClassName('icon-para');
    icon_text[0].classList.add('icon-para-animate');
    setTimeout(movingIcon, 1000);
}

function movingIcon(){
    const icon = document.getElementsByClassName('icon');
    icon[0].classList.add('icon-animate');
    setTimeout(backgroundChange, 1000);
}

function backgroundChange(){
    const div = document.querySelector('body');
    div.innerHTML = '<img src="house.jpg" class="result"/>';
    setTimeout(backgroundGrow, 200);
}

function backgroundGrow(){
    const back = document.getElementsByClassName('result');
    back[0].classList.add('result-animate');
}

function handleSubmit(event){
    event.preventDefault();
    const text = document.getElementById('btn-text');
    text.classList.toggle('btn-animate');
    setTimeout(getLoader, 600);
    setTimeout(packUp, 2000);
}

function passwordVisible(){
    var x = document.getElementById('password-field');
    x.type = 'text';
}