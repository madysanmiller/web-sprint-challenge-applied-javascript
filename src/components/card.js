// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headlineDiv =document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const imgAuthor = document.createElement('img');
  const spanBy = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(imgAuthor);
  authorDiv.appendChild(spanBy);

  headlineDiv.textContent = article.headline;
  imgAuthor.src = article.authorPhoto;
  spanBy.textContent = `By ${article.authorName}`;

  return cardDiv;
}

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
 
  axios.get('http://localhost:5001/api/articles')
  .then(res => {
    console.log('task 6', res.data)
    const data = res.data.articles;
    for(let key in data){
      data[key].forEach(article => {
        let cardElement = document.querySelector(selector)
        cardElement.appendChild(Card(article))
    })
  }
})

.catch(err => {
  console.error(err);
})

}

export { Card, cardAppender }
