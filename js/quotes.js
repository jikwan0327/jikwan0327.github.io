const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney",
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
        author: "J.K. Rowling",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much",
        author: "Oscar Wilde",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
        author: "Mother Teresa",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
    {
        quote: "It is never too late to be who you might have been.",
        author: "George Eliot",
    },
    {
        quote: "With self-discipline most anything is possible.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        author: "Babe Ruth",
    },
    {
        quote: "By doing the work to love ourselves more, I believe we will love each other better.",
        author: "Laverne Cox",
    },
    {
        quote: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
        author: "Edith Wharton",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//랜덤

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
