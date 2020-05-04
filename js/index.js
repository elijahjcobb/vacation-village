var linksInNav = document.querySelectorAll("nav a");
var _loop_1 = function (link) {
    link.onclick = function () {
        var id = link.innerHTML.toLowerCase();
        var elementToLink = document.getElementById(id);
        var pos = elementToLink.offsetTop - 200;
        if (id === "home")
            pos = 0;
        window.scrollTo({ top: pos });
    };
};
for (var _i = 0, linksInNav_1 = linksInNav; _i < linksInNav_1.length; _i++) {
    var link = linksInNav_1[_i];
    _loop_1(link);
}
document.getElementById("learnMoreButton").onclick = function () {
    var elementToLink = document.getElementById("about");
    var pos = elementToLink.offsetTop - 200;
    window.scrollTo({ top: pos });
};
