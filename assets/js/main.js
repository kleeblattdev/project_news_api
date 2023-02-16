let search = document.querySelector('#search');
let country = document.querySelector('#country');

console.log(search, country);

fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=2731200c9f6d4b85a5c4165c5d639e92`)

.then(response => response.json())
.then((data) => {

    data.articles.forEach((article) =>{ 

        const urlToImage = article.urlToImage;
        const title = article.title;
        const description = article.description;
        const publishedAt = article.publishedAt;
        const url = article.url;

        const newsArticle = document.createElement('article');
        const newsImg = document.createElement('img');
        newsImg.src = `${urlToImage}`;
        const newsHeadline = document.createElement('h2');
        newsHeadline.innerText = title;
        const newsDescription = document.createElement('p');
        newsDescription.innerText = description;
        const newsPublished = document.createElement('p');
        newsPublished.classList.add('publishedAt');
        newsPublished.innerText = publishedAt.slice(0,10);
        const newsReadMore = document.createElement('a');
        newsReadMore.innerHTML = "READ MORE";
        newsReadMore.href = `${url}`;

        newsArticle.appendChild(newsImg)
        newsArticle.appendChild(newsHeadline)
        newsArticle.appendChild(newsDescription)
        newsArticle.appendChild(newsPublished)
        newsArticle.appendChild(newsReadMore);

        document.querySelector('section').appendChild(newsArticle);
    })

})
