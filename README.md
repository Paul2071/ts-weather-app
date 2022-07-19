# TypeScript and Material UI Weather App 

## **Function of App**

<br>

This app started as a day long Hackathon challenge given to myself and my programming pair with the brief of "build a weather app using TypeScript".

Once the Hackathon had completed, I had the bare bones of an app and decided to use this as a base to learn Material UI (MUI).

For more about that decision and my experience using MUI for the first time, check out the "Reflections" tab at the bottom.

<br>

## **How to use**

The app makes calls to https://openweathermap.org/api based on the city that is typed and searched for in the input field.

If you would like to try it, follow these steps:

1. Go to https://openweathermap.org/api and follow the instructions to get your own API key. Once you have created a free acount and signed in, click your account name in the top right and from the drop down click "My API keys" to view your own API key.
2. Clone down the code https://github.com/Paul2071/ts-weather-app.git
3. Install the dependencies using

```
npm i
```
4. Create a .env file at the root level of the file, with a variable name of REACT_APP_APIKEY. Then copy and paste in your API key so it is in this format REACT_APP_APIKEY = "YOUR API KEY HERE" 

5. Load it up in localhost using
```
npm start
```
6. In the search field, type a city name and click the search button. It should then make a call to the API using the API key and city name you have just given it.
If nothing happens, check the console log for an error message - the API key generated can take up to two hours to be active.
 
 <br>

## **How it was built**

<br>

This app was built using the following:

<br>

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)

<br>


Myself and my pair programmer were introduced to TypeScript two days before our Hackathon, so it was quite a challenge just to get a working app.

To start with, we planned out our data flow and component tree, settling for something quite simple. This was to ensure that we were not wrestling with those aspects of the app and with TypeScript too.

Essentially, the data is generated at the App level then handed to the components via props. We had a rough time making sense of the TypeScript docs so turned to one of the many youtube videos for guidance with handling event objects / functions and data as props.

By the end of the day, we had a very basic App with no styling at all. It consisted of a button, an input field and an area for the data to displayed - but it worked and we were both incredibly proud of what we had managed.

Getting some practice with UI Libraries has been an aim of mine for a while, mainly due to their increased relevance and an opportunity to learn something new. After the Hackathon, I decided to use this app as a guinea pig for my attemps at using MUI.

My approach to this was to spend sometime reading over the documentation for MUI to get a grasp of what it was capable of - between the docs and the odd youtube tutorial, I was able to get my head around what I could do with and put something together.

<br>

## **Next steps**

<br>

Whilst I am not actively working on the app, there are a few things I would like to implement or change in the future:

- Accessibility - having a pass over this very important topic is top of the list. Checking keyboard navigability and adding relevant labels.
- Error handling - some feedback on the API call and various other things too.
- Unit tests - nothing too fancy, checking a function fires on button click, that the Display component renders would be two to start with.
- It is mobile friendly until you get to around 320px, then it starts to behave in interesting ways
- Make more use of custom themes using MUI
- Increased functionality:
    - There are two main features I would like to add:
    - Changing the weather icons on the Display component to be dynamic and respond to wether the weather is either "Clear", "Rain" or "Clouds" - so the rainclouds icon turns blue when data comes back stating that it is raining in a city.
     - Adding a longer forecast would be a good feature to have, with a snapshot of the whole day, rather than at that moment in time.

<br>

## **Reflections**

<br>

I thoroughly enjoyed my time navigating TypeScript and Material UI. Whilst I am by no means an expert, I am more comfortable using them both and am confident I would be able to troubleshoot any pinch points should I use either of these tools in the future.

I particularly liked the layout of the MUI docs. Each component available has its own page with examples, use cases and the props that it takes. This made evaluating what component to use much easier.



### **Socials**
<br>

For more projects I have been working on: https://github.com/Paul2071



And my programming pair and contributor to the weather app: https://github.com/RoryHog

