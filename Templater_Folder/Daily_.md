<%"---"%>
tags: daily_notes
<%"---"%>

# <% moment(tp.file.title,'DD-MM-YYYY').format("dddd, DD MMMM YYYY") %>


<< <% fileDate = moment(tp.file.title, 'DD-MM-YYYY').subtract(1, 'd').format('DD-MM-YYYY') %> Yesterday | <% moment(tp.file.title, 'DD-MM-YYYY').format("YYYY")%>-W<% moment(tp.file.title, 'DD-MM-YYYY').add(-1, 'days').week() %> | <% fileDate = moment(tp.file.title, 'DD-MM-YYYY').add(1, 'd').format('DD-MM-YYYY') %>Tomorrow >>




> [!Github] GitHub | [[GitHub_<% tp.date.now("DD-MMMM-YYYY") %>]] >
><% tp.file.==in==clude("[[GitHub_11-01-2023]]") %>

> [!Medium]

> [!Paper's]
>


Days:[[<%tp.file.folder("./")%>/<%tp.date.now("DD-MM-YYYY", -1, tp.file.title, "DD-MM-YYYY")%>|Yesterday]] <==  [[<%tp.file.folder("./")%>/<%tp.date.now("DD-MM-YYYY", 0, tp.file.title, "DD-MM-YYYY")%>]] ==>  [[<%tp.file.folder("./")%>/<%tp.date.now("DD-MM-YYYY", 1, tp.file.title, "DD-MM-YYYY")%>|Tomorrow]] 