import {
    createCardElement,
    deleteCard,
    toggleLike,
} from './components/card';
import { initialCards } from './components/cards';
import { closeModal, openModal } from './components/modal';

import './pages/index.css';

const cardsContainer  = document.querySelector('.places__list');
const editProfileNameInputElement = document.querySelector('.popup_type_edit .popup__input_type_name');
const editProfileDescriptionInputElement = document.querySelector('.popup_type_edit .popup__input_type_description');
const profileTitleElement = document.querySelector('.profile__title');
const profileDescriptionElement = document.querySelector('.profile__description');
const popupEditElement = document.querySelector('.popup_type_edit');
const popupNewCardElement = document.querySelector('.popup_type_new-card');
const editProfileFormElement = document.querySelector('.popup__form[name="edit-profile"]');


function openImage(cardData) {
    const popupShowCardElement = document.querySelector('.popup.popup_type_image');

    popupShowCardElement.querySelector('.popup__image').src = cardData.link;
    popupShowCardElement.querySelector('.popup__caption').textContent = cardData.name;
    openModal(popupShowCardElement);
}

function handleEditProfileButtonClick() {
    editProfileNameInputElement.value = profileTitleElement.textContent;
    editProfileDescriptionInputElement.value = profileDescriptionElement.textContent;
    openModal(popupEditElement);
}

function handleAddButtonClick() {
    const newPlaceFormElement = document.querySelector('.popup__form[name="new-place"]');

    newPlaceFormElement.addEventListener('submit', handleNewPlaceFormSubmit);

    newPlaceFormElement.reset();
    openModal(popupNewCardElement);
}



function handleProfileFormSubmit(event) {
    event.preventDefault();

    const name = editProfileNameInputElement.value;
    const description = editProfileDescriptionInputElement.value;

    profileTitleElement.textContent = name;
    profileDescriptionElement.textContent = description;

    closeModal(popupEditElement);

    editProfileFormElement.reset();
}

function handleNewPlaceFormSubmit(event) {
    const newPlacePlaceNameInputElement = document.querySelector('.popup_type_new-card .popup__input_type_card-name');
    const newPlaceLinkInputElement = document.querySelector('.popup_type_new-card .popup__input_type_url');

    event.preventDefault();

    const cardElement = createCardElement(
        {
            name: newPlacePlaceNameInputElement.value,
            link: newPlaceLinkInputElement.value,
        },
        deleteCard, toggleLike, openImage);

    closeModal(popupNewCardElement);
    newPlacePlaceNameInputElement.value = '';
    newPlaceLinkInputElement.value = '';

    cardsContainer.prepend(cardElement);
}

editProfileFormElement.addEventListener('submit', handleProfileFormSubmit);

document.querySelector('.profile__add-button').addEventListener('click', handleAddButtonClick);

document.querySelector('.profile__edit-button').addEventListener('click', handleEditProfileButtonClick);

document.querySelectorAll('.popup').forEach((item) => {
    item.classList.add('popup_is-animated');
});

initialCards.forEach((item) => {
    const cardElement = createCardElement(item, deleteCard, toggleLike, openImage);
    cardsContainer.appendChild(cardElement);
});