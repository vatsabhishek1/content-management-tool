function saveContent() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    
    var output = document.getElementById("output");
    var div = document.createElement("div");
    div.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
    output.appendChild(div);
    
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}
