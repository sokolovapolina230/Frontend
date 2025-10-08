// Завдання 1

// Стан кліків для кожного елемента
let element6Clicked = false;
let element7Clicked = false;

// Для 6-го елемента (getElementById)
const element6 = document.getElementById('element6');
element6.addEventListener('click', function() {
    if (!element6Clicked) {
        this.style.backgroundColor = '#33f633ff';
        this.style.color = '#000000';
        element6Clicked = true;
    } else {
        this.style.backgroundColor = '#d11919ff';
        this.style.color = '#ffffffff';
        element6Clicked = false;
    }
});

// Для 7-го елемента (querySelector)
const element7 = document.querySelector('.element7');
element7.addEventListener('click', function() {
    if (!element7Clicked) {
        this.style.backgroundColor = '#FFD700';
        this.style.color = '#000000ff';
        element7Clicked = true;
    } else {
        this.style.backgroundColor = '#4b72e9ff';
        this.style.color = '#ffffffff';
        element7Clicked = false;
    }
});

// Завдання 2

// Оригінальні розміри, лічильник зображень
let originalWidth = 600;
let originalHeight = 400; 
let imageCounter = 0; 

// Функція для отримання останнього зображення
function getActiveImage() {
    const allImages = document.querySelectorAll('img[data-city-image]');
    // Шукаємо останнє видиме зображення
    for (let i = allImages.length - 1; i >= 0; i--) {
        if (allImages[i].style.display !== 'none') {
            return allImages[i];
        }
    }
    return null;
}

// Додати зображення
function addImage() {
    const activeImg = getActiveImage();
    
    // Якщо є видалене зображення, відновлюємо його
    if (activeImg && activeImg.style.display === 'none') {
        activeImg.style.display = 'block';
        return;
    }
    
    // Створюємо нове зображення
    imageCounter++;
    
    const newImg = document.createElement('img');
    newImg.src = 'https://lviv.travel/image/news/4c/d6/4cd6916ff31ce68b7a0043c4df272f90374f56e6_1585229828.png?crop=1097%2C734%2C212%2C1';
    newImg.alt = 'Місто Львів';
    newImg.width = originalWidth;
    newImg.height = originalHeight;
    newImg.setAttribute('data-city-image', imageCounter);
    newImg.setAttribute('data-scale', '1');

    const controls = document.querySelector('.image-controls');
    controls.parentNode.insertBefore(newImg, controls);
}

// Збільшити зображення
function enlargeImage() {
    const img = getActiveImage();
    if (img) {
        let currentScale = parseFloat(img.getAttribute('data-scale')) || 1;
        currentScale *= 1.2;
        img.setAttribute('data-scale', currentScale);
        img.width = originalWidth * currentScale;
        img.height = originalHeight * currentScale;
    }
}

// Зменшити зображення
function reduceImage() {
    const img = getActiveImage();
    if (img) {
        let currentScale = parseFloat(img.getAttribute('data-scale')) || 1;
        currentScale /= 1.2;
        img.setAttribute('data-scale', currentScale);
        img.width = originalWidth * currentScale;
        img.height = originalHeight * currentScale;
    }
}

// Видалити зображення
function removeImage() {
    const img = getActiveImage();
    if (img) {
        img.style.display = 'none';
    }
}