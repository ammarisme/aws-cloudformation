$(".navbar-nav").children().each(function () {
  // <!-- $(this).on("click", function (){ -->
  // <!-- $(this).addClass("active"); -->
  // <!-- }); -->
});

var sessionId = getRandomInt(0, 1000000);

$(".download-cv").on('click', function (e) {
  Log("download", "CV");
  downloadCV();
  e.preventDefault();
});


$("#search-text").on("keyup", function () {

  var searchResults = "";
  var searchString = $(this).val();
  if (searchString == "") {
    $("#search-results").html("");
    return;
  }

  //search abilities
  var abilities = new Array(); // abilities that match
  $(".ability-title").each(function () {
    if ($(this).html().toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
      ability = "<li>" + $(this).parent().html() + "</li>";
      if (!abilities.includes(ability)) {
        abilities.push(ability);
      }
    }
  });

  //search projects
  var projects = new Array();
  $(".projects .row").children().each(function () {
    // go through
    var project = $(this).html()
    var heading = $(this).find("figcaption").children().eq(0).html();
    var description = $(this).find("figcaption").children().eq(1).html();
    var tags = $(this).find("figcaption").children().eq(2).html();

    if (heading.toLowerCase().indexOf(searchString.toLowerCase()) != -1 || description.toLowerCase().indexOf(searchString.toLowerCase()) != -1 || tags.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
      if (!projects.includes(project)) {
        projects.push(project);
      }
    }
  });

  //search   education
  var educations = new Array();
  $("#experiences .experiences").eq(0).children().each(function () {
    var heading = $(this).children().eq(0).find("h4").html();
    var title = $(this).children().eq(1).find("p").children().eq(0).html();
    var description = $(this).children().eq(1).find("p").children().eq(1).html();
    var education = $(this).html();

    if (heading.toLowerCase().indexOf(searchString.toLowerCase()) != -1 || description.toLowerCase().indexOf(searchString.toLowerCase()) != -1 || title.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
      if (!educations.includes(education)) {
        educations.push(education);
      }

    }
  });

  //search experiences
  var experiences = new Array();
  $("#experiences .experiences").eq(1).children().each(function () {
    var heading = $(this).children().eq(0).find("h4").html();
    var title = $(this).children().eq(1).find("p").children().eq(0).html();
    var description = $(this).children().eq(1).find("p").children().eq(1).html();
    var experience = $(this).html();

    if (heading.toLowerCase().indexOf(searchString.toLowerCase()) != -1 || description.toLowerCase().indexOf(searchString.toLowerCase()) != -1 || title.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
      if (!experiences.includes(experience)) {
        experiences.push(experience);
      }

    }
  });
  //show skills in results
  if (abilities.length > 0) {
    searchResults += "<div class='row' ><div class='col-md-3'><h3 style='margin-bottom:0px'>Skills</h3></div><div class='col-md-9'><a href='https://www.linkedin.com/in/ammarbinameerdeen#skills' target='_blank'><h3 class='search-more-info'>View my skill recommendations on LinkedIn</h3></a></div></div>";
    searchResults += "<div class='row'> <div class='col-md-6 abilities'><ul class='no-bullets'>";
  }
  for (var key in abilities) {
    searchResults += abilities[key];
  }
  if (abilities.length > 0) {
    searchResults += "</ul> </div></div>";
  }
  abilities = new Array();

  // show projects in results
  if (projects.length > 0) {
    searchResults += "<div class='col-md-3'><h3 style='margin-bottom:0px'>Projects</h3></div><div class='col-md-9'><a href='https://github.com/ammarisme?tab=repositories' target='_blank'><h3 class='search-more-info'>See more projects on Github</h3></a></div></div>";
    searchResults += "<div class='col-md-12 projects'><div class='row' > ";
  }
  for (var key in projects) {
    searchResults += '<div class="col-md-6 col-sm-12 col-xs-12">';
    searchResults += projects[key];
    searchResults += "</div>";
  }
  if (projects.length > 0) {
    searchResults += "</div></div>";
  }
  projects = new Array();

  // show education in results
  if (educations.length > 0) {
    searchResults += "<div class='row' ><div class='col-md-3'><h3 style='margin-bottom:0px'>Education</h3></div><div class='col-md-9'><a href='https://www.linkedin.com/in/ammarbinameerdeen#education' target='_blank'><h3 class='search-more-info'>View education info on LinkedIn</h3></a></div></div>";
    searchResults += "<div class='experiences'><div class='experience row' > ";
  }
  for (var key in educations) {
    searchResults += '<div class="col-md-12 col-sm-12 col-xs-12">';
    searchResults += educations[key];
    searchResults += "</div>";
  }
  if (educations.length > 0) {
    searchResults += "</div></div>";
  }
  educations = new Array();

  // show experiences
  if (experiences.length > 0) {
    searchResults += "<div class='row' ><div class='col-md-3'><h3 style='margin-bottom:0px'>Expeiriences</h3></div><div class='col-md-9'><a href='https://www.linkedin.com/in/ammarbinameerdeen#experience' target='_blank'><h3 class='search-more-info'>View my full expeirience on LinkedIn</h3></a></div></div>";
    searchResults += "<div class='experiences'><div class='experience row' > ";
  }
  for (var key in experiences) {
    searchResults += '<div class="col-md-12 col-sm-12 col-xs-12">';
    searchResults += experiences[key];
    searchResults += "</div>";
  }
  if (experiences.length > 0) {
    searchResults += "</div></div>";
  }
  experiences = new Array();

  $("#search-results").html(searchResults);
  $("a").on("click", function () {
    var href = $(this).attr("href");
    href = href.replace("#", '');
    Log('link-click', href);
  });

});

$("#search-text").on("change", function () {
  if ($(this).val() == "") {
    return;
  }
  Log("search-text", $(this).val())
});

$("a").on("click", function () {
  var href = $(this).attr("href");
  href = href.replace("#", '');
  Log('link-click', href);
});

function Log(recordType, record) {
  $.ajax({
    type: 'get',
    url: "./Logger.php?sessionId=" + sessionId + "&record-type=" + recordType + "&record=" + record,
    success: function (response) {
    }
  });
}
function downloadCV() {
  var path = "./Software-Engineer-Ammar-Ameerdeen.pdf";
  var save = document.createElement('a');
  save.href = path;
  save.download = "Software-Engineer(.NET)-Ammar-Ameerdeen.pdf";
  save.target = '_blank';
  document.body.appendChild(save);
  save.click();
  document.body.removeChild(save);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//   <!-- (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ -->
//   <!-- (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), -->
//   <!-- ms.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) -->
//   <!-- })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); -->

//   <!-- ga('create', 'UA-102393738-1', 'auto'); -->
//   <!-- ga('send', 'pageview'); -->
