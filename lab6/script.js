document.getElementById('loadBtn').addEventListener('click', getUserData);

function getUserData() {
  const message = document.getElementById('message');
  message.textContent = 'Завантаження даних...';
  message.className = 'message';

  fetch('https://randomuser.me/api/?results=5')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP помилка: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayUsers(data.results);
      message.textContent = 'Успішно!';
      message.className = 'message success';
    })
    .catch(error => {
      message.textContent = 'Помилка при отриманні даних!';
      message.className = 'message error';
      console.error('Помилка:', error);
    });
}

function displayUsers(users) {
  const container = document.getElementById('userContainer');
  container.innerHTML = '';

  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');

    card.innerHTML = `
      <img src="${user.picture.large}" alt="Фото користувача">
      <div class="user-info">
        <p><strong>Телефон:</strong> ${user.cell}</p>
        <p><strong>Країна:</strong> ${user.location.country}</p>
        <p><strong>E-mail:</strong> ${user.email}</p>
        <p><strong>Координати:</strong> 
          шир. ${user.location.coordinates.latitude}, 
          довг. ${user.location.coordinates.longitude}
        </p>
      </div>
    `;
    container.appendChild(card);
  });
}
