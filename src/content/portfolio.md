# AI Tutor 4 Me

<img src="/pics/at4m/at4m-main.png" alt="Screenshot of a website. There is a chat on the right and a list of conversations on the left." class="md-img-center"/>

While working at the [xREAL Lab](https://www.csusb.edu/xreal-lab) at Cal State San Bernardino, I worked on projects related Large Language Model (LLMs) AI. The majority of my time was spent working on project available at the website [aitutor4me.com](https://www.aitutor4me.com). It consists of a frontend website and an API which hosts the business logic and interacts with a database.

## Purpose for Project 

The purpose was to allow for a teacher to untilize ChatGPT, or other LLMs, in a classroom with the ability to track students usage. Tracking usage would allow a teacher to better understand common student questions and struggles. The teacher could then decide to adjust their lecture material or spend extra time in class to clear up some misunderstandings.

Utilizing ChatGPT in the classroom would also expose students to it, which would give them a better undestanding of it, how it can be used, and what are its limitations. This knowledge would become increasingly important as LLMs would become more involved in various jobs or would benefit jobs as an addtional tool to use to tackle problems.

## What I Worked On

The coding and software development was primarily my work. Which means that I had worked on the website, API, business logic, database, server setup, and deployment via Docker. I had also maintained some documentation, as was requested, to ensure that others would be able to update, maintain, and modify the project as needed.

## Features

### Website

The website was made using Vite, React, and Tailwind. It was designed to resemble ChatGPT at the request of the client, so that it would be more accesable to students. Majority of the work was managing state to be able to handle continous updates from streamed responses, and managing state for complex conversation structure to allow for regeneration of responses anywhere in a conversation.

**Main Features:**

- Login with school email account
- No cost to students
- Multiple models available
- Ability to regenerate AI responses
- Conversations saved to your account
- Streamed AI responses

### Backend API

The business logic of the program was written in Python and made use of Langchain. That was then ran on an API which was made using Python, Flask, Socket IO, Pydantic, and Redis. The API authenticated and validated requests, executed the corresponding business logic, and stored the data in the database. There was also functionality to estimate costs, but that mostly done to prevent accidental major charges. Managing conversation structure was much simpler on the backend simply because it had the easier half of streamed responses and regeneration. All it really had to do was lookup the correct conversation, load up the correct message path from the tree, and then shovel it all to the business logic.

**Main Features:**

- Aunthenticated and validated requests
- Secure OAuth login
- Database interation
- Logging

### Server

The server was deployed using Nginx onto Linode, with Cloudflare as DNS. It made use of Certbot for HTTPS certificate management. Docker was also used to quick and easy deployment.

---

# Rust Crossbreed Calculator

<img src="/pics/rcbc.png" alt="Screenshot of 3 program windows. The first window, 'Crosbreed Calculator', lets you select and crossbreed deifferent breed. The second window, 'Breed Information' shows the parents, children, and genration of a specified breed. The third window, 'History' shows the history of various actions made, like adding breed or created crossbreeds." class="md-img-center"/>

Rust Crossbreed Calculator is a simple program that assists in the in-game crossbreed process. Rust features a crossbreeding system for adjusting the genes of plants. When done manually, this process is very time consuming. This program greatly sped up the process by calculating the resulting breed for you.

At the time of release, this was the 2nd program of it's kind and the only one that kept a list of created breeds, which allowed for much more practical use. It was also the only program at the time that allowed for multi-generation crossbreeding, as opposed to only having a single generation where you could not track how to produce a specific breed if you forgot.

Made using WPF, this program features three different windows a calculator, breed inspector, and crossbreed history. The main 'Crossbreed Calculator' window allows you to enter a breed with text input, which is made up of a combination of 6 genes chosen from 5 possible genes. The resulting breed gets added to a list of breeds along with a geneartion number. From the list of breeds, you can select which ones you want to crossbreed. The program then automatically calculates all possible crossbreeds and displays them in the output, which you can choose to save back to your breed pool.

The 'History' window shows what actions you have recently made, such as new breeds added, new crossbreeds made, and deleted breeds. The 'Breed Information' window shows a breeds generation, parents, and children. This allows you to figure out which breeds you would need to crossbreed in the actual game.

---

# Havoc Tanks

<div class='ht-carousel md-img-right-xs-center'></div>

Havoc Tanks is a 2 player local multiplayer, MOBA inspired game. The players take control of a Wreker and duke it out on one of three maps. It features multiple AI Crew drones to help you destroy the enemy's base.

This game was developed by a team of student artists, designers, and programmers. The programmer team of around 7 programmers. In the programmer team of around 7 programmers, I was responsible for implements movement, controls, camera movement, particles, enviromental boost ramps, and many other small tasts.

This game was worked on collaboratatively for about 14 weeks. Due to the team's experience, we were able to finish the project on time. We used agile scrum to keep track of work that needed to be done, and estimate how much more time was needed to complete the project.
