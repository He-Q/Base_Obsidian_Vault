# <% tp.file.title %>


<< [[<%tp.file.folder("./")%>/<%fileDate = moment(tp.file.title, 'gggg-[W]ww').subtract(1, 'weeks').format('gggg-[W]ww')%>|Previous Week]] | [[<%tp.file.folder("./")%>/<%fileDate = moment(tp.file.title, 'gggg-[W]ww').add(1, 'weeks').format('gggg-[W]ww')%>|Next Week]] >>



# weekly Days of the Week

[[Journal/01_daily/<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %>|Monday]]
[[Journal/01_daily/<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %>|Tuesday]]
[[Journal/01_daily/<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %>|Wednesday]]
[[Journal/01_daily/<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %>|Thursday]]
[[Journal/01_daily/<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %>|Friday]]
[[Journal/01_daily/<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>|Saturday]]
[[Journal/01_daily/<% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "YYYY-[W]ww") %>|Sunday]]


## What happened / News Weekly
