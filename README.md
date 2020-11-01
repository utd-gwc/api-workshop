# Working With APIs Workshop

This project is meant to act as supplemental material for the UTD Girls Who Code Working with APIs Workshop. Please use this code to gain a basic understanding of how to gain access to, utilize, and display info from APIs.

All of the finished code can be found on the `final-code` branch. To view a demo of this project checkout: https://utd-gwc.github.io/api-workshop/

## Get Access
We are going to be using the Google Civic Information API which requires an API key. Many public and private APIs will either be protected by an API key (which could be linked to a billing account) or to some Oauth verification. To generate an API key for your project follow the steps outlined here: https://developers.google.com/civic-information/docs/using_api.

## Utilize
Now we need to make a call to the API so that we can get the information we want from. We can check out how to use the Civic Information API here: https://developers.google.com/civic-information/docs/v2.

For this specific workshop we'll be getting representative info based on address which has usage documentation here: https://developers.google.com/civic-information/docs/v2/representatives/representativeInfoByAddress.

To call an API in React we can use the built-in function `fetch()`. We will call the `fetch()` function inside the async function onSearch so that once someone searches a certain address we pass that to the API and then populate the information for our user.

## Display
Once we have gotten the info from the API then we will need to parse it and display it to our user. These tasks have been abstracted for the purposes of this workshop but can be found within the codebase. Parsing is being done by the `parser()` function and the UI components are being handled by the `Reps.js` file. All we need to do is pass the officials and offices fields from the json object we receive from the API.

## Install Dependencies
To install the necessary dependencies for this code run the following command:

`yarn`

OR

`npm install`

## Run
To run the code in your local development environment run the following command:

`yarn start`

OR

`npm start`

Your code should now be running on http://localhost:3000
