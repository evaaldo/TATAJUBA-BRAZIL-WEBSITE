const form = document.getElementById('contact-form')

form.addEventListener('submit', (event) => {

    event.preventDefault()

    emailjs.sendForm('service_drdtohe', 'template_xzhu2jb', form, 'va93XjSM1fx9ouV8d').then(function() {
            console.log('SUCESSO')
        }, function(error) {
            console.log('ERRO', error)
        })

    alert('Mensagem enviada com sucesso!')
    location.reload()

})
