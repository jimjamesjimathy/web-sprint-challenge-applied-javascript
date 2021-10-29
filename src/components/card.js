import axios from "axios";

const Card = ({headline, authorPhoto, authorName}) => {
  // TASK 5
  // create variable to store the elements being created
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgElement = document.createElement('img');
  const spanner = document.createElement('span');

  // append the elements created about to fit the layout provided below
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgElement);
  cardDiv.appendChild(spanner);

  //add classes to created elements
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');


  // add text content to the created elements
  headlineDiv.textContent = headline;
  imgElement.src = authorPhoto;
  authorDiv.textContent = authorName;
  // imgElement.src = article.authorPhoto;
  // spanner.textContent = 'By ' + authorName;
  console.log(imgElement)
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
    cardDiv.addEventListener('click', () => {
      console.log(headline);
    })
  return cardDiv;
  
}

const cardAppender = (selector) => {
  // // TASK 6
  const appendToMe = document.querySelector(selector);
  // Implement this function that takes a css selector as its only argument.
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      console.log(res)
      const bS = res.data.articles.bootstrap;
        bS.forEach(item => {
          const obj1 = {
            headline: item.headline,
            authorPhoto: item.authorPhoto,
            authorName: item.authorName
          }
          const card1 = Card(obj1);
          appendToMe.appendChild(card1)
          console.log(card1)
        })


    const jS = res.data.articles.javascript;
      jS.forEach(item => {
        const obj2 = {
          headline: item.headline,
          authorPhoto: item.authorPhoto,
          authorName: item.authorName
        }
        const card2 = Card(obj2);
        appendToMe.appendChild(card2)
      })


    const jQ = res.data.articles.jquery;
      jQ.forEach(item => {
        const obj3 = {
          headline: item.headline,
          authorPhoto: item.authorPhoto,
          authorName: item.authorName
        }
        const card3 = Card(obj3);
        appendToMe.appendChild(card3)
      })


    const node = res.data.articles.node;
      node.forEach(item => {
        const obj4 = {
          headline: item.headline,
          authorPhoto: item.authorPhoto,
          authorName: item.authorName
        }
        const card4 = Card(obj4);
        appendToMe.appendChild(card4)
      })


    const tech = res.data.articles.technology;
      tech.forEach(item => {
        const obj5 = {
          headline: item.headline,
          authorPhoto: item.authorPhoto,
          authorName: item.authorName
        }
        const card5 = Card(obj5);
        appendToMe.appendChild(card5)
      })
    })
    .catch(error => {
      console.log(error)
    })
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
