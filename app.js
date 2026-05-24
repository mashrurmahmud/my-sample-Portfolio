const login_form = document.querySelector('.login_form');
const login_btn = document.querySelector('.login_btn');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click',()=>{
     overlay.classList.toggle('show');
    login_form.classList.toggle('show');

})

login_btn.addEventListener('click', ()=>{
     login_form.classList.toggle('show');
     overlay.classList.toggle('show');
})



function handleSubmit(e){
    e.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const email_error = document.querySelector('.email_error');
    const password_error = document.querySelector('.password_Error')
    const input_email = email.value;
    const input_password = password.value;
    if(input_email===""){
        if(input_password === ""){
            email_error.innerHTML=`email should be required`
            password_error.innerHTML=`Password should be required`;
            return 

        }
        
    }
    
}


