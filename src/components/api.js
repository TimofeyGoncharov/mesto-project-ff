const config = {
    baseUrl: `https://nomoreparties.co/v1/wff-cohort-6`,
    headers: {
        authorization: 'f7b85faf-647d-49f4-9714-9c79aa77ce34',
        'Content-Type': 'application/json',
    },
    url(path) {
        return `${this.baseUrl}/${path}`;
    },
};

async function getJson(response, nonOkReason) {
    const json = await response.json();

    if (response.ok) {
        return Promise.resolve(json);
    } else {
        const comment =
            response.status === 400
                ? 'Bad Request'
                : response.status === 401
                ? 'Unauthorized'
                : response.status === 403
                ? 'Forbidden'
                : response.status === 404
                ? 'Not Found'
                : 'неизвестная ошибка';

        const message = (json?.message && `${json.message}`) || comment;
        return Promise.reject(`${nonOkReason}. ${message}`);
    }
}

export async function getInitialCards() {
    const result = await fetch(config.url('cards'), { headers: config.headers });
    return getJson(result, 'Не удалось получить список карточек');
}

export async function getProfileInfo() {
    const result = await fetch(config.url('users/me'), {
        headers: config.headers,
    });
    return getJson(result, 'Не удалось получить данные пользователя');
}

export async function patchProfileInfo(profileInfo) {
    const result = await fetch(config.url('users/me'), {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(profileInfo),
    });
    return getJson(result, 'Не удалось отправить профиль для изменения');
}

export async function postCard(card) {
    const result = await fetch(config.url('cards'), {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(card),
    });
    return getJson(result, 'Не удалось отправить новую карточку');
}

export async function deleteCard(cardId) {
    const result = await fetch(config.url(`cards/${cardId}`), {
        method: 'DELETE',
        headers: config.headers,
    });
    return getJson(result, 'Не удалось выполнить запрос на удаление карточки');
}

async function setLike(cardId, likeValue) {
    const result = await fetch(config.url(`cards/likes/${cardId}`), {
        method: likeValue ? 'PUT' : 'DELETE',
        headers: config.headers,
    });
    return getJson(
        result,
        `Не удалось отправить запрос на ${
            likeValue ? 'установку' : 'снятие'
        } лайка`
    );
}

export async function addLike(cardId) {
    return setLike(cardId, true);
}

export async function removeLike(cardId) {
    return setLike(cardId, false);
}

export async function checkIfImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            resolve(true);
        };
        img.onerror = () => {
            resolve(false);
        };
        img.src = url;
    });
}

export async function updateAvatar(link) {
    const result = await fetch(config.url('users/me/avatar'), {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({ avatar: link }),
    });
    return getJson(result, 'Не удалось отправить запрос на изменение аватара');
}