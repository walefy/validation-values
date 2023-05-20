import validator from 'validator';
import './style.css';

const inputValue = document.querySelector('#value');
const identificationType = document.querySelector('#identificationType');
const submitBtn = document.querySelector('button');
const outputPEl = document.querySelector('p');
const UUID_VERSION = 4;

const isCPF = (cpf) => validator.isTaxID(cpf, 'pt-BR');
const isUUIDv4 = (uuid) => validator.isUUID(uuid, UUID_VERSION);

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const options = {
    email: validator.isEmail,
    cpf: isCPF,
    hexColor: validator.isHexColor,
    uuid: isUUIDv4,
    url: validator.isURL,
  };

  try {
    const verification = options[identificationType.value](inputValue.value);
    outputPEl.innerText = verification ? `${identificationType.value} existe`
      : `${identificationType.value} não existe`;
  } catch (error) {
    outputPEl.innerText = `A validação falhou com o erro: ${error.message}`;
  }
});
