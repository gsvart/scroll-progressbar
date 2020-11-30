// Когда загрузится ВЕСЬ контент страницы
document.addEventListener('DOMContentLoaded', function() {
    // Берём внутренний элемент статусбара
    const progressInner = document.querySelector('.progress__inner');

    // Вешаем на страницу слушатель события скролла
    window.addEventListener('scroll', function() {
        // Берём элемент документа
        let page = document.documentElement;

        // Берём расстояние от верха документа до верха видимой области
        let st = page.scrollTop || document.body.scrollTop;

        // Берём высоту всего документа
        let sh = page.scrollHeight || document.body.scrollHeight;

        // Считаем количество процентов 
        let percent = st / (sh - page.clientHeight) * 100;

        // Округляем полученное значение
        let roundedPercent = Math.round(percent);

        // Изменяем ширину статусбара с помощью НЕ округлённого значения*
        progressInner.style.width = percent + '%';

        // Изменяем статусбаре данные о процентах прокрутки
        progressInner.innerText = roundedPercent + '%';

        // *Не округлённое значение используется для того, чтобы наш статусбар увеличивался
        // без рывков. Т.к. мы даём ему более точные значения получается более плавное 
        // увеличение его ширины. Посмотрите разницу заменив "percent" на "roundedPercent"
    });
});