
var alphabet = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];

alphabet.forEach(generateHeaders);

function generateHeaders(item, index) {
    var parser = new DOMParser();
    var liString = "<li id='"+item+"' class='collection-header'><h5>"+item+"</h5></li>";
    var liHTML = parser.parseFromString(liString, 'text/html');
    var ul = document.getElementById('names');
    ul.append(liHTML.body.firstChild);
}


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(function(data){
        var users = data;
        for (let i = 0; i < users.length; i++) {
        var parser = new DOMParser();
        let name = users[i].name
        var liString = "<li class='collection-item'> <a href='#'>"+name+"</a></li>";
        var liHTML = parser.parseFromString(liString, 'text/html');
        var ul = document.getElementById('names');
        first = name.charAt(0);
        header = document.getElementById(first);
        if (first == header.textContent){
            header.after(liHTML.body.firstChild);
        }
        }
        
    })



    







