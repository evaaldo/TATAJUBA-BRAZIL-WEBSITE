function sendMail() {

    var params = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("email").value,
        email: document.getElementById("telefone").value,
        mensagem: document.getElementById("mensagem").value,
    };

    const serviceID = "service_hjh7g1f";
    const templateID = "template_rjp6bo2";

    emailjs.send(serviceID, templateID, params).then((res) => {

            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("telefone").value = "";
            document.getElementById("mensagem").value = "";
            console.log(res);
            alert("Sua mensagem foi enviada com sucesso!")

        })
        .catch((err) => console.log(err));

}
