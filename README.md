# Reddit Portal

## Project Description

This is a React and Redux Project which makes several calls to the Reddit API to populate the webpage.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The App allows the user to select a thread from the popular page of reddit, search for their own subreddit of threads, or choose one of the other popular reddit subs found in the sideabr.

The main goal of the project was to create an app with Redux to practice state management of React apps. The biggest challenge was using the many different aspects of React and Redux in unison. 

I was able to add many features to the site to create a better user experience, such as a Dark/Light theme toggle and a Loading page while the API call is in progress.

The only thing i tried to add but was unable was the useDebounce Hook, which i hoped would provide a better experience when using the searchbar. However i wasnt able to dispatch actions to the Redux store from within a React Hook and i don't know if there's a workaround to this.

### Live Demonstration of the Site

A Live Demonstration of the Site can be found at https://master--redditportal.netlify.app/

### Languages and Libraries Used

* HTML
* CSS
* JavaScript
* JSX
* React
* Redux
* React-Router-Dom
* React-Redux
* Redux Toolkit
* React-Loading-Icons

### Future Additions
I hope to add tests using Jest at a later date.
