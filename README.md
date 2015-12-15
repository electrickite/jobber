Jobber
======

Displays OSU job postings.

A back-end Node.js server fetches jobs from[the OSU job Board](http://jobsatosu.com)
through a combination of Atom feeds and web scraping. Postings are then cached
and presented in a JSON format.

A front end Ember.js app consumes the JSON web service and displays the data
using both traditional table views and (at least one) dynamic visualization.

Dependencies
------------

To run Jobber, you'll need the following dependencies:

  * Git
  * Node.js >= 0.12
  * npm

To develop the front end client, you will also need:

  * Ember CLI >= 1.13
  * Bower

Installation
------------

To run Jobber locally clone the repository and issue the following commands:

    git clone git@github.com:electrickite/jobber.git
    cd jobber
    npm install
    node server.js

Then visit `http://localhost:3000`

Server Development
------------------

During server development, you may find it helpful to run Jobber using a tool
like Nodemon that will watch the working directory for changes and automatically
reload the server.

    nodemon server.js

Client Development
------------------

From the `client` directory install the necessary development dependencies:

    cd jobber/client
    npm install
    bower install

Then use Ember CLI to start a local web server and mock API web service:

    ember serve

You can view the application at `http://localhost:4200`. The testing suite can
be found at `http://localhost:4200/tests`.
