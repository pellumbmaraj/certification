function fetchQuote() {
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
  ];

  // Randomly pick a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// Function to update the quote and author on the page
function updateQuote() {
  const quote = fetchQuote();
  document.getElementById("text").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `- ${quote.author}`;

  // Update tweet link with current quote
  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;
  document.getElementById("tweet-quote").href = tweetUrl;
}

// Add event listener to the "New Quote" button
document.getElementById("new-quote").addEventListener("click", updateQuote);

// Initialize the app with a random quote
window.onload = updateQuote;