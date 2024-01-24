export function openModal(element) {
    const firstInputElement = element.querySelector('input');
    const closeButtonElement = element.querySelector('.popup__close');

    element.classList.add('popup_is-opened');
    element.tabIndex = element.tabIndex === -1 ? 0 : element.tabIndex;
    (firstInputElement || closeButtonElement || element).focus();

    element.addEventListener('keydown', keydownHandler);
    element.addEventListener('click', clickHandler);
}

export function closeModal(element) {
    element.classList.remove('popup_is-opened');

    element.removeEventListener('keydown', keydownHandler);
    element.removeEventListener('click', clickHandler);
}

function keydownHandler(event) {
    if (event.key === 'Escape') {
        closeModal(this);
    }
}

function clickHandler(event) {
    if (event.target.classList.contains('popup__content')) {
        event.stopPropagation();
    } else if (event.target === this || event.target.classList.contains('popup__close')) {
        closeModal(this);
    }
}

document.querySelectorAll('.popup__close').forEach((closeButtonElement) => {
    closeButtonElement.setAttribute('aria-label', 'Закрыть форму');
});