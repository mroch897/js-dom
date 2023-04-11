const quotes = [
  {
    quote:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    author: "Autor 1",
    year: 2026,
  },
  {
    quote:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    author: "Autor 2",
    year: 2021,
  },
  {
    quote:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    author: "Autor 3",
    year: 2020,
  },
];
const quoutesList = document.querySelector("#quotes-list");

const getQuoteTemplate = (quote, author, year) => {
  return `<div class="quote-block">
<blockquote>${quote}</blockquote>
<p>${author} - ${year} </p>
</div>`;
};

const setUpQuouteList = () => {
  for (let i = 0; i < quotes.length; i++) {
    const quoteElement = quotes[i];
    quoutesList.innerHTML += getQuoteTemplate(
      quoteElement.quote,
      quoteElement.author,
      quoteElement.year
    );
  }
};

const handleQouteSumbit = (event) => {
  event.preventDefault();
  const formElemnts = event.target.elements;
  const newQuotes = {
    quote: formElemnts.quote.value,
    author: formElemnts.author.value,
    year: formElemnts.year.value,
  };

  console.log(newQuotes); // para sacar los elementos
  quoutesList.innerHTML += getQuoteTemplate(
    newQuotes.quote,
    newQuotes.author,
    newQuotes.year
  );
  event.target.reset();
};

const form = document.querySelector("#quote-form");
form.addEventListener("submit", handleQouteSumbit);

setUpQuouteList();
