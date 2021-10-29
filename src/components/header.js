const Header = (title, date, temp) => {
  // TASK 1
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).

  // create variable to store the elements being created
  const headerElement = document.createElement('div');
  const spanElement1 = document.createElement('span');
  const h1Element = document.createElement('h1');
  const spanElement2 = document.createElement('span');

  // append the elements created about to fit the layout provided below
  headerElement.appendChild(spanElement1);
  headerElement.appendChild(h1Element);
  headerElement.appendChild(spanElement2);

  //add classes to created elements
  headerElement.classList.add('header');
  spanElement1.classList.add('date');
  spanElement2.classList.add('temp');
  // add text content to the created elements
  spanElement1.textContent = date;
  h1Element.textContent = title;
  spanElement2.textContent = temp;
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return headerElement;
  
};

const headerAppender = (selector) => {
  const appendToMe = document.querySelector(selector);
  const returnHeader = Header('James Kirkwood', '10/29/21', 69)
  appendToMe.appendChild(returnHeader);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

}

export { Header, headerAppender }
