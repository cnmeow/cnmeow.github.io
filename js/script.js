
var userName;
fetch("https://api.github.com/users/cnmeow")
    .then(response => response.json())
    .then(data => {
        userName = data.login;
        document.getElementById('userName').innerHTML = data.login;
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('cntRepos').innerHTML = data.public_repos;
        document.getElementById('followers').innerHTML = data.followers;
        document.getElementById('realName').innerHTML = data.name;
        document.getElementById('bio').innerHTML = data.bio;
    });

fetch("https://api.github.com/users/cnmeow/repos")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            if (element.homepage) {
                var repo = document.createElement("a");
                repo.href = element.html_url;

                var item = document.createElement("div");
                item.className = "gallery-item";
                item.tabIndex = "0";

                var imgOfRepo = document.createElement("img");
                imgOfRepo.src = "https://raw.githubusercontent.com/" + userName + "/" + element.name + "/main/img/Screenshot.png";
                imgOfRepo.width = 280;
                imgOfRepo.height = 280;
                imgOfRepo.class = "gallery-image";
                

                var infoRepo = document.createElement("div");
                infoRepo.className = "gallery-item-info";

                var likeCnt = document.createElement("li");
                likeCnt.classname = "gallery-item-likes";
                likeCnt.innerHTML = element.stargazers_count;

                var heart = document.createElement("i");
                heart.className = "fa-solid fa-heart";
                heart.style.color = "#ffffff";
                heart.style.fontSize = "20px";
                heart.style.marginRight = "10px";

                infoRepo.append(heart);
                infoRepo.appendChild(likeCnt);
                item.appendChild(imgOfRepo);
                item.appendChild(infoRepo);
                repo.appendChild(item);
                document.getElementById("gallery").appendChild(repo);
            }
        });
    });