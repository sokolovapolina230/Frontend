// Завдання 1: Валідація форми
const form = document.getElementById('dataForm');
const infoData = document.getElementById('infoData');

const patterns = {
    pib: /^[А-ЯІЇЄҐ][а-яіїєґ]{5,}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    faculty: /^[А-ЯІЇЄҐ]{4}$/,
    birthdate: /^\d{2}\.\d{2}\.\d{4}$/,
    address: /^м\.\s[А-ЯІЇЄҐA-Z][а-яіїєґa-z]+$/,
    email: /^[a-z]{4,}@[a-z]{5}\.com$/
};

const errorMessages = {
    pib: 'Введіть ПІБ у форматі: Ттттт Т.Т.',
    faculty: 'Введіть факультет у форматі: ТТТТ',
    birthdate: 'Введіть дату у форматі: ЧЧ.ЧЧ.ЧЧЧЧ',
    address: 'Введіть адресу у форматі: м. Тттт',
    email: 'Введіть email у форматі: тттт@ттттт.com'
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
        const errorSpan = input.nextElementSibling;
        const value = input.value.trim();
        const pattern = patterns[input.id];
        
        if (value.length === 0) {
            input.classList.add('invalid');
            errorSpan.textContent = 'Поле не може бути порожнім';
            isValid = false;
        } else if (!pattern.test(value)) {
            input.classList.add('invalid');
            errorSpan.textContent = errorMessages[input.id];
            isValid = false;
        } else {
            input.classList.remove('invalid');
            errorSpan.textContent = '';
        }
    });
    
    if (isValid) {
        showResult();
    }
});

function showResult() {
    infoData.innerHTML = `
        <p><strong>ПІБ:</strong> ${document.getElementById('pib').value}</p>
        <p><strong>Факультет:</strong> ${document.getElementById('faculty').value}</p>
        <p><strong>Дата народження:</strong> ${document.getElementById('birthdate').value}</p>
        <p><strong>Адреса:</strong> ${document.getElementById('address').value}</p>
        <p><strong>Пошта:</strong> ${document.getElementById('email').value}</p>
    `;
}

// Завдання 2: Таблиця
const table = document.getElementById('mainTable');
let selectedColor = document.getElementById('colorPicker').value;

document.getElementById('colorPicker').addEventListener('change', function() {
    selectedColor = this.value;
});

for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        const cellNumber = i * 6 + j + 1;
        cell.textContent = cellNumber;
        cell.dataset.number = cellNumber;
        
        if (cellNumber === 5) {
            cell.addEventListener('mouseover', function() {
                this.style.backgroundColor = getRandomColor();
            });
            
            cell.addEventListener('click', function() {
                this.style.backgroundColor = selectedColor;
            });
            
            cell.addEventListener('dblclick', function() {
                const allCells = table.querySelectorAll('td');
                allCells.forEach(c => {
                    if (c !== this) {
                        c.style.backgroundColor = selectedColor;
                    }
                });
            });
        }
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}