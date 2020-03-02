function toonWinnaars() {
    var deelnemers = ["Frankrijk", "Kroatië", "België"];
    for (var x = 0; x < deelnemers.length; x++) {
        document.write("<br/>Op plaats " + (x + 1) + " staat: " + deelnemers[x]);
    }
}
toonWinnaars();