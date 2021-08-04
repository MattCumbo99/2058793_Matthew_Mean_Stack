function addPost() {
    let title = document.getElementById("title").value;
    let article = document.getElementById("article").value;
    let imgsrc = document.getElementById("imgsrc").value;

    if (title.length == 0) {
        alert("Title is required.");
        return;
    }
    if (article.length == 0) {
        alert("Article is required.");
        return;
    }

    let posts = JSON.parse(sessionStorage.getItem("posts") || "[]");
    let post = {ti:title,ar:article,im:imgsrc};

    posts.unshift(post);
    sessionStorage.setItem("posts", JSON.stringify(posts));
    posts = JSON.parse(sessionStorage.getItem("posts") || "[]");

    displayData();
    
    document.getElementById("title").value = "";
    document.getElementById("article").value = "";
    document.getElementById("imgsrc").value = "";
    
    alert("Post uploaded!");
    
}

function displayData() {
    let posts = JSON.parse(sessionStorage.getItem("posts") || "[]");

    if (posts) {
        var postContent = "";

        posts.forEach(element => {
            postContent += "<div class=\"col-sm-3 blogpost\"><h4>" + element.ti + "</h4>";
            
            if (element.im.length > 0) {
                postContent += "<img src=\"" + element.im + "\" class=\"img-thumbnail\"><br>";
            }
            else {
                postContent += "<label>(No image)</label><br>";
            }

            postContent += "<label>" + element.ar + "</label></div>";
        });

        document.getElementById("blogposts").innerHTML = postContent;
    }
}
