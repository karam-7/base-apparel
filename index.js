const addButton = document.querySelector('.btn');
const emailInput = document.querySelector('#add');
const errorDiv = document.querySelector('.error');
const errorPara = document.querySelector('.error-para');
 
addButton.addEventListener('click', () => {
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  if (!regex.test(email)) {
    errorDiv.style.display = 'block';
    errorPara.style.display = 'block';
  } else {
    emailInput.style.borderColor = '';
    errorDiv.style.display = 'none';
    errorPara.style.display = 'none';
  }
});
 
emailInput.addEventListener('input', () => {
  errorDiv.style.display = 'none';
  errorPara.style.display = 'none';
});
