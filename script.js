const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const grayscaleButton = document.getElementById('grayscale');
const brightnessButton = document.getElementById('brightness');
const resetButton = document.getElementById('reset');

let originalImage = null;

// Загрузка изображения
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            originalImage = e.target.result; // Сохраняем оригинальное изображение
            preview.style.filter = 'none'; // Сбрасываем фильтры при загрузке нового изображения
        };
        reader.readAsDataURL(file);
    }
});

// Применение черно-белого фильтра
grayscaleButton.addEventListener('click', () => {
    applyFilter('grayscale(100%)');
});

// Применение фильтра яркости
brightnessButton.addEventListener('click', () => {
    applyFilter('brightness(150%)');
});

// Сброс фильтров
resetButton.addEventListener('click', () => {
    if (originalImage) {
        preview.src = originalImage; // Возвращаем оригинальное изображение
        preview.style.filter = 'none'; // Сбрасываем все фильтры
    }
});

// Функция для применения фильтра
function applyFilter(filter) {
    preview.style.filter = filter;
}