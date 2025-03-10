import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js"; //created an import, and exported the data from /data.js
const test = document.querySelector("[data-list-items]"); // created a variable and took the empty div from HTML line 93
const searchButton = document.querySelector("[data-header-search]"); // created a variable and took the empty div from HTML line 65
const searchBar = document.querySelector("[data-search-overlay]"); // created a variable and took the empty div from HTML line 113

const matches = books; //added var const

const page = 1; //added var const

if (!books && !Array.isArray(books)) throw new Error("Source required");

// if (!range && range.length < 2) throw new Error('Range must be a++n array with two numbers')
//added light and dark mode and added const
const day = {
  dark: "10, 10, 20",
  light: "255, 255, 255",
};

const night = {
  dark: "255, 255, 255",
  light: "10, 10, 20",
};

const settingOverlay = document.querySelector("[data-header-settings]");
settingOverlay.addEventListener("click", (event) => {
  document.querySelector("[data-settings-overlay]").style.display = "block";
});
const dataSettingsTheme = document.querySelector("[data-settings-theme]");
const saveButton = document.querySelector(
  "body > dialog:nth-child(5) > div > div > button.overlay__button.overlay__button_primary"
);
saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (dataSettingsTheme.value === "day") {
    document.querySelector("body").style.setProperty("--color-dark", day.dark);
    document
      .querySelector("body")
      .style.setProperty("--color-light", day.light);
    appoverlays.settingsOverlay.close();
  }
  if (dataSettingsTheme.value === "night") {
    document
      .querySelector("body")
      .style.setProperty("--color-dark", night.dark);
    document
      .querySelector("body")
      .style.setProperty("--color-light", night.light);
    appoverlays.settingsOverlay.close();
  }
});

//const fragment = document.createDocumentFragment(fragment)  //moved fragment inside the brackets and lowercased f

// let extracted =

// //// for ({ authors, image, title, id }; extracted; i++) {    //added s to make it authors so that it can be called
// //     const preview = document.createPreview(){        //typed in document. and closed createPreview
// //         authors,      // added s to make it authors
// //         id,books.slice(0, 36)
// //         image,
// //         title,             //added ,
// //     }           //removed )

// //     fragment.appendChild(preview)

// data-list-items.appendChild(fragment)

// for ([id, name];Object.entries(authors); id++) {
//    const document.createElement('option')    //added const
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

//code to display book details
const detailsToggle = (event) => {
  const overlay1 = document.querySelector("[data-list-active-preview]");
  const title = document.querySelector("[data-list-title-preview]");
  const subtitle = document.querySelector("[data-list-subtitle]");
  const description = document.querySelector("[data-list-description]");
  const image1 = document.querySelector("[data-list-image-preview-id]");
  const imageblur = document.querySelector("[data-list-blur]");
  event.target.dataset.id ? (overlay1.style.display = "block") : undefined;
  event.target.dataset.description
    ? (description.innerHTML = event.target.dataset.description)
    : undefined;
  event.target.dataset.subtitle
    ? (subtitle.innerHTML = event.target.dataset.subtitle)
    : undefined;
  event.target.dataset.title
    ? (title.innerHTML = event.target.dataset.title)
    : undefined;
  event.target.dataset.image
    ? image1.setAttribute("src", event.target.dataset.image)
    : undefined;
  event.target.dataset.image
    ? imageblur.setAttribute("src", event.target.dataset.image)
    : undefined;
};
const detailsClose = document.querySelector("[data-list-close]");
detailsClose.addEventListener("click", (event) => {
  document.querySelector("[data-list-active]").style.display = "none";
});
const bookclick = document.querySelector("[data-list-items]");
bookclick.addEventListener("click", detailsToggle);
const authorSelect = document.querySelector("[data-search-authors]");
for (const authorId in authors) {
  const optionElement = document.createElement("option");
  optionElement.value = authorId;
  optionElement.textContent = authors[authorId];
  authorSelect.appendChild(optionElement);
}
const genreSelect = document.querySelector("[data-search-genres]");
for (const genreId in genres) {
  const optionElement = document.createElement("option");
  optionElement.value = genreId;
  optionElement.textContent = genres[genreId];
  //  console.log( optionElement.value +' '+ optionElement.textContent)
  genreSelect.appendChild(optionElement);
}

const moreBooks = document.querySelector("[data-list-button]"); // created a variable and called data-list-button from the DOM
const showMore = page * BOOKS_PER_PAGE; /*  Show more */ //moved it to the line below and removed the = before. removed books and replaced with matches so that it can get total number of books

moreBooks.disabled = !(matches.length - showMore > 0); //replaced data-list-button  with the variable I just created, replaced [page * BOOKS_PER_PAGE] with showMore on this code block

moreBooks.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining">${
      matches.length - showMore > 0 ? matches.length - showMore : 0
    }</span>
`;
// removed the () on the main and removed [] on page*BOOKS_PER_PAGE and replaced with (). Removed the [] and replaced with ``

/*moreBooks.addEventListener( 'click', () =>{
    showMore.click = true ;
   moreBooks.focus();
     page++;
     showMore += BOOKS_PER_PAGE; // increment the showMore variable by the number of books per page
     console.log(showMore);
    // code to display more books goes here
  });*/

// data-search-cancel.click()  { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelector (data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x [BOOKS_PER_PAGE]))       // added opening [ bracket
//     actions.list.updateRemaining()
//     page = page + 1
// }

searchButton.addEventListener("click", () => {
  searchBar.open = true;
  searchButton.focus();
});

const settingbutton = document.querySelector("[data-header-settings]");
settingbutton.addEventListener("click", (event) => {
  document.querySelector("[data-settings-overlay]").style.display = "block";
});

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')

//     data-list-items.innerHTML = ''
const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

for (const { author, image, title, id } of extracted) {
  //const { author: authorId, id, image, title } = props

  // Create a new button element
  const button = document.createElement("button");
  button.classList.add("preview");
  button.setAttribute("data-preview", id);

  let element = document.createElement("button");
  element.classList = "preview";
  element.setAttribute("data-preview", id);

  element.innerHTML = /* html */ `
            <img
                class ="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

  fragment.appendChild(element);
}

test.appendChild(fragment); // appended the fragment into test
