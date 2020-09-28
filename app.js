const quotes = document.getElementById("QUOTES");
const author = document.getElementById("AUTHOR");
const newQuotes = document.getElementById("NEW-QUOTES");
const twitter = document.getElementById("twitter");

let realData = "";
let quotesData = "";

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 1000);
  console.log(rnum);
  //console.log(realData[rnum]);
  quotesData = realData[rnum];

  quotes.innerText = `${quotesData.text}`;
  quotesData.author === null
    ? (author.innerText = "")
    : (author.innerText = `- ${quotesData.author}`);
};
const tweetMe = () => {
  let IntentURL = `https://twitter.com/intent/tweet?text=${quotesData.text} -${quotesData.author} &hashtags=quotes &hashtags=quote `;
  window.open(IntentURL);
};

const getQuotes = async () => {
  let api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    //console.log(data.json());
    realData = await data.json();
    //console.log(realData[0]);
    //console.log(realData[0].text);
    //console.log(realData[0].author);
    //console.log(realData.length);
    getNewQuotes();
  } catch (error) {}
};

newQuotes.addEventListener("click", getNewQuotes);
twitter.addEventListener("click", tweetMe);

getQuotes();
