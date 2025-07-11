async function imdb(value, tp, doc) {
  let url = await tp.system.clipboard();

  if (!isValidHttpUrl(url)) {
    console.error("Invalid URL for " + value);
    return "";
  }

  if (doc === undefined) {
    let page = await tp.obsidian.request({ url });
    let p = new DOMParser();
    doc = p.parseFromString(page, "text/html");
  }

  let json = JSON.parse(
    doc.querySelector("script[type='application/ld+json']").innerHTML
  );

  switch (value) {
    case "title":
      return title(json);
    case "image":
      return image(json);
    case "published":
      let datePublished = "";
      if (json.datePublished != null) {
        datePublished = JSON.stringify(json.datePublished).substring(1, 5);
      } else {
        datePublished = doc.querySelector("a[href*='releaseinfo']").innerText
      }
      return datePublished;
    case "keywords":
      return keywords(json);
    case "keywordsQ":
      let keywordsQ = keywords(json);
      return '"' + keywordsQ.replace(/, /g, '", "') + '"';
    case "keywordsL":
      let keywordsL = keywords(json);
      return "\n- " + keywordsL.replace(/, /g, "\n- ");
    case "keywordsW":
      let keywordsW = keywords(json);
      return "[[" + keywordsW.replace(/, /g, "]], [[") + "]]";
    case "directors":
      return await directors(json, tp, url);
    case "directorsQ":
      let directorsQ = await directors(json, tp, url);
      return '"' + directorsQ.replace(/, /g, '", "') + '"';
    case "directorsL":
      let directorsL = await directors(json, tp, url);
      return "\n- " + directorsL.replace(/, /g, "\n- ");
    case "directorsW":
      let directorsW = await directors(json, tp, url);
      return "[[" + directorsW.replace(/, /g, "]], [[") + "]]";
    case "creators":
      return creators(json);
    case "creatorsQ":
      let creatorsQ = creators(json);
      return '"' + creatorsQ.replace(/, /g, '", "') + '"';
    case "creatorsL":
      let creatorsL = creators(json);
      return "\n- " + creatorsL.replace(/, /g, "\n- ");
    case "creatorsW":
      let creatorsW = creators(json);
      return "[[" + creatorsW.replace(/, /g, "]], [[") + "]]";
    case "duration":
      return duration(json);
    case "description":
      let desc = doc.querySelector("span[data-testid='plot-xl']").innerText;
      return desc.replace(/"/g, '\\"');
    case "type":
      return type(json);
    case "contentRating":
      return json?.contentRating || "";
    case "genres":
      return genres(json);
    case "genresQ":
      let genresQ = genres(json);
      return '"' + genresQ.replace(/, /g, '", "') + '"';
    case "genresL":
      let genresL = genres(json);
      return "\n- " + genresL.replace(/, /g, "\n- ");
    case "genresW":
      let genresW = genres(json);
      return "[[" + genresW.replace(/, /g, "]], [[") + "]]";
    case "stars":
      return stars(json);
    case "starsQ":
      let starsQ = stars(json);
      return '"' + starsQ.replace(/, /g, '", "') + '"';
    case "starsL":
      let starsL = stars(json);
      return "\n- " + starsL.replace(/, /g, "\n- ");
    case "starsW":
      let starsW = stars(json);
      return "[[" + starsW.replace(/, /g, "]], [[") + "]]";
    case "imdbRating":
      return json.aggregateRating?.ratingValue || "";
    case "countries":
      return countries(doc);
    case "countriesQ":
      let countriesQ = countries(doc);
      return '"' + countriesQ.replace(/, /g, '", "') + '"';
    case "countriesL":
      let countriesL = countries(doc);
      return "\n- " + countriesL.replace(/, /g, "\n- ");
    case "countriesW":
      let countriesW = countries(doc);
      return "[[" + countriesW.replace(/, /g, "]], [[") + "]]";
    case "url":
      return json.url; // Fixed: removed duplicate URL
    default:
      new Notice("Incorrect parameter: " + value, 5000);
  }
}

// Updated directors function to handle TV series
async function directors(json, tp, originalUrl) {
  let directors = "";
  
  // Check if it's a TV series
  if (json["@type"] === "TVSeries") {
    // For TV series, get directors from fullcredits page
    try {
      let fullCreditsUrl = originalUrl.replace(/\/$/, '') + '/fullcredits/';
      let creditsPage = await tp.obsidian.request({ url: fullCreditsUrl });
      let creditsDoc = new DOMParser().parseFromString(creditsPage, "text/html");
      
      // Find directors section in fullcredits
      let directorsSection = creditsDoc.querySelector('#director');
      if (directorsSection) {
        let directorTable = directorsSection.closest('h4').nextElementSibling;
        if (directorTable && directorTable.tagName === 'TABLE') {
          let directorLinks = directorTable.querySelectorAll('td.name a');
          let directorNames = Array.from(directorLinks).map(link => link.textContent.trim());
          // Remove duplicates and limit to top directors
          let uniqueDirectors = [...new Set(directorNames)].slice(0, 5);
          directors = uniqueDirectors.join(', ');
        }
      }
      
      // Fallback: try alternative selector
      if (!directors) {
        let directorElements = creditsDoc.querySelectorAll('table.cast_list td.name a[href*="/name/"]');
        if (directorElements.length === 0) {
          // Try another approach - look for directing credit
          let creditTables = creditsDoc.querySelectorAll('table.simpleTable');
          for (let table of creditTables) {
            let prevHeader = table.previousElementSibling;
            if (prevHeader && prevHeader.textContent.toLowerCase().includes('direct')) {
              let directorLinks = table.querySelectorAll('td.name a');
              let directorNames = Array.from(directorLinks).map(link => link.textContent.trim());
              let uniqueDirectors = [...new Set(directorNames)].slice(0, 5);
              directors = uniqueDirectors.join(', ');
              break;
            }
          }
        }
      }
      
    } catch (error) {
      console.error("Error fetching directors from fullcredits:", error);
      // Fallback to creators for TV series
      if (json.creator != null) {
        directors = json.creator.map((creator) => creator.name);
        directors = JSON.stringify(directors)
          .replace(/null,?/g, "")
          .replace(/","/g, ", ")
          .replace(/\["/g, "")
          .replace(/\"]/, "");
      }
    }
  } else {
    // For movies, use the original logic
    if (json.director != null) {
      directors = json.director.map((director) => director.name);
      directors = JSON.stringify(directors)
        .replace(/null,?/g, "")
        .replace(/","/g, ", ")
        .replace(/\["/g, "")
        .replace(/\"]/, "");
    }
  }
  
  return directors;
}

// Rest of your existing functions remain the same...
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function title(json) {
  let title = "";
  if (json.alternateName != null) {
    title = json.alternateName.replace(/&apos;/g, "'");
  } else {
    title = json.name.replace(/&apos;/g, "'");
  }
  return title;
}

function image(json) {
  let image = "";
  if (json.image != null) {
    image = json.image;
  }
  return image;
}

function keywords(json) {
  let keywords = "";
  if (json.keywords != null) {
    keywords = JSON.stringify(json.keywords);
    keywords = keywords.toLowerCase().replace(/,/g, ", ").replace(/"/g, "");
  }
  return keywords;
}

function creators(json) {
  let creators = "";
  if (json.creator != null) {
    creators = json.creator.map((creator) => creator.name);
    creators = JSON.stringify(creators)
      .replace(/null,?/g, "")
      .replace(/","/g, ", ")
      .replace(/\["/g, "")
      .replace(/\"]/, "");
  }
  return creators;
}

function duration(json) {
  let duration = "";
  if (json.duration != null) {
    duration = JSON.stringify(json.duration).toLowerCase();
    duration = duration
      .replace(/"pt/, "")
      .replace(/h/, "h ")
      .replace(/m"/, "m");
  }
  return duration;
}

function type(json) {
  type = JSON.stringify(json["@type"])
    .replace(/TV/, "")
    .replace(/"/g, "")
    .toLowerCase();
  return type;
}

function genres(json) {
  return JSON.stringify(json.genre)
    .toLowerCase()
    .replace(/","/g, ", ")
    .replace(/\["/g, "")
    .replace(/\"]/, "");
}

function stars(json) {
  return JSON.stringify(json.actor.map((actor) => actor.name))
    .replace(/","/g, ", ")
    .replace(/\["/g, "")
    .replace(/\"]/, "");
}

function countries(doc) {
  let countries = doc.querySelectorAll("a[href*='country_of_origin']");
  countries = Array.from(countries, (countries) => countries.textContent).join(", ");
  return countries;
}

module.exports = imdb;