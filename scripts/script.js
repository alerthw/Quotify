// Объявляем переменные для цитат
let quotes;

// Функция для загрузки цитат из файла JSON
function loadQuotes() {
    fetch('scripts/json/quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            getRandomQuote();
        })
        .catch(error => console.error('Error loading quotes:', error));
}

// Функция для получения случайной цитаты и обновления содержимого страницы
function getRandomQuote() {
    if (!quotes) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex].quoteText;
    const quoteAuthor = quotes[randomIndex].quoteAuthor;

    // Обновляем содержимое страницы
    document.getElementById('quote').innerText = quoteText;
    document.getElementById('author').innerHTML = `<a href="#" onclick="window.location.reload(true);"><i class="fa-solid fa-rotate-right" style="color: #ffffff;"></i></a> © ${quoteAuthor != "" ? quoteAuthor : "alert blyat"}`;
}

// Вызываем функцию загрузки цитат при загрузке страницы
document.addEventListener('DOMContentLoaded', loadQuotes);
