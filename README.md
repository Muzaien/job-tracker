
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
These are JavaScript DOM methods used to select elements from an HTML page. Using getElementById(), we can select an element by its ID, which must be unique. On the other hand, getElementsByClassName() is another thing used to select all elements with a specific class name. querySelector()  is a method used to find and return the first element that matches one or more specified CSS selectors. For example:
document.querySelector("#id")
document.querySelector(".class")
document.querySelector("div p")
On the other hand, querySelectorAll() selects all elements that match a CSS selector. 
Overall, when we need one element by id, we use getElementById.
When we need elements by class, we use geyElementByClass. We use querySelector() when we need flexible CSS selection. And when we need multiple elements with CSS selectors, we use querySelectorAll.
 

### 2. How do you create and insert a new element into the DOM?
Ans:Ans 2: The first thing I  have to do is create the element like this:
const newElement = 
document.createElement("div");
and I can add content or attributes like this:
newElement.textContent = "Hello World";
newElement.className = "box";
after that, I can insert it into the DOM:
document.body.appendChild(newElement); Now the element appears on the page.
Overall, 
Create the element = createElement()
Customize it = textContent, className, id, etc.
Insert it = appendChild(), append(), prepend()


### 3. What is Event Bubbling? And how does it work?
Ans: So event building means When we click something on a webpage, we aren't just clicking that one button; we are also clicking everything it sits inside of. The event happens in this order:
Button (child) = event triggers here first
Parent div = event bubbles up to parent
Grandparent div = event bubbles up again
It could continue to body -html- document
It works like a chain reaction.


### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans 4: What is Event Delegation in JavaScript?
Event Delegation is a technique where, instead of adding an event listener to many child elements, we add one event listener to their parent element and use event bubbling to detect which child triggered the event. And it is so useful because, instead of adding many listeners, you add one listener to the parent. New elements added later will automatically work without adding new listeners. Less repetition and easier to manage.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: : Both methods are used when handling events, but they do different things. Some HTML elements have default actions. 
preventDefault() stops those actions from happening. 
For Example:
document.getElementById("link").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Link click prevented");
});
So the link will not open Google, because the default behavior is prevented.
On the other hand, stopPropagation() stops the event from bubbling up to parent elements. preventDefault() stops the default action of an element, such as preventing a form submission or link navigation.
stopPropagation() stops the event from propagating to parent elements during event bubbling.



