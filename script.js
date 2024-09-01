// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        validateInputs();
    });

    function validateInputs() {
        let isValid = true;

        // Validação do campo Nome
        if (nameInput.value.trim() === '') {
            alert('Por favor, preencha o campo Nome.');
            isValid = false;
        }

        // Validação do campo E-mail
        if (!isValidEmail(emailInput.value)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            isValid = false;
        }

        // Validação do campo Telefone
        if (!isValidPhone(phoneInput.value)) {
            alert('Por favor, insira um número de telefone válido.');
            isValid = false;
        }

        // Validação do campo Mensagem
        if (messageInput.value.trim() === '') {
            alert('Por favor, preencha o campo Mensagem.');
            isValid = false;
        }

        if (isValid) {
            sendForm();
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneRegex.test(phone);
    }

    async function sendForm() {
        try {
            const formData = new FormData(form);
            const response = await axios.post('/api/send-email', formData);
            alert('Formulário enviado com sucesso! Resposta recebida:', response.data);
        } catch (error) {
            console.error('Erro ao enviar formulário:', error.message);
            alert('Desculpe, ocorreu um erro ao enviar seu formulário. Por favor, tente novamente.');
        }
    }
});