var jobTitle = "junior full-stack";
var jobTitleHtml = document.getElementById('jobTitle').innerHTML = jobTitle;

var employerDict = {
    name: "YouSource Inc.",
    link: "https://www.you-source.com/"
};
document.getElementById('employer').innerHTML = employerDict.name;

var locationDict = {
    city: "Makati City",
    country: "Philippines",
    countryIso: "PHL"
};
document.getElementById('city').innerHTML = locationDict.city;
document.getElementById('countryIso').innerHTML = locationDict.countryIso;

function redirectToEmployer() {
    window.open(employerDict.link, "_blank");
}