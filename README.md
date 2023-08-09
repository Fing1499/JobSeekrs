**Description**

This project was completed as part of General Assembly’s Software Engineering course - Unit 2 (week 6). The project is a browser-based job application tracker app. The application allows users to upload their current applications and leave reviews on companies in regard to the interview/application process. The project was built using HTML5, CSS3, JavaScript ES6, Node.js, Express, MongoDB and Mongoose.

**Deployment link**

The project can be used here.

**Code Installation**

To access the code, follow the steps below:

1. Clone the repository from GitHub.
2. Open the project in your preferred code editor.

**Timeframe & Working Team**

The project was to be completed within a week-long timeframe, starting on the 1st of June 2023. The project was completed individually, from conception to completion.

**Technologies Used**

This project included the use of:

- HTML
- CSS
- JavaScript
- Developer tools (Git, VS Code, Chrome dev tools)
- Node.js
- Express

**Brief**

The project required a full-stack web-based web application to be built that incorporated the use of a noSQL database and full user-centric create, read, update and delete functionality. 

**Planning**

General UI theme wireframe:

<img width="539" alt="Screenshot 2023-08-09 at 11 09 16" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/1b3db764-a002-404a-bcbf-b5cd657b80f0">
<img width="750" alt="Screenshot 2023-08-09 at 11 10 26" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/f9d81c9c-d5f4-4d08-8f60-7e4d3e510c8e">

When planning the project I spent time sketching out the various end-points and paths and routing that was expected to be necessary. I also mapped out the controller functionality. 

The UI wireframe was built within Figma, I initially created wireframes for every page the user would eventually have access to. The theme ended up taking a drastically different look although the general layout remained the same as I believed it was easy to navigate and distinguish the various aspects of the application.

The planning stage also involved the use of a Trello board. The Trello board contained the sections necessary to establish the minimum viable product required, an icebox of stretch features and a section for my Todo’s/done. The use of Trello optimised the build process as it provided a clear indication of the current build stage and allowed me to more effectively plan for potential upcoming challenges.

**Build/Code Process**

The coding process involved several key steps:

**Outline the Mongoose Schema:**

When outlining the Mongoose Schema, I  defined the necessary structure and fields required for the web application using Mongoose, a MongoDB object modelling tool for Node.js. The schema included essential fields such as job title, company, application status, salary, and an embedded relationship of another schema for the company reviews. 

<img width="748" alt="Screenshot 2023-08-09 at 11 11 36" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/6580ec30-cbdd-4120-b613-9102dcbe384c">

**Set up the correct middleware:**

While setting up the middleware, I utilised Node.js and Express. I configured middleware functions that handled the parsing of incoming requests and responses. I added packages that were necessary for the application to run correctly such as: 
  - Passport
  - Connect Mongo
  - Method Override
  - Express Session
  
I then imported the various routing files and saved them to semantically named variables before mounting the relevant middleware functions.

<img width="737" alt="Screenshot 2023-08-09 at 11 14 08" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/c2be6080-3215-406d-928f-8f02977e7155">
<img width="734" alt="Screenshot 2023-08-09 at 11 14 24" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/9dc80202-c728-4c44-9a7b-10bfca01ce69">

**Set up OAuth2 authorization:**

To ensure secure logins and user-centric access to job application data, I implemented OAuth2 authentication. I chose a suitable authentication strategy, leveraging Passport.js to handle the OAuth2 authentication process. Additionally, I configured the necessary OAuth2 providers, such as Google, allowing users to authenticate using their existing accounts.

<img width="464" alt="Screenshot 2023-08-09 at 11 14 55" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/eb720cf0-9062-4990-9125-85da0c9f4c96">

**Build the routing and endpoints:**

When building the routing and endpoints, I defined the routes and corresponding HTTP methods (GET, POST, PUT, DELETE) that handled different actions within the application. I implemented route handlers using Express to handle incoming requests, validate data, and interact with the database.

<img width="393" alt="Screenshot 2023-08-09 at 11 15 34" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/8776b27b-b7c5-4e00-a391-14701870d194">

**Set up the controller functions**

To process incoming requests and generate appropriate responses, I created the controller directory. The directory contained the relevant files for dealing with job applications, reviews and user functionality. These functions were responsible for tasks such as creating a new job application, updating the application, deleting an application, retrieving application details, and validating user log-ins.

<img width="532" alt="Screenshot 2023-08-09 at 11 16 26" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/807d6b59-79f0-46a5-896e-8389495ac766">
<img width="532" alt="Screenshot 2023-08-09 at 11 16 41" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/425581bf-be1c-4be9-90da-365ecb8af6e3">
<img width="534" alt="Screenshot 2023-08-09 at 11 16 54" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/fd782b48-9abb-463c-a376-4758d9161391">

**Build the necessary EJS views:**

To create an intuitive user interface, I built the UI via the use of EJS views. These view templates, including the job application dashboard, application details, and application creation/edit forms, were rendered dynamically. EJS tags, script tags, and embedded JS code, and other EJS delimiters, allowed for seamless integration of server-fetched data. Additionally, I maximised code reuse and maintainability by incorporating EJS partials, creating modular and visually appealing views. I further used CSS to style the views to allow for user accessibility.

<img width="397" alt="Screenshot 2023-08-09 at 11 17 19" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/6b873dc2-1473-489b-8b84-1addbd348cdd">

**Challenges**

Some challenges encountered during the project include:

Building the relevant schemas to ensure correct entity relationships proved to be a challenge as this was my first encounter with a dedicated database. Correctly implementing the embedded and relational relationships proved challenging as user data was stored in separate MongoDB documents. This required a degree of problem solving but consulting the documentation allowed me to effectively overcome this challenge.  

Designing a user-friendly and intuitive interface that accommodates diverse user requirements and preferences posed a design challenge. Balancing functionality with simplicity, organising information effectively, and providing smooth navigation required thoughtful consideration of UI layout and conducting user testing to refine the application's UI.

**Wins**

I believe the overall functionality of the application and its use case is something I am proud of. The web application is something I would use when searching for a job. 

I am also proud of the overall design and layout of the user interface, I believe it is intuitive and easy to understand without hindering the overall aesthetic.

<img width="749" alt="Screenshot 2023-08-09 at 11 18 20" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/acd10b95-97be-4c26-91d8-6f6912ff2ffb">
<img width="750" alt="Screenshot 2023-08-09 at 11 18 34" src="https://github.com/Fing1499/JobSeekrs/assets/130996567/272fbc69-cd25-4a22-9fec-f698eaeb6e10">

**Key Learnings**

Through this project, I gained hands-on experience and furthered my knowledge of:

JavaScript - middleware, controllers, routing and UI functionality.
HTML and CSS - ensuring a smooth user experience
EJS - integration of database information
Debugging and problem-solving skills
Manipulation of NoSQL databases

**Future Improvements**

Given more time, there are several areas for potential improvement:

  - Implement job board APIs to allow users to browse job postings within the application
  - Implement a search bar on the reviews page for easy access to specific companies
  - Implement more 0Auth2 strategies to allow users to have a choice of their preferred login method
  - Change the user and company-centric EJS rendering server side to allow for a larger user base without affecting     application performance.
  - Another widget on the dashboard page.

**Contributors**

Findlay Garrard


