document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('processBtn').addEventListener('click', function () {
        // Собираем все языки программирования
        const languageItems = document.querySelectorAll('#historyList ol li');
        const languages = Array.from(languageItems).map(item => item.textContent);

        // Создаем список языков
        const langsList = document.createElement('ol');
        languages.forEach(lang => {
            const li = document.createElement('li');
            li.textContent = lang;
            langsList.appendChild(li);
        });

        // Находим заголовок "Топ браузеров"
        const browsersHeader = document.querySelector('h2:last-of-type');

        // Вставляем список языков перед заголовком
        document.body.insertBefore(langsList, browsersHeader);

        // Показываем список браузеров
        document.getElementById('browsersList').style.display = 'block';

        this.disabled = true;
        this.textContent = 'Готово!';
    });
});