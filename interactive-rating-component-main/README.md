# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-rating-component-htmlcss-js-g6trHvrU1M](FrontEndMentorSolution)
- Live Site URL: [https://paulsierracordova-irc.netlify.app/](WebSite)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

The most important tip that I learned here is:
If I want to modifie the styles, I must to do it adding and removing classes. Sometimes is really hard to do it all from CSS, so I can save time doing it from JS.
There's a sample of my code where I use this tip:

```html
<div class="container_ratings">
  <div class="rating">1</div>
  <div class="rating">2</div>
  <div class="rating">3</div>
  <div class="rating">4</div>
  <div class="rating">5</div>
</div>
```
```css
.rating--active{
    background-color:   var(--Orange);
    color:var(--White);
} 
```


```js
ratings.forEach(rating=>{
        rating.classList.remove('rating--active');
    });
       
    if (estilos.contains('rating--hover')){
        estilos.remove('rating--hover');
    }
    estilos.add('rating--active');
```
### Continued development

In my future projects I'll be focused on the desings and save time in details. Maybe I can use a framework CSS like TailwindCSS.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Website - [Paul Sierra Cordova](https://paulsierracordova-irc.netlify.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
