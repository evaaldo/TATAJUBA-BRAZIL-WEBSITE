const form = document.getElementById('form')

(function(){
    emailjs.init("gcQJkwh4AOZnT9zPf");
})();

form.addEventListener('submit', function(event) {

    event.preventDefault()

    let nome = document.getElementById('nome')
    let telefone = document.getElementById('telefone')
    let email = document.getElementById('email')
    let mensagem = document.getElementById('mensagem')

    let emailData = {
        from_nome: nome,
        from_telefone: telefone,
        from_email: email,
        mensagem: mensagem
    }

    emailjs.send('service_hjh7g1f', 'template_rjp6bo2', emailData)
      .then(function(response) {
         console.log('Email enviado com sucesso!', response);
      }, function(error) {
         console.error('Erro ao enviar o email', error);
      });

      console.log('a')

})