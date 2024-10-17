import {createListPosts} from './data';
import{renderPictures} from './picture';
import {} from './form';
import {resetScale} from './scale';
import {} from './effect';
// eslint-disable-next-line no-console
renderPictures(createListPosts(25));
resetScale();
