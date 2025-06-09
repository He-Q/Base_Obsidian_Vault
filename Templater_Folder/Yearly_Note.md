<%*
    let title = tp.file.title 
    if (title.startsWith("Untitled")) {
        title = await tp.system.prompt("Title");
        await tp.file.rename(`${title}`);
    }
%>
# <%* tR += `${title}` %>

<< [[<%tp.file.folder("./")%>/<%fileDate = moment((`${title}`), 'YYYY').subtract(1, 'years').format('YYYY')%>|Previous Year]] | [[<%tp.file.folder("./")%>/<%fileDate = moment((`${title}`), 'YYYY').add(1, 'years').format('YYYY')%>|Next Year]] >>




> [!year] Months of the Year
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(0).format('YYYY-MM') %>|January]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(1).format('YYYY-MM') %>|February]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(2).format('YYYY-MM') %>|March]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(3).format('YYYY-MM') %>|April]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(4).format('YYYY-MM') %>|May]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(5).format('YYYY-MM') %>|June]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(6).format('YYYY-MM') %>|July]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(7).format('YYYY-MM') %>|August]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(8).format('YYYY-MM') %>|September]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(9).format('YYYY-MM') %>|October]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(10).format('YYYY-MM') %>|November]]
> [[Journal/03_monthly/<% moment(tp.file.title, "YYYY-MM-DD").month(11).format('YYYY-MM') %>|December]]

