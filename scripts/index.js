
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector('.places__list')

initialCards.forEach((item, error) => {
    try {
        const card = createCard(item, deleteCard);
        addCard(card);
    }
    catch(error) {
        console.log(error);
    }
})

function createCard(item, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
}

function addCard(card) {
    cardsContainer.prepend(card);
}

function deleteCard(cardElement) {
    cardElement.remove();
}