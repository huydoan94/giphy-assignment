# Documentation

## Table of Contents
<!-- TOC -->
  - [Why use React](#why-use-react)
  - [The Add-on](#the-add-on)
    - [Redux](#redux)
    - [Redux Observable](#redux-observable)
  - [Project Struture](#project-struture)
  - [Why use Redux Observable](#why-use-redux-observable)
<!-- /TOC -->

***
## Why Use React
Nowaday the front-end get polished by single page app and React is the candidate because of its focus on the view of the page and its supreme on managing and optimizing browser's rendering factor.

## The Add-on
Using React is great but its focuses on view and React is type of hierachy so the managing state and data over the tree need some help from other middleware.

#### Redux
To manage the data on the App. Redux provided a store to cover and managing. It help to store data and keep them purely using defined actions.

#### Redux Observable
Because actions is one way flow to store data so to make it easier to create side effect beside main actions, I use observable and put action into stream for other to listen. E.g: dispatch other action related.

## Project Struture
I use Fractal structure because it easy to track and scale. For example a Component will have it utilities at the same level with its suffix. Any components that belong to parent component will sit in a folder named as parent component.

## Why use Redux Observable
Apparenly that the fetching images of this project will take a pretty much time. To reduce user waitting time I use Observable to wrap a Promise and put in stream. When it complete it will automatically dispatch other action according to the result. It also reduce logic to hanlde in Pure Component and maybe to signal other components if needed.