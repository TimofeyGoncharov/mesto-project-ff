import {
    createCardElement,
    renderCardElement,
    getCardId,
    getIsLiked,
    removeCardElement
} from './components/card';
import {
    addLike,
    checkIfImage,
    deleteCard,
    getInitialCards,
    getProfileInfo,
    patchProfileInfo,
    postCard,
    removeLike,
    updateAvatar,
} from './components/api';
import { closeModal, openModal } from './components/modal';
import {
    clearValidation,
    enableValidation,
    showInputError,
} from './components/validation';
import './pages/index.css';

let profile = {
    value: undefined,
    set(value) {
        this.value = value;
        renderProfileInfo(value);
    },
};

const cardsContainer  = document.querySelector('.places__list');
const editProfileNameInputElement = document.querySelector('.popup_type_edit .popup__input_type_name');
const editProfileDescriptionInputElement = document.querySelector('.popup_type_edit .popup__input_type_description');
const profileTitleElement = document.querySelector('.profile__title');
const profileInfoElement = document.querySelector('.profile__info');
const profileImageElement = document.querySelector('.profile__image');
const profileDescriptionElement = document.querySelector('.profile__description');
const popupEditElement = document.querySelector('.popup_type_edit');
const popupNewCardElement = document.querySelector('.popup_type_new-card');
const editProfileFormElement = document.querySelector('.popup__form[name="edit-profile"]');
const newPlaceFormElement = document.querySelector('.popup__form[name="new-place"]');
const editAvatarFormElement = document.querySelector('.popup_type_avatar-edit .popup__form');
const deleteConfirmFormElement = document.querySelector('.popup__form[name="delete-confirm"]');
const popupDeleteConfirmElement = document.querySelector('.popup.popup_type_delete-confirm');
const editAvatarUrlInputElement = document.querySelector('.popup__input_type_avatar-url');
const popupEditAvatarElement = document.querySelector('.popup.popup_type_avatar-edit');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};

function handleError(reason) {
    console.error(reason);
}

function getProfileId(infoElement) {
    return infoElement.getAttribute('data-profile_id');
}

function deleteCardQuery(cardElement) {
    const cardId = getCardId(cardElement);
    popupDeleteConfirmElement.setAttribute('data-card_id', cardId);
    openModal(popupDeleteConfirmElement);
}

async function toggleLikeQuery(cardElement, profileId) {
    const cardId = getCardId(cardElement);
    try {
        const card = getIsLiked(cardElement)
            ? await removeLike(cardId)
            : await addLike(cardId);
        renderCardElement(cardElement, card, profileId);
    } catch (err) {
        handleError(err);
    }
}

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
    clearValidation(popupEditElement.querySelector(validationConfig.formSelector), validationConfig);
}

function handleEditAvatarButtonClick() {
    editAvatarUrlInputElement.value = profile.value.avatar;
    openModal(popupEditAvatarElement);
    clearValidation(popupEditAvatarElement.querySelector(validationConfig.formSelector), validationConfig);
}

function handleAddButtonClick() {
    newPlaceFormElement.addEventListener('submit', handleNewPlaceFormSubmit);

    newPlaceFormElement.reset();
    openModal(popupNewCardElement);
    clearValidation(popupEditElement.querySelector(validationConfig.formSelector), validationConfig);
}

function beginFormSubmit(submitEvent, formElement, asyncAction, next) {
    submitEvent.preventDefault();

    const submitElement = formElement.querySelector('button[type="submit"]');
    const prevTextContent = submitElement.textContent;
    submitElement.textContent = 'Сохранение...';

    asyncAction()
        .then(next)
        .catch(handleError)
        .finally(() => {
            submitElement.textContent = prevTextContent;
        });
}

function handleProfileFormSubmit(event) {
    const name = editProfileNameInputElement.value;
    const description = editProfileDescriptionInputElement.value;

    const submit = () => patchProfileInfo({name: name, about: description});

    const next = ({name, about}) => {
        profileTitleElement.textContent = name;
        profileDescriptionElement.textContent = about;
        closeModal(popupEditElement);
        editProfileFormElement.reset();
    };

    beginFormSubmit(event, editProfileFormElement, submit, next);
}

function handleAvatarFormSubmit(event) {
    const enteredUrl = editAvatarUrlInputElement.value;

    const submitAction = () =>
        checkIfImage(enteredUrl).then((isImage) => {
            if (!isImage) {
                showInputError({
                    formElement: editAvatarFormElement,
                    inputElement: editAvatarUrlInputElement,
                    errorMessage: 'Это не изображение',
                    ...validationConfig,
                });
                return Promise.resolve(undefined);
            }

            return updateAvatar(enteredUrl);
        });
    const next = (newAvatar) => {
        if (newAvatar !== undefined) {
            profile.set({ ...profile.value, avatar: newAvatar.avatar });
            closeModal(popupEditAvatarElement);
            editAvatarFormElement.reset();
        }
    };

    beginFormSubmit(event, editAvatarFormElement, submitAction, next);
}

function handleNewPlaceFormSubmit(event) {
    const newPlacePlaceNameInputElement = document.querySelector('.popup_type_new-card .popup__input_type_card-name');
    const newPlaceLinkInputElement = document.querySelector('.popup_type_new-card .popup__input_type_url');

    const submitAction = () =>
        postCard({
            name: newPlacePlaceNameInputElement.value,
            link: newPlaceLinkInputElement.value,
        });
    const next = (card) => {
        const cardElement = createCardElement(
            card,
            getProfileId(profileInfoElement),
            deleteCardQuery,
            toggleLikeQuery,
            openImage
        );

        closeModal(popupNewCardElement);
        newPlaceFormElement.reset();

        cardsContainer.prepend(cardElement);
    };

    beginFormSubmit(event, newPlaceFormElement, submitAction, next);
}

function handleDeleteConfirmFormSubmit(event) {
    const cardId = popupDeleteConfirmElement.getAttribute('data-card_id');
    const cardElement = document.querySelector(`li[data-card_id="${cardId}"]`);

    const action = () => deleteCard(cardId);
    const next = () => {
        removeCardElement(cardElement);
        closeModal(popupDeleteConfirmElement);
        popupDeleteConfirmElement.setAttribute('data-card_id', '');
    };

    beginFormSubmit(event, deleteConfirmFormElement, action, next);
}

function renderProfileInfo({name, about, avatar, _id}) {
    profileImageElement.style.backgroundImage = `url('${avatar}')`;
    profileImageElement.addEventListener('click', handleEditAvatarButtonClick);
    profileTitleElement.textContent = name;
    profileDescriptionElement.textContent = about;
    profileInfoElement.setAttribute('data-profile_id', _id);
}

function renderInitialCards(initialCards) {
    initialCards.forEach((cardData) => {
        const cardElement = createCardElement(
            cardData,
            getProfileId(profileInfoElement),
            deleteCardQuery,
            toggleLikeQuery,
            openImage
        );
        cardsContainer.appendChild(cardElement);
    });
}

function getInitialData() {
    Promise.all([getProfileInfo(), getInitialCards()])
        .then(([profileInfo, initialCards]) => {
            profile.set(profileInfo);
            renderInitialCards(initialCards);
        })
        .catch(handleError);
}

editProfileFormElement.addEventListener('submit', handleProfileFormSubmit);

editAvatarFormElement.addEventListener('submit', handleAvatarFormSubmit);

document.querySelector('.profile__add-button').addEventListener('click', handleAddButtonClick);

document.querySelector('.profile__edit-button').addEventListener('click', handleEditProfileButtonClick);

newPlaceFormElement.addEventListener('submit', handleNewPlaceFormSubmit);

deleteConfirmFormElement.addEventListener('submit', handleDeleteConfirmFormSubmit);

document.querySelectorAll('.popup').forEach((item) => {
    item.classList.add('popup_is-animated');
});

getInitialData();

enableValidation(validationConfig);