import * as urls from '../constants/urls';

export const getArticles = () => {
    fetch(
        "http://localhost:8000/articles",
        {
            method: 'GET',
        }
    )
}

// export const createArticle = (data) => {
//     fetch(
//         urls.ARTICLE_URL,
//         {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: data.title,
//                 body: data.body,
//                 imageUrl: data.imageUrl,
//                 category: data.category
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8;"
//             }
//         }
//     )
// }