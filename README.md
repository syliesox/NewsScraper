# NewsScraper
A Node.js app App using NodeJS and MongoDB to store information.

## Description 

NewsScraper is an app that uses NodeJS framework, and a Mongo database to scrape information from [nytimes.com](nytimes.com), store info to the MongoDB and then display the info to the page for the user to interact with. The info displayed includes a link to the original article, and if the user clicks on the title of the article, then a notes box shows up for them to jot down some notes. The notes are stored in the database for the user to retrieve as needed, and the user can even update their notes if needed.

## Link
[Heroku link](https://nameless-fjord-58324.herokuapp.com/)

## Technologies Used

##### Framework
  - NodeJS
  - MongoDB
  - ExpressJS

##### NPM Packages used
  - axios (to make HTTP requests)
  - mongoose (MongoDB object modeling tool)
  - cheerio (server-side jQuery)