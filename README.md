# Reddit Native

iOS Reddit app using React Native and Reddit's API

## How to run the app

- clone the app to local directory with `git clone https://github.com/kent10ou/Reddit_Native.git`
- install dependencies with `npm install`
- `npm start` will run the app in dev mode 
  - download the [Expo app](https://expo.io) to view it on your iPhone
- I recommend running `npm run ios` which will open the app in the iOS simulator if you have it installed on your Mac

## Features
- [X] Use Redux
- [X] Create a main screen that fetches from Reddit’s API (https://www.reddit.com/.json) and displays the basic content (author, title, thumbnail, up votes, etc) in a list
- [X] Users should be able to pull to refresh the list
- [ ] Clicking on a specific item should transition to a different screen within the app. This screen's content can simply display the same basic content. Users should be able to go back to the main screen (React Navigation is a good option for this)
- [X] Create a public Github repo for this project with instructions on how to get the app running and send me the link after you're done

-----

- [ ] Store the fetched content locally so that if you relaunch the app, it will display that content first before fetching for new content. I recommend using Redux Persist or AsyncStorage
- [ ] Works for both iOS and Android
- [X] Share some words about your thought process, design/architectural decisions, challenges you faced, etc

## Thoughts, Designs, Challenges
I hadn't worked on a React Native project since the summer of 2015 when it was still fairly new! It seems like a lot has changed and developing on an app is much easier to get started with the `create-react-native-app` command. 
