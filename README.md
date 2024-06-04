# Take-Home Assignment: Real-Time Stock Dashboard

## Thoughts

**FE and BE**
Completed all requirements and also added remove stock functionality. Updates occur via polling every 10 seconds.

**DB**
Instead of constructing a full db, to save time I opted to just create a local file which represents the table holding all watched stocks.

However, I still wrote sample SQL statements for both creating the tables as well as all the CRUD functionality.

Thank you for the opportunity to complete this!

## How to Run

### To Install

```bash
git clone https://github.com/ronakh130/stock-dashboard.git
cd stock-dashboard
npm i
```

### To Run

Run this at the root directory:

```bash
npm run start
```

Then navigate to <http://127.0.0.1:5173/>.

## Prompt

Objective: Create a real-time stock market dashboard that displays stock prices and updates them periodically. The application should have a backend built with Node.js, a frontend with React.js, and utilize SQL for data management.

Please create a Github repo and share the link when ready. 

## Backend (Node.js)

API Development: Create RESTful APIs using Node.js to handle stock data. This includes:
An endpoint to fetch current stock prices.
An endpoint to add new stocks to the watchlist (stored in a SQL database).
Database Interaction: Use a SQL database to store a watchlist of stocks. Design a simple schema to store stock symbols.
Real-Time Data Streaming: Implement a WebSocket connection or a polling mechanism to stream stock price updates to the frontend.
Feel free to use a free stock price SDK (I think Yahoo used to have one) or just randomize those $$ values for the purposes of this project.

## Frontend (React.js)

Stock Dashboard: Develop a simple UI to display stock prices. It should update in real-time as new data is received from the backend.
Watchlist Management: Allow users to add stocks to their watchlist. This should interact with the backend to update the database.
Error Handling and User Feedback: Implement basic error handling and provide feedback for user actions (e.g., adding a stock to the watchlist).

## SQL

Database Schema: Write a SQL query to create the necessary table(s) for the watchlist. Include fields like stock symbol, added timestamp, etc.
Data Retrieval: Write a SQL query to fetch the list of stocks from the watchlist.

## Additional Requirements

Include a README file with clear instructions on how to set up and run the application.
Write clean, modular, and well-documented code.
Ensure the application is robust and handles edge cases gracefully.
Bonus points for implementing user management!
Evaluation Criteria
Code organization and clarity.
Correct implementation of RESTful principles and WebSocket/polling mechanism.
Effective use of SQL for data storage and retrieval.
Functionality of the React.js frontend, including real-time updates.
Error handling and user experience considerations.

This assignment is designed to evaluate your skills in backend and frontend development, as well as your ability to work with SQL databases and real-time data. We're looking forward to seeing your approach to solving this challenge!
