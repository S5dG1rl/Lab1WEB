const categoryMap = {
  soup: { id: "soups", title: "Супы" },
  main: { id: "mains", title: "Главные блюда" },
  starter: { id: "starters", title: "Салаты и стартеры" },
  drink: { id: "drinks", title: "Напитки" },
  dessert: { id: "desserts", title: "Десерты" }
};

// Хранение активных фильтров по категориям
const activeFilters = {
  soup: null,
  main: null,
  starter: null,
  drink: null,
  dessert: null
};

function renderDishes() {
  const categories = Object.keys(categoryMap);
  categories.forEach(cat => {
    const section = document.getElementById(categoryMap[cat].id);
    const grid = section.querySelector('.dishes-grid');
    const kindFilter = activeFilters[cat];

    let filtered = dishes.filter(d => d.category === cat);

    // Применяем фильтр, если выбран
    if (kindFilter) {
      filtered = filtered.filter(d => d.kind === kindFilter);
    }

    // Сортируем по имени
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    // Отрисовка
    grid.innerHTML = '';
    filtered.forEach(dish => {
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

    // Обновляем обработчики
    grid.querySelectorAll('.add-button').forEach(btn => {
      btn.removeEventListener('click', handleAddClick);
      btn.addEventListener('click', handleAddClick);
    });
  });
}

function handleAddClick() {
  const card = this.closest('.dish-card');
  const keyword = card.dataset.dish;
  // Имитация вызова из order-logic.js (реализуется в нём)
  if (typeof selectDish === 'function') {
    selectDish(keyword);
  }
}

// Обработка фильтров
document.querySelectorAll('.filters button').forEach(btn => {
  const section = btn.closest('section');
  const cat = Object.keys(categoryMap).find(k => categoryMap[k].id === section.id);
  btn.addEventListener('click', () => {
    const kind = btn.dataset.kind;
    // Переключаем активность
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      activeFilters[cat] = null;
    } else {
      // Снимаем активность с других кнопок в группе
      section.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters[cat] = kind;
    }
    renderDishes();
  });
});

// Запуск
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderDishes();
  });
} else {
  renderDishes();
}
