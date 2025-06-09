<%"---"%>
tags: daily_notes
date_now: <% moment(tp.file.title,'YYYY-MM-DD').format("YYYY-MM-DD") %>
<%"---"%>

# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, DD MMMM YYYY") %>



<< [[<%tp.file.folder("./")%>/<% fileDate = moment(tp.file.title, 'YYYY-MM-DD').subtract(1, 'd').format('YYYY-MM-DD') %>|Yesterday]] | [[<% moment(tp.file.title,'YYYY-MM-DD').format("YYYY") %>-W<% moment(tp.file.title, "YYYY-MM-DD").add(-1,'days').week() %>]] | [[<%tp.file.folder("./")%>/<% fileDate = moment(tp.file.title, 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD') %>|Tomorrow]] >>

# GitHub
>



# Medium
>



# HuggingFace
>



# Mix
>



# Nvidia
>



# Paper's
>



## What happened / News Daily
>



```dataview
TABLE dateformat(date_now, "yyyy-MM-dd") AS "Date", url, duration,watching_In_progress,watched_completely,notes_taken
FROM "YT"
WHERE date_now =  date(this.file.name)

```

```dataview
TASK
FROM "Journal/01_Daily/"
WHERE meta(section).subpath = "GitHub"
GROUP BY link(file.link, dateformat(date_now, "yyyy-MM-dd"))
```