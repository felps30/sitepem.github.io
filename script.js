const nome = document.getElementById("nome");
const email = document.getElementById("email");
const fone = document.getElementById("fone");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");


function sendEmail(){
  Email.send({
    SecureToken : " 53195838-6a15-44a5-83ee-8aee01d4e9fd",
    To : 'contato@paivamurno.com.br',
    From : "felipe@paivamurno.com.br",
    Subject : assunto,
    Body : nome, email, fone, mensagem
}).then(
  message => alert("Mensagem Enviada com sucesso")
);

}
