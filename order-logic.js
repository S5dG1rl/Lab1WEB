let selectedDishes = {
  soup: null,
  main: null,
  drink: null
};

const categoryLabels = {
  soup: "Суп",
  main: "Главное блюдо",
  drink: "Напиток"
};

function selectDish(keyword) {
  const dish = dishes.find(d => d.keyword === keyword);
  if (!dish) return;

  // Обновляем выбор
  selectedDishes[dish.category] = dish;

  // Снимаем выделение со всех карточек этой категории
  document.querySelectorAll(`.dish-card[data-dish^="${dish.category}"]`).forEach(card => {
    card.style.border = '';
  });
  // Выделяем текущую
  const card = document.querySelector(`.dish-card[data-dish="${keyword}"]`);
  if (card) card.style.border = '2px solid tomato';

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

  // Обновляем скрытые поля формы для отправки
  document.getElementById('selected-soup').value = selectedDishes.soup ? selectedDishes.soup.keyword : '';
  document.getElementById('selected-main').value = selectedDishes.main ? selectedDishes.main.keyword : '';
  document.getElementById('selected-drink').value = selectedDishes.drink ? selectedDishes.drink.keyword : '';
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  // Добавим скрытые поля в форму для отправки keyword
  const form = document.querySelector('form[action="https://httpbin.org/post"]');
  if (form) {
    const hiddenFields = `
      <input type="hidden" id="selected-soup" name="soup">
      <input type="hidden" id="selected-main" name="main-dish">
      <input type="hidden" id="selected-drink" name="drink">
    `;
    form.insertAdjacentHTML('beforeend', hiddenFields);
  }
});
