const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (email.value == '' || email.value == null){
        messages.push('Email is required')
    }
    
    if (password.value == '' || password.value == null){
        messages.push('Password is required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')    
    }
})
console.log('Hopefully I can be better')
console.log('Especially in JavaScript')
