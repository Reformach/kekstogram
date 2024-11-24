// import {getRandomPositiveInteger} from './util.js';
// const listComments = ['Всё отлично!','В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
//   , 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
//   , 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
//   'Всё отлично!','В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'
//   , 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
//   , 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
//   , 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
//   'Всё отлично!','В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'
//   , 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
//   , 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
//   , 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
//   'Всё отлично!','В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'
//   , 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
//   , 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
//   , 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
//   'Всё отлично!'];
// const listNames = ['Артем','Владислав','Алексей','Эдуард','Виктория','Анастасия','Евангелина','Илья','Ангелина','Михаил'];
// function generateObjectComment(arrayComments, arrayNames, indexComment){
//   return{
//     id: getRandomPositiveInteger(1,200),
//     avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
//     message: arrayComments[indexComment],
//     name: arrayNames[getRandomPositiveInteger(0,9)],
//   };
// }
// function generateObjectPost(indexIdAndUrl){
//   return{
//     id: indexIdAndUrl,
//     url: GetPictures(indexIdAndUrl),
//     description: 'Эта фотография отображает моё настроение на сегодня)',
//     likes: getRandomPositiveInteger(15,200),
//     comments: commentsGenerate(listComments, listNames, 0),
//   };
// }
// function commentsGenerate(arrayComments, arrayNames, minCount) {
//   const resultComments = [];
//   const countComments = getRandomPositiveInteger(minCount,arrayComments.length);
//   for(let i = 0; i < countComments; i++) {
//     const indexComment = getRandomPositiveInteger(minCount,arrayComments.length - 1);
//     resultComments[i] = generateObjectComment(arrayComments, arrayNames, indexComment);
//   }
//   return resultComments;
// }
// function createListPosts(countPosts) {
//   const listPosts = [];
//   for(let i = 0; i < countPosts; i++) {
//     listPosts[i] = generateObjectPost(i + 1);
//   }
//   return listPosts;
// }
// function GetPictures(num){
//   return `photos/${num}.jpg`;
// }
// export {createListPosts};
// //Работа с изображениями

