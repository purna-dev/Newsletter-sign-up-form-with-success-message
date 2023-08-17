const emailid = document.getElementById('emailid');
const err = document.querySelector('.err_i');
const btn = document.getElementById('btn_submit')
const btn_close = document.getElementById('btn_close');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailValidation = (e)=>{
    // console.log(e.target.value)
    if(!e.target.value.match(validRegex)){
        
        err.style.display = 'block';
        emailid.style.backgroundColor = 'rgba(255,0,0,0.1)'
        emailid.style.outline = 'none'
        emailid.style.border = '1px solid red';
        emailid.style.color ='hsl(4, 100%, 67%)'
        
    }else{
        err.style.display = 'none';
        emailid.style.outline = ''

        emailid.style.backgroundColor = ''
        emailid.style.border = '';
        emailid.style.color =''
    }
    
}
emailid.addEventListener('input',emailValidation)

btn.addEventListener('click',()=>{
    if(emailid.value != null && emailid.value.match(validRegex)){
        // alert('valid ema')
        document.querySelector('.container .card').style.display = 'none'
        document.querySelector('.container .card2').style.display = 'inline';
        document.getElementById('p_email').textContent = emailid.value;

    }else{
        alert('Please enter email id !')
    }

})

btn_close.onclick = ()=>{
    emailid.value = null;
    document.querySelector('.container .card').style.display = ''
        document.querySelector('.container .card2').style.display = 'none';
        document.getElementById('p_email').textContent = null;
}