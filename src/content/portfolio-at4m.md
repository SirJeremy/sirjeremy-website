# AI Tutor 4 Me

<img src="/pics/at4m/at4m-main.png" alt="Screenshot of a website. There is a chat on the right and a list of conversations on the left." class="md-img-center"/>

While working at the [xREAL Lab](https://www.csusb.edu/xreal-lab) at Cal State San Bernardino, I worked on projects related Large Language Model (LLMs) AI. Most of my time was spent working on a project available at the website [aitutor4me.com](https://www.aitutor4me.com). It consists of a frontend website and an API which hosts the business logic and interacts with a database.

## Purpose for Project 

The purpose was to allow a teacher to utilize ChatGPT, or other LLMs, in a classroom with the ability to track students’ usage. Tracking usage would allow a teacher to better understand common student questions and struggles. The teacher could then decide to adjust their lecture material or spend extra time in class to clear up some misunderstandings.

Utilizing ChatGPT in the classroom would also expose students to it, which would give them a better understanding of it, how it can be used, and what are its limitations. This knowledge would become increasingly important as LLMs would become more involved in various jobs or would benefit jobs as an additional tool to use to tackle problems.

## What I Worked On

Coding and software development was primarily my work. Which means that I had worked on the website, API, business logic, database, server setup, and deployment via Docker. I had also maintained some documentation, as was requested, to ensure that others would be able to update, maintain, and modify the project as needed.

## Features

### Website

<video class="md-img-center" autoplay loop muted>
    <source src="/pics/at4m/at4m-demo.webm" type="video/webm"/>
    oops
</video>

The website was made using Vite, React, and Tailwind. It was designed to resemble ChatGPT at the request of the client, so that it would be more accessible to students. The majority of the work was managing state to be able to handle continuous updates from streamed responses and managing state for complex conversation structure to allow for regeneration of responses anywhere in a conversation.

**Main Features:**

- Login with school email account
- No cost to students
- Multiple models available
- Ability to regenerate AI responses
- Conversations saved to your account
- Streamed AI responses

### Backend API

The business logic of the program was written in Python and made use of Langchain. That was then ran on an API which was made using Python, Flask, Socket IO, Pydantic, and Redis. The API authenticated and validated requests, executed the corresponding business logic, and stored the data in the database. There was also functionality to estimate costs, but that was mostly done to prevent accidental major charges. Managing conversation structure was much simpler on the backend simply because it had the easier half of streamed responses and regeneration. All it really had to do was look up the correct conversation, load up the correct message path from the tree, and then shovel it all to the business logic.

**Main Features:**

- Authenticated and validated requests
- Secure OAuth login
- Database interaction
- Logging

### Server

The server was deployed using Nginx onto Linode, with Cloudflare as DNS. It made use of Certbot for HTTPS certificate management. Docker was also used for quick and easy deployment.