
Email.send({
    SecureToken : "453921ff-857f-4ee1-8e88-7e0d4d74c872",
    To : 'contato@paivamurno.com.br',
    From : "felipe@paivamurno.com.br",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
