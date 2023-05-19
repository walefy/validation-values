import validator from 'validator';
import './style.css';

const inputValue = document.querySelector('#value');
const identificationType = document.querySelector('#identificationType');
const submitBtn = document.querySelector('button');
const outputPEl = document.querySelector('p');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const UUID_VERSION = 4;

  const options = {
    email: validator.isEmail(inputValue.value),
    cpf: validator.isTaxID(inputValue.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputValue.value),
    uuid: validator.isUUID(inputValue.value, UUID_VERSION),
    url: validator.isURL(inputValue.value),
  };

  try {
    const verification = options[identificationType.value];
    outputPEl.innerText = verification ? `${identificationType.value} exite`
      : `${identificationType.value} não existe`;
  } catch (error) {
    outputPEl.innerText = `A validação falhou com o erro: ${error.message}`;
  }
});
