const classPopupOpen = 'popup_is-opened';

export function openModal(element) {
    element.classList.add(classPopupOpen);
    element.tabIndex = element.tabIndex === -1 ? 0 : element.tabIndex;

    document.addEventListener('keydown', keydownHandler);
    element.addEventListener('click', clickHandler);
}

export function closeModal(element) {
    removeClass(element, classPopupOpen)
    element.removeEventListener('click', clickHandler);
    document.removeEventListener('keydown', keydownHandler);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function keydownHandler(event) {
    if (event.key === 'Escape') {
        const popupOpen = document.querySelector(`.${classPopupOpen}`);
        closeModal(popupOpen);
    }
}

function clickHandler(event) {
    if (event.target.classList.contains('popup__content')) {
        event.stopPropagation();
    } else if (event.target.classList.contains('popup_is-opened') || event.target.classList.contains('popup__close')) {
        const popupOpen = document.querySelector(`.${classPopupOpen}`);
        closeModal(popupOpen);
    }
}