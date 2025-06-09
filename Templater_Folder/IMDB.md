---
<%*
let url = await tp.system.clipboard()
let page = await tp.obsidian.request({url})
let p = new DOMParser()
let doc = p.parseFromString(page, "text/html")
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
Start_Date: <% await tp.system.prompt("Start Date (DD-MM-YYYY or leave blank)") %>
End_Date: <% await tp.system.prompt("End date (DD-MM-YYYY or leave blank)") %>
Seasons:  <% await tp.system.prompt("Season number or leave blank") %>
watched: False
---


# <% tp.user.imdb('title', tp, doc) %>

![cover|250](<% tp.user.imdb('image', tp, doc) %>)