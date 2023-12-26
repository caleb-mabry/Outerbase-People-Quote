
async function userCode() {
    const quoteText = {{request.body.text}};
    const quoteAuthor = {{request.body.author}};
    
    let sql = "INSERT INTO quote (text, author) VALUES (:quoteText, :quoteAuthor)";
    await ob.SQL(sql, quoteText, quoteAuthor);

    return "Quote created successfully";
}
