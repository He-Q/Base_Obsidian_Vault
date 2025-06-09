<%"---"%>
tags: daily_notes
<%"---"%>

# <% moment(tp.file.title,'DD-MM-YYYY').format("dddd, DD MMMM YYYY") %>


<< <% fileDate = moment(tp.file.title, 'DD-MM-YYYY').subtract(1, 'd').format('DD-MM-YYYY') %> Yesterday | <% moment(tp.file.title, 'DD-MM-YYYY').format("YYYY")%>-W<% moment(tp.file.title, 'DD-MM-YYYY').add(-1, 'days').week() %> | <% fileDate = moment(tp.file.title, 'DD-MM-YYYY').add(1, 'd').format('DD-MM-YYYY') %>Tomorrow >>




> [!Github]
>![[Github^dd-mm-yyyy]]

