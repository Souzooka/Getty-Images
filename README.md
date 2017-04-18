# Getty Images

## Create an account
- Go to [https://developer.gettyimages.com/login/](https://developer.gettyimages.com/login/)
- Create an account.
  - Be sure to select this option when signing up:

  ![image](https://cloud.githubusercontent.com/assets/3915598/12062653/80f7e8f0-af44-11e5-9379-da345e445ab6.png)

## Read the Documentation
[Link to the Docs](http://developers.gettyimages.com/api/docs/v3/search/images/get/)

## Goal
You are building an interface which will search gettyimages for a particular set of photos by keyword (or more) and then display the images to the user. Your interface must **at the very minimum** met these requirements:
  - A way to take user input.
  - A button to kick off the search
  - Once you receive the response from the server with the image urls, display the images on the interface.

### Caveats
1. As you read in the Docs (you did read the docs, right?), you will need to craft a custom header for your `API KEY`. This means you will have to use either:
  a) build a Vanilla Javascript XHR request or
  b) if you plan on using jQuery, be sure to use the `jQuery.ajax()` method

  as both give you the ability to craft custom headers. jQuery's `jQuery.get()` and `jQuery.post()` do not.

## Stretch Goals
- Add the ability to store the history of search terms. Consider a side-menu with the search terms and when those words are clicked it will trigger a new request to gettyimages and display the results to the interface.
  - **Uber World Boss Spawn** When you reload the page, the history is gone! How do you save your history? *warning: we did not cover this in class yet, in the mood for an adventure?*
- Can you think of a way to use this in conjuction with the OpenWeather API?
  - **Ahem** if the forecast for the day in "Cloudy" then fire off a request to gettyimages for "cloudy" images (or videos).

## Resources
- [http://slides.com/sgnl/xhr#/](http://slides.com/sgnl/xhr#/)
- [GettyImages documentation](http://developers.gettyimages.com/api/docs/v3/search/images/get/)
- [jquery.ajax()](http://api.jquery.com/jquery.ajax/)
