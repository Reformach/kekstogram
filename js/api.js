const API_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(`${API_URL}/data`);
    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз.');
    }
    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };