export function createCardElement(item, currentProfileId, remove, like, show) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    renderCardElement(cardElement, item, currentProfileId);

    const deleteButtonElement = cardElement.querySelector('.card__delete-button');
    const toggleLikeElement = cardElement.querySelector('.card__like-button');

    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;
    cardElement.setAttribute('data-card_id', item._id);

    if (currentProfileId === item.owner._id) {
        deleteButtonElement.addEventListener('click', () => remove(cardElement));
        deleteButtonElement.setAttribute(
            'aria-label',
            `Удалить карточку "${item.name}"`
        );
    } else {
        deleteButtonElement.remove();
    }
    toggleLikeElement.addEventListener('click', () => {
        like(cardElement, currentProfileId);
    });
    cardElement.querySelector('.card__image').addEventListener('click', () => show(item));

    return cardElement;
}

export function renderCardElement(cardElement, card, currentProfileId) {
    renderLike(cardElement, card, currentProfileId);
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
}

export function renderLike(cardElement, card, currentProfileId) {
    const isLikedClassName = 'card__like-button_is-active';
    const hasOwnedLike = card.likes.some((like) => like._id === currentProfileId);

    cardElement.setAttribute('data-is_liked', JSON.stringify(hasOwnedLike));
    cardElement.querySelector('.card__like-button').classList.toggle(isLikedClassName, hasOwnedLike);
    cardElement.querySelector('.card__like-button').setAttribute('aria-label', `Поставить like для: ${card.name}`);
    cardElement.querySelector('.card__likes-count').textContent = card.likes.length;
}

export function getCardId(cardElement) {
    return cardElement.getAttribute('data-card_id');
}

export function getIsLiked(cardElement) {
    return JSON.parse(cardElement.getAttribute('data-is_liked'));
}

export function removeCardElement(cardElement) {
    cardElement.remove();
}