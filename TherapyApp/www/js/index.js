window.addEventListener('load', postDate, false);

function postDate() {    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("currentDate").innerHTML = "Date: " + today;
}

function saveJournal() {
    var title = document.getElementById("entryTitle").value;
    var entry = document.getElementById("journalEntry").value;
    localStorage.setItem(title, entry); 
    clearJournal();
}

function clearJournal() {
    document.getElementById("entryTitle").value = "";
     document.getElementById("journalEntry").value = "Dear Diary...";
}

function getAllDates() {
    document.getElementById("entryList").childNodes.removeAll;
    var key = "";
    var list = "";
    if (localStorage.length !== 0) {
        for (i = 0; i<=localStorage.length - 1; i++) {
            var node = document.createElement("LI");
            var link = document.createElement("a");                 
            key = localStorage.key(i); 
            value = localStorage.getItem(key);
            var textnode = document.createTextNode(key);         
            node.appendChild(textnode);
            link.setAttribute('href', '#');
            link.appendChild(node);
            document.getElementById("entryList").appendChild(link);
        }
    }
    
}



function spotify() {
    var mood = document.getElementById("selectMood").value;
    var artist = document.getElementById("selectArtist").value;
    console.log(mood);
    console.log(artist);
}


app.get('/login', function(req, res) {
var scopes = 'user-read-private user-read-email';
res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + my_client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri));
});