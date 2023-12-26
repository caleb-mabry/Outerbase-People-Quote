# Outerbase Quote Commands

This README provides an overview of the key functionalities in the Outerbase quotes project. The project allows for adding new quotes and retrieving a random quote from an Outerbase SQLite database.

## Overview

The quotes comprises two main functions:

Fetching a Random Quote: Retrieves a random quote from the quote database.

Adding a New Quote: Inserts a new quote into the database.

These functions are designed to interact with a SQL database, executing queries to perform the desired actions.

Technologies

1. SQL Database
2. Node.js

### Fetching a Random Quote

This function executes a SQL query to retrieve a random quote from the quote table in the database. It orders the entries randomly and limits the result to a single quote.

Process:
Executes the SQL query: "SELECT \* FROM quote ORDER BY RANDOM() LIMIT 1".
If a quote is found, it returns an object containing the quote's details (id, text, author, created_at).
If no quotes are found, it returns an error message.
Use Case:
Use this function to display a random quote on your application's interface, such as a homepage or a quote widget.

### Creating a New Quote

This function is used for adding a new quote to the database. It takes the text and author of the quote from the request body and inserts them into the quote table.

#### Process:

1. Extracts quoteText and quoteAuthor from the request body.
2. Executes the SQL command: "INSERT INTO quote (text, author) VALUES (:quoteText, :quoteAuthor)".
3. On successful insertion, returns a confirmation message.
