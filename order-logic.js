let selectedDishes = {
  soup: null,
  main: null,
  starter: null,
  drink: null,
  dessert: null
};

const categoryLabels = {
  soup: "Суп",
  main: "Главное блюдо",
  starter: "Стартер",
  drink: "Напиток",
  dessert: "Десерт"
};

function selectDish(keyword) {
  const dish = dishes.find(d => d.keyword === keyword);
  if (!dish) return;

  selectedDishes[dish.category] = dish;

  // Выделяем карточку (ищем по всем секциям)
  document.querySelectorAll(`.dish-card`).forEach(card => {
    if (card.dataset.dish === keyword) {
      card.style.border = '2px solid tomato';
    } else if (card.dataset.dish.startsWith(dish.category)) {
      // Снимаем выделение с других в той же категории
      // (опционально — можно оставить, если выбор один на категорию)
    }
  });

  updateOrderPreview();
}

function updateOrderPreview() {
  const preview = document.getElementById('order-preview');
  if (!preview) return;

  const hasSelection = Object.values(selectedDishes).some(d => d !== null);
  if (!hasSelection) {
    preview.innerHTML = '<p>Ничего не выбрано</p>';
    document.getElementById('order-total').style.display = 'none';
    return;
  }

  let html = '';
  let total = 0;

  for (const cat in selectedDishes) {
    const dish = selectedDishes[cat];
    const label = categoryLabels[cat];
    if (dish) {
      html += `<p><strong>${label}:</strong> ${dish.name} — ${dish.price} ₽</p>`;
      total += dish.price;
    } else {
      html += `<p><strong>${label}:</strong> не выбран</p>`;
    }
  }

  preview.innerHTML = html;
  const totalEl = document.getElementById('order-total');
  totalEl.querySelector('span').textContent = total;
  totalEl.style.display = 'block';

  // Обновляем скрытые поля
  document.getElementById('selected-soup').value = selectedDishes.soup?.keyword || '';
  document.getElementById('selected-main').value = selectedDishes.main?.keyword || '';
  document.getElementById('selected-starter').value = selectedDishes.starter?.keyword || '';
  document.getElementById('selected-drink').value = selectedDishes.drink?.keyword || '';
  document.getElementById('selected-dessert').value = selectedDishes.dessert?.keyword || '';
}

// Инициализация — ничего не делаем, всё работает через selectDish
