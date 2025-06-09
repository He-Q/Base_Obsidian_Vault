---
<%*
let url = await tp.system.clipboard()
let page = await tp.obsidian.request({url})
let p = new DOMParser()
let doc = p.parseFromString(page, "text/html")
let startInput = await tp.system.prompt("Start Date (YYYY-MM-DD)", tp.date.now("YYYY-MM-DD"));
let endInput = await tp.system.prompt("End Date (YYYY-MM-DD will be set by 7 days from start date)", tp.date.now("YYYY-MM-DD", 7)); 
let startDate = startInput && startInput.match(/^\d{4}-\d{2}-\d{2}$/) ? startInput : tp.date.now("YYYY-MM-DD");
let endDate = endInput && endInput.match(/^\d{4}-\d{2}-\d{2}$/) ? endInput : tp.date.now("YYYY-MM-DD", 7);
let seasonsInput = await tp.system.prompt("Season numbers (1 2 3) or leave blank") || ""; 
let seasonsList = ""; if (seasonsInput.trim()) { let seasons = seasonsInput.split(' ').map(s => s.trim()).filter(s => s); if (seasons.length > 0) { seasonsList = seasons.map(s => `"${s}"`).join(', '); } }
-%>

title: "<% tp.user.imdb('title', tp, doc) %>"
url: "<% tp.user.website('url', tp, doc) %>"
cover: "<% tp.user.imdb('image', tp, doc) %>"
publish date: <% tp.user.imdb('published', tp, doc) %>
keywords: [ "<% tp.user.imdb('keywords', tp, doc) %>" ]
list of directors: [ <% tp.user.imdb('directors', tp, doc) %> ]
creators: [ <% tp.user.imdb('creators', tp, doc) %> ]
duration: <% tp.user.imdb('duration', tp, doc) %>
description: "<% tp.user.imdb('description', tp, doc) %>"
genres: [ <% tp.user.imdb('genres', tp, doc) %> ]
IMDb rating: <% tp.user.imdb('imdbRating', tp, doc) %>
content rating: <% tp.user.imdb('contentRating', tp, doc) %>
list of countries: <% tp.user.imdb('countries', tp, doc) %>
Start: <% startDate %> 
End: <% endDate %>
Seasons: [<% seasonsList %>]
watching_IN_progress: true
watched_completely : false
comments: "<% tp.user.imdb('', tp, doc) ?? " " %>"
---


# <% tp.user.imdb('title', tp, doc) %>

![cover|250](<% tp.user.imdb('image', tp, doc) %>)