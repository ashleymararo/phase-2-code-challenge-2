## Smart Goal Planner
A simple React app for managing financial goals! This project lets users create, track, update, and delete personal savings goals—all synced with a json-server backend.

## Features
-Add a new savings goal
-Deposit money toward your goals
-View progress and remaining amount
-Delete goals you’re done with
-Uses a fake backend via json-server

## Technologies used
- React (with Vite)
- JSON Server
- HTML & CSS
- JavaScript

## How to run the app locally
1. Clone this repo.
```
git clone https://github.com/ashleymararo/p2-code-challenge-2
cd smart-goal-planner
```
2. Install dependencies.
```npm install```
3. Ensure you have ```json-server``` installed.
```npm install -g json-server```
Then run
```json-server --watch db.json --port 3000```
This starts the server at ```http://localhost:3000/goals```
4. Start the React app.
```npm run dev```

## Project Structure
smart-goal-planner/
├── public/
├── src/
│   ├── components/
│   │   ├── AddGoalForm.jsx
│   │   └── GoalCard.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── db.json
└── README.md

## Credits
Created by Ashley Mararo

## License
MIT