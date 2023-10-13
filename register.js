const form = document.getElementById('form')
const namalengkap = document.getElementById('namalengkap')
const email = document.getElementById('email')
const jenis = document.getElementById('jenis')
const kota = document.getElementById('city')
const password = document.getElementById('password')
const repeatPassword = document.getElementById("repeat-password")
const errorElement = document.getElementById('error')

function capLettValid(str) {     return /[A-Z]/.test(str); }
form.addEventListener('submit', (e) =>{
    let messages = []
    if(namalengkap.value ==''){
        messages.push('Name is required')
    }
    if (email.value == '' || email.value == null){
        messages.push('Email is required')
    } else if(email.value.length <= 6){
        messages.push('Please input the email correctly')
    }
    
    if (password.value == '' || password.value == null) {         
        messages.push('Password is required');     
    } else if (password.value.length<8) {         
        messages.push('Password must be atleast 8 character');     
    } else if (!capLettValid(password.value)) {         
        messages.push('Password must have atleast 1 letters and 1 Capital');     
    }
    if (password.value != repeatPassword.value){
        messages.push('Password & Confirm Password not match')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')    
    }
})
