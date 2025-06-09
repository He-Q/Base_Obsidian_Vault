---
<%*
let url = await tp.system.clipboard()
let page = await tp.obsidian.request({url})
let p = new DOMParser()
let doc = p.parseFromString(page, "text/html")
-%>

title: "<% tp.user.goodreads('title', tp, doc) %>"
url: "<% tp.user.goodreads('url', tp, doc) %>"
isbn: <% tp.user.goodreads('isbn', tp, doc) %>
publish-date: <% tp.user.goodreads('published', tp, doc) %>
genres: [<% tp.user.goodreads('genresQ', tp, doc) %>]
cover: "<% tp.user.goodreads('cover', tp, doc) %>"
pages: <% tp.user.goodreads('pageCount', tp, doc) %>
rating: <% tp.user.goodreads('rating', tp, doc) %>
read: false
started_reading: true 
on_hold: false 
finished_reading: false

---
# <% tp.user.goodreads('title', tp, doc) %>

![cover|250](<% tp.user.goodreads('cover', tp, doc) %>)

Authors:: <% tp.user.goodreads('authorsW', tp, doc) %>

<% tp.user.goodreads('description', tp, doc) %>

