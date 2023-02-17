//Input 
const btnSearch = document.querySelector('#btnSearch');
let search = document.querySelector('#search');
let country = document.querySelector('#country');

//
const newsSection = document.querySelector('section');
const allArticles = newsSection.getElementsByTagName('article');

//fetch URL
let apiKey = '2731200c9f6d4b85a5c4165c5d639e92';
let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;

//Remove function 
const removeElements = () => {
    while(allArticles.length > 0) {
        allArticles[0].remove()
    }
}

//fetch news API function
function loadArticle(){
    let req = new Request(url);

    fetch(req)
    .then(response => response.json())
    .then((data) => {
    
        data.articles.forEach((article) =>{ 
            const newsArticle = document.createElement('article');
    
            const urlToImage = article.urlToImage;
            const title = article.title;
            const description = article.description;
            const publishedAt = article.publishedAt;
            const url = article.url;

            const newsImg = document.createElement('img');
            const newsHeadline = document.createElement('h2');
            const newsDescription = document.createElement('p');
            const newsPublished = document.createElement('p');
            const newsReadMore = document.createElement('a');

            //Image
            newsImg.src = `${urlToImage}`;
            newsImg.alt =`Image could not be found`;
            newsArticle.appendChild(newsImg);

            //Titel of article
            newsHeadline.innerText = title;
            newsArticle.appendChild(newsHeadline);

            //News description
            newsDescription.innerText = description;
            newsArticle.appendChild(newsDescription);

            //Published Date
            newsPublished.innerText = publishedAt.slice(0,10);
            newsArticle.appendChild(newsPublished);

            //Button for external link
            newsReadMore.classList.add("readMore");
            newsReadMore.innerHTML = "READ MORE";
            newsReadMore.href = `${url}`;
            newsReadMore.target =`_blank`;
            newsArticle.appendChild(newsReadMore);
    
            newsSection.appendChild(newsArticle);
        })
    }
    )}

// Searchbar button
btnSearch.addEventListener("click", (event) =>{
    event.preventDefault();
    url = `https://newsapi.org/v2/everything?q=${search.value}&apiKey=${apiKey}`;
    removeElements();
    loadArticle();
})

//Search on pressing Enter
search.addEventListener('keyup',(event)=>{
    if (event.keyCode === 13){
    btnSearch.click();
    }
})

//change country
country.addEventListener("change", (event) =>{
event.preventDefault();
url =`https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${apiKey}`;
removeElements();
loadArticle();
})

//Sort by category

function category (topic){
    let categories = topic;
    console.log(categories);
    url =`https://newsapi.org/v2/top-headlines?country=${country.value}&category=${categories}&apiKey=${apiKey}`
    removeElements();
    loadArticle();
}

loadArticle()