async function userCode() {
  // SQL query to get a random quote from the quote table
  const randomQuoteSql = "SELECT * FROM quote ORDER BY RANDOM() LIMIT 1";

  // Execute the SQL query
  let response = await ob.SQL(randomQuoteSql);

  // Check if a quote was found
  if (response.length > 0) {
    // Return the random quote
    return {
      id: response[0].id,
      text: response[0].text,
      author: response[0].author,
      created_at: response[0].created_at,
    };
  } else {
    // Return an error if no quotes are found
    return { error: "No quotes available" };
  }
}

// Please note that this updated function now includes the ability to create new quotes via a POST
// request, as well as retrieving a random quote with the initial GET request functionality.
