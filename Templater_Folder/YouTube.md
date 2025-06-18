<%*
// Request a web page
let url = await tp.system.clipboard()
let page = await tp.obsidian.request({url})
let p = new DOMParser()
let doc = p.parseFromString(page, "text/html")
-%>
---
title: "<% tp.user.youtube('title', tp, doc) %>"
date_now: "<% tp.date.now("YYYY-MM-DD") %>"
url: "<% tp.user.youtube('url', tp, doc) %>"
aliases: 
  - "<% tp.user.youtube('title', tp, doc) %>"
channel: "<% tp.user.youtube('channel', tp, doc) %>"
published: "<% tp.user.youtube('published', tp, doc) %>"
thumbnail: "<% tp.user.youtube('thumbnail', tp, doc) %>"
keywords: [<% tp.user.youtube('keywordsQ', tp, doc) %>]
duration: "<% tp.user.youtube('duration', tp, doc) %>"
watching_IN_progress: true
notes_taken: false
watched_completely: false
---

# <% tp.user.youtube('title', tp, doc) %>

![thumbnail | 250](<% tp.user.youtube('thumbnail', tp, doc) %>)

```
<% tp.user.youtube('descriptionFull', tp, doc) %>
```

<% tp.user.youtube('url', tp, doc) %>

<% tp.user.youtube('url', tp, doc) %>