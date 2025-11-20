document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const soup = document.getElementById('selected-soup').value;
    const main = document.getElementById('selected-main').value;
    const starter = document.getElementById('selected-starter').value;
    const drink = document.getElementById('selected-drink').value;
    // dessert не обязателен

    const hasSoup = !!soup;
    const hasMain = !!main;
    const hasStarter = !!starter;
    const hasDrink = !!drink;

    let message = '';

    if (!hasSoup && !hasMain && !hasStarter && !hasDrink) {
        message = 'Ничего не выбрано. Выберите блюда для заказа';
    } else if (hasSoup && hasMain && hasStarter && hasDrink) {
        // Ланч 1
        this.submit();
        return;
    } else if (hasSoup && hasMain && hasDrink && !hasStarter) {
        // Ланч 2
        this.submit();
        return;
    } else if (hasSoup && hasStarter && hasDrink && !hasMain) {
        // Ланч 3
        this.submit();
        return;
    } else if (hasMain && hasStarter && hasDrink && !hasSoup) {
        // Ланч 4
        this.submit();
        return;
    } else if (hasMain && hasDrink && !hasSoup && !hasStarter) {
        // Ланч 5
        this.submit();
        return;
    } else if (!hasDrink && (hasSoup || hasMain || hasStarter)) {
        message = 'Выберите напиток';
    } else if (hasSoup && !hasMain && !hasStarter) {
        message = 'Выберите главное блюдо/салат/стартер';
    } else if (hasStarter && !hasSoup && !hasMain) {
        message = 'Выберите суп или главное блюдо';
    } else if (!hasMain && !hasSoup && !hasStarter && hasDrink) {
        message = 'Выберите главное блюдо';
    } else {
        message = 'Состав заказа не соответствует ни одному ланчу';
    }

    showNotification(message);
});

function showNotification(text) {
    const container = document.getElementById('notification-container');
    container.innerHTML = `
        <div class="notification">
            <p>${text}</p>
            <button id="notification-ok">Окей</button>
        </div>
    `;

    document.getElementById('notification-ok').addEventListener('click', () => {
        container.innerHTML = '';
    });
}
