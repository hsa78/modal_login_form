"use strict"

function openModal(){
    console.log('in func');
    document.getElementsByClassName('modal-container')[0].style.display = "block";
    document.querySelector(".modal").className = "modal";

    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            document.querySelector(".modal").className = "modal fade";
        })
    })

}

function closeBtnHandler(){
    var closeBtn = document.getElementById("close");
    closeBtn.addEventListener('click',function(){
        closeModal();
    })
}

function loginBtnHandler(){
    var loginBtn = document.getElementById('form-login-btn');
    loginBtn.addEventListener('click',function(){
        closeModal();
    })
}

function forgotPassHanler(){
    var forgotLink = document.getElementById('forgot-pass');
    forgotLink.addEventListener('click',function(){
        closeModal();       
    })
}

function cancelHandler(){
    var cancelBtn = document.getElementById('cancel');
    cancelBtn.addEventListener('click',function(){
        closeModal();
    })
}

function closeModal(){
    document.getElementsByClassName('modal-container')[0].style.display = "none";
}

function modalHandler(){
    closeBtnHandler();
    loginBtnHandler();
    forgotPassHanler();
    cancelHandler();
}

function loginHandler(){
    openModal();
    modalHandler();
}

function main(){
    var btn = document.getElementById('login-btn');
    btn.addEventListener('click',function(){
        loginHandler();
    })
}

main();



