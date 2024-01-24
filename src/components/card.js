export function createCardElement(item, remove, like, show) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const deleteButtonElement = cardElement.querySelector('.card__delete-button');
    const toggleLikeElement = cardElement.querySelector('.card__like-button');

    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__image').alt = item.name;
    cardElement.querySelector('.card__title').textContent = item.name;

    deleteButtonElement.addEventListener('click', () => remove(cardElement));
    deleteButtonElement.setAttribute(
        'aria-label',
        `Удалить "${item.name}"`
    );
    toggleLikeElement.addEventListener('click', () => {
        like(toggleLikeElement);
    });
    toggleLikeElement.setAttribute('aria-label', `Лайк на ${item.name}`);
    cardElement.querySelector('.card__image').addEventListener('click', () => show(item));

    return cardElement;
}

export function toggleLike(toggleLikeElement) {
    toggleLikeElement.classList.toggle('card__like-button_is-active');
}

export function deleteCard(cardElement) {
    cardElement.remove();
}
