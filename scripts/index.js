
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

initialCards.forEach((item, error) => {
    try {
        createCard(item.name, item.link);
    }
    catch(error) {
        console.log(error);
    }
})

function createCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardOnline = document.querySelector('.places__list')

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__title').textContent = name;

    cardOnline.append(cardElement);
}

function deleteCard(event) {
    const cardItem = document.querySelector(`.${event.currentTarget.className}`).closest('.places__item');
    cardItem.remove();
}