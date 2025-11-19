// Сортируем блюда по категории и по имени
const categories = {
  soup: { title: "Супы", id: "soups" },
  main: { title: "Главные блюда", id: "mains" },
  drink: { title: "Напитки", id: "drinks" }
};

function renderDishes() {
  // Группируем блюда по категориям
  const grouped = {};
  for (const category in categories) {
    grouped[category] = dishes
      .filter(d => d.category === category)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  // Очищаем контейнеры
  for (const category in categories) {
    const section = document.getElementById(categories[category].id);
    const grid = section.querySelector('.dishes-grid');
    grid.innerHTML = ''; // удаляем старые карточки (если есть)

    // Добавляем карточки
    grouped[category].forEach(dish => {
      const card = document.createElement('div');
      card.className = 'dish-card';
      card.dataset.dish = dish.keyword;
      card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <p class="price">${dish.price} ₽</p>
        <p class="name">${dish.name}</p>
        <p class="weight">${dish.count}</p>
        <button class="add-button">Добавить</button>
      `;
      grid.appendChild(card);
    });
  }

  // Навешиваем обработчики
  document.querySelectorAll('.add-button').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.dish-card');
      const keyword = card.dataset.dish;
      selectDish(keyword);
    });
  });
}

// Запуск при загрузке
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderDishes);
} else {
  renderDishes();
}
