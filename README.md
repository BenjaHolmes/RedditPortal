# Reddit Portal

## Project Description

This is a React and Redux Project which makes several calls to the Reddit API to populate the webpage.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The App allows the user to select a thread from the popular page of reddit, search for their own subreddit of threads, or choose one of the other popular reddit subs found in the sideabr.

The main goal of the project was to create an app with Redux to practice state management of React apps. The biggest challenge was using the many different aspects of React and Redux in unison. Throughout the course of completing this project, I feel as though I gained an understanding as to why Redux is the preferred way to organize state as apps grow, for example, it's significantly easier to access a part of the state with a selector than it is to pass it down each level of the app as a prop in React.

I was able to add many features to the site to create a better user experience, such as a Dark/Light theme toggle and a Loading page while the API call is in progress. Additionally, when i tested the site on https://web.dev/measure/ , it scored 100 points for performance, so i am extremely pleased with the outcome.

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

### Site Demonstration
Example of Desktop Site
![DesktopStyleExample](https://user-images.githubusercontent.com/90611253/175748634-41b6f834-8be8-49a4-abb6-20e481e90930.png)

Example of Mobile Site


![PhoneStyleExample](https://user-images.githubusercontent.com/90611253/175748651-b7915c80-b09a-48e6-aa45-68eb66316436.png)

Example of Light Mode
![LightModeStyleExample](https://user-images.githubusercontent.com/90611253/175748663-866bb837-7e11-4f4d-9d8a-9ccedeebe5ab.png)

Example of Loading State Page


![DemonstationOfLoadingState](https://user-images.githubusercontent.com/90611253/175748709-c2f6e33c-8f81-47c2-ba28-754a7571129d.png)

Example of The Redux Store's Initial State
![StateExample](https://user-images.githubusercontent.com/90611253/175748726-63301a70-0ca6-495d-9d99-83926ce48aff.png)

WebDev Score
![LighthouseScore](https://user-images.githubusercontent.com/90611253/175748740-5979447e-96b3-4d06-8b77-a177b8009eae.png)


### Future Additions
I hope to add tests using Jest at a later date.
