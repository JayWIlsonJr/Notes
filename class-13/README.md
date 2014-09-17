# Project Management
## Planning
To start planning a project, it's usually best to talk through it with either the customer or another developer.

1. As you talk, write down your thoughts, one per index card.
2. Separate cards containing functionality (these are called "stories") from cards containing context (e.g. reliability, performance, etc.) and implementation (e.g. which functions to use, what libraries to use, etc.).
3. Decide which stories will be developed during the first release. This should be the simplest thing that could possibly work.
4. Rewrite the functionality cards as "story cards".

## Story cards

Each story should describe a feature of the application. They should be from the perspective of a user of the application. They answer the question "what should be done"?

### Example
Users should be able to see a list of all of the blog posts, sorted in descending order.

## Task cards
Each story should be split up into task cards. They answer the question "how should it be done?"

### Example
- Make a get request to the blog URL.
- For each post returned, create a DOM element and insert it into the DOM.

## Principles
### Do the simplest thing that could possibly work.
Don't overthink things. If it works, don't make it more complicated.

### Don't repeat yourself
There should be one and only one place for every piece of logic and configuration.

### Refactor often
Refactor complicated code immediately. Don't wait until later, or it will never be done.

### Plan your stories and tasks wisely
The amount of work you can do is constant. There is no such thing as "not enough time", only "too much to do".

### Get Feedback
Get immediate feedback. Don't go more than 5-10 minutes since the last time you were at a working version. Analyse and get feedback continuously.

## Practices
### Set deadlines
Set and keep deadlines, even if they're artificial. If you have 8 hours to complete a project, break that time up into pieces and come up with deadlines for every 2 hours, for example.

### Pair Programming
Pair programming is when two developers work together on the same task. The primary benefit is positive peer pressure, using questions and suggestions to avoid taking shortcuts. If a pair is encouraging each other to make suboptimal decisions, it's probably not a good idea.
The pair should switch roles periodically (25-30 minutes is a good time period).

The driver is the one with the keyboard. They should be focused on the details (syntax, indentation, variable naming, matching arguments to parameters, etc.)

The navigator is the other person, they focus on the big picture (how the different pieces fit together, different strategies for finishing the story, etc.)

# Collaborating on GitHub
1. Fork the repository
2. Clone your fork to your computer
3. Create a topic branch
4. Commit and push your changes to the topic branch on your fork.
5. Create a pull request.

# setTimeout and setInterval
Ways to do tasks/functions/things asynchronously at a set delay or set interval.
##setTimeout(function, ms)
- This means that 'x' milliseconds from now, place the contained function in the execution queque.  The amount of time set will not be exact.  
- This can be used to prevent the user interface (UI) from being blocked while a browser is processing.  ex: setTimeout (function, 0)

##setInterval(function, ms)
- This means that this function will be repeated every 'x' milliseconds.  
- Use clearInterval to stop the call.

##Online Resource:
http://javascript.info/tutorial/settimeout-setinterval

# Preventing default actions
By default, browser events have default behavior. For example, 'click a' changes the location of the page and 'form submit' submits the form data and refreshes the page.

To prevent default behavior of an event, call the `preventDefault` function on the event.

To prevent default behavior of a form submit, for example:

```js
$(document).on('submit', 'form', function(event){
  event.preventDefault();
  // Your code goes here
});
```
