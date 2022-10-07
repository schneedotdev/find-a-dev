<div align="center">
  <h3 align="center">Find a Dev</h3>

  <p align="center">
    Find developers who can assist your learning process in certain technologies!
    <br />
    <a href="https://github.com/brianschnee/find-a-dev#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://find-a-dev.up.railway.app/">View Demo</a>
    ·
    <a href="https://github.com/brianschnee/find-a-dev/issues">Report Bug</a>
    ·
    <a href="https://github.com/brianschnee/find-a-dev/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1422" alt="Screen Shot 2022-10-07 at 2 54 33 PM" src="https://user-images.githubusercontent.com/77141303/194632569-8aa1f3f0-f480-401f-adeb-9d66d5601c9e.png">


<br/>
Find developers who are willing to support your learning journey in software! You can cater your search by popular web technology. For users who are interested in offering their help, please click the "Offer Help" button and subimit your information to get posted on the help board!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built with

- MongoDB
- Express.js
- Node
- EJS
- JavaScript
- CSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation

_In order to clone a local copy of this repository, please follow the steps below._

1. Navigate to the folder you would like to store the project
2. Clone the repo
   ```sh
   git clone https://github.com/brianschnee/find-a-dev.git
   ```
3. Switch into the directory that was just created
    ```sh
    cd find-a-dev
    ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create a .env file at the base of your directory called `.env`
6. Enter your MongoURI string in `.env` with the key `DB_STRING`
   ```sh
   DB_STRING="<Replace everything in quotes with MongoDB Connection String>"
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

In order to use this application. Navigate to the find-a-dev <a href="https://find-a-dev.up.railway.app/">website</a> and search through a list of developers who are willing to support your journey in tech. You may filter through developers by popular technologies such as "Node.js" or "MongoDB." To sign up and offer help to our community, please click the `Offer Help` button and submit your information for other devs to see. Your information will be stored in our Mongo DB and rendered for users to see.

<img width="1421" alt="Screen Shot 2022-10-07 at 2 54 00 PM" src="https://user-images.githubusercontent.com/77141303/194632148-31503b52-c8b2-4efb-89c0-ef34b07f419f.png">


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Convert to Mongoose
- [ ] Convert to MVC Architecture
- [ ] Add Authentication to confirm user social media accounts using Passport.js or Auth0
- [ ] Add mobile compatibility by created responsive queries
- [ ] Add Pagination to reduce render size when user base grows
- [ ] Add user direct messaging using Socket.io

See the [open issues](https://github.com/brianschnee/find-a-dev/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Lessons Learned -->
## Lessons Learned

- How to create UI components that send requests to my express server, which will filter through a collection of developers stored in a mongo database and then render the results back to the client.
- When prompting for a user's twitter profile, I encountered the dangers of allowing links to be hidden behind icons in my UI. To protect against malicious intent, I now prompt for a users twitter profile name (rather than the full URL) which will be appended to a twitter url. This makes it so that malicious links provided by users will result in a 404 error from twitter, because the route is set to detect user profile names.
- Allowing users to submit their own profile pictures comes at the cost of potentially allowing innapropriate content. For this project, I had been able to pull profile images from github without having to access the platforms api/requiring OAuth. I do so by appending ".png" to a github profile link, which then redirects to a source file I am able to render. During later iterations of this app, I will implement OAuth in order to provide a more accurate/secure user experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Twitter - [@BrianSchneeDev](https://twitter.com/brianschneedev)

Email - [Contact Me](https://www.brianschnee.com/#contact)

Project Link: [https://github.com/brianschnee/find-a-dev](https://github.com/brianschnee/find-a-dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
