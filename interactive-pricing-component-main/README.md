# Frontend Mentor - Interactive pricing component

This is a solution to the [Interactive pricing component](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive pricing component](#frontend-mentor---interactive-pricing-component)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Page view and pricing totals](#page-view-and-pricing-totals)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:


- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers (details provided below)

### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [Click Here](https://www.frontendmentor.io/solutions/responsive-intro-section-with-tailwindcss-and-mobile-first-approach-WxXqwAcdtE)
- Live Site URL: [Click Here](https://paulsierracordova-interactive-pricing-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- JS
- Responsively APP
- Mobile-first workflow
- Chat GPT (to solve questions)
- Js Events

### What I learned

I figured out how to styling inputs, I don't even knew that it could depends on the browser that we could use. I learned that inputs <type=range> are composed of two parts, and we can add styles to any of them. For instance, lines below I'm showing the way how we can style both parts of the the input  <type=range> in Google Chrome and Safari browsers.


```
".form__input--range::-webkit-slider-thumb{...}
.form__input--range::-webkit-slider-runnable-track{...}"
```css

Furthermore, I grasped the idea behind styling checkbox as well, I had to research and read some css code to figure out how to accomplish the desired desing. The secret was in using the label as another element in our checkbox input.

Finally, I improved my skills handling events and dynamically react to users actions. It seems to me that it would already be a good starting point to kick off with a framework as React.

## Author

- Website - [Paul Sierra Cordova](https://paulsierracordova-portafolio.netlify.app/)
- Frontend Mentor - [@PaulSierraFISI](https://www.frontendmentor.io/profile/PaulSierraFISI)


