import{renderPictures} from './picture';
import {} from './form';
import {} from './effect';
import { getData, sendData } from './api.js';
import { initFormValidation} from './form.js';
import { turnFilterOn, filterPictures } from './filter.js';
import {} from './scale'

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderPictures(filterPictures());
};


const onLoadError = (error) => {
    errorElement = document.createElement('div');
    errorElement.style.position = 'fixed';
    errorElement.style.top = '0';
    errorElement.style.left = '0';
    errorElement.style.width = '100%';
    errorElement.style.backgroundColor = 'red';
    errorElement.style.color = 'white';
    errorElement.style.textAlign = 'center';
    errorElement.style.padding = '10px';
    errorElement.textContent = `Ошибка загрузки данных: ${error}`;
    document.body.appendChild(errorElement);
};

getData(onGetDataSuccess, onLoadError);

const onSendDataSuccess = () => {
    alert('Форма успешно отправлена!');
};

const onSendDataError = (error) => {
    alert(`Ошибка отправки данных: ${error}`);
};

initFormValidation((formData) => {
    sendData(onSendDataSuccess, onSendDataError, formData);
});