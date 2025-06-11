<%*

let url = await tp.system.clipboard()

let page = await tp.obsidian.request({url})

let p = new DOMParser()

let doc = p.parseFromString(page, "text/html")

let startDate = ''; let endDate = ''; // Ask the user if they want to add dates.

let addDates = await tp.system.suggester( ["Yes", "No"], ["Yes", "No"], false, "Add start and end dates? (Default is No/Skip)" ); // Only proceed if the user explicitly clicks "Yes"

if (addDates === "Yes") { // Prompt for the start date, defaulting to today

let startInput = await tp.system.prompt("Start Date (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD")); // Check if the user entered a valid start date

if (startInput && startInput.match(/^\d{4}-\d{2}-\d{2}$/)) { startDate = startInput; // KEY CHANGE: Prompt for the end date, using the entered start date as the new default.

let endInput = await tp.system.prompt("End Date (YYYY-MM-DD)", startDate); // If the end date is valid, use it. Otherwise, it defaults to the start date.

if (endInput && endInput.match(/^\d{4}-\d{2}-\d{2}$/)) { endDate = endInput; } else { endDate = startDate;  } } }

let seasonsInput = await tp.system.prompt("Season numbers (1 2 3) or leave blank") || "";

let seasonsList = ""; if (seasonsInput.trim()) { let seasons = seasonsInput.split(' ').map(s => s.trim()).filter(s => s); if (seasons.length > 0) { seasonsList = seasons.map(s => `"${s}"`).join(', '); } }

-%>

---

title: "<% tp.user.imdb('title', tp, doc) %>"

url: "<% tp.user.imdb('url', tp, doc) %>"

cover: "<% tp.user.imdb('image', tp, doc) %>"

publish_date: <% tp.user.imdb('published', tp, doc) %>

keywords: [ <% tp.user.imdb('keywordsQ', tp, doc) %> ]

list_of_directors: [ <% tp.user.imdb('directorsQ', tp, doc) %> ]

creators: [ <% tp.user.imdb('creatorsQ', tp, doc) %> ]

duration: "<% tp.user.imdb('duration', tp, doc) %>"

description: "<% tp.user.imdb('description', tp, doc) %>"

genres: [ <% tp.user.imdb('genresQ', tp, doc) %> ]

imdb_rating: <% tp.user.imdb('imdbRating', tp, doc) %>

content_rating: "<% tp.user.imdb('contentRating', tp, doc) %>"

list_of_countries: [ <% tp.user.imdb('countriesQ', tp, doc) %> ]

start_date: <% startDate %>

end_date: <% endDate %>

seasons: [<% seasonsList %>]

watching_in_progress: true

watched_completely: false

comments: ""

---

  

# <% tp.user.imdb('title', tp, doc) %>

  

![cover|250](<% tp.user.imdb('image', tp, doc) %>)