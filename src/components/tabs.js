import axios from 'axios';


const Tabs = (topics) => {
  // TASK 3
  // create variable to store the elements being created
  const topicsDiv = document.createElement('div');
  // use forEach to loop through the '"topics" array passed in, create new "div" element for every item in the passed in array and append it to the parent div created.
  topics.forEach(item => {
    let newTopic = document.createElement('div');
    newTopic.textContent = item;
    newTopic.classList.add('tab');
    topicsDiv.appendChild(newTopic);
  });

  //add classes to created elements
  topicsDiv.classList.add('topics');
  
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  console.log(topicsDiv);
  return topicsDiv;
};
// Tabs(['clam', 'chowder', 'sucks']);


const tabsAppender = (selector) => {
  // TASK 4
  // use the paramater "selector" passed in to get the parent element to append to.
  const appendToMe = document.querySelector(selector);
  // use axios to get the information needed from the URL provided
  axios.get('http://localhost:5000/api/topics')
  .then(res => {
    // store the topics array in a variable
    const tabsArray = res.data.topics;
    // create a new tab by passing the topics array we just stored in the variable tabsArray into the Tabs function;
    const newTab = Tabs(tabsArray);
    // append the new tabs to the appendToMe variable we created.
    appendToMe.appendChild(newTab);
    })
  .catch(error => {
    console.log(error);
  })
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
