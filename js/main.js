var xhttp = new XMLHttpRequest();
let next = document.getElementById("next");

// if (articleNum < 5) {
//     NEXT.addEventListener("click", nextArticle);
// }

// function nextArticle() {
//     articleNum += 1;
//     getNextArticle();
//}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        let response = xhttp.responseText;

        let heading = document.querySelector(".article-heading");
        let firstImage = document.querySelector(
            ".image-container:first-of-type img"
        );
        let firstImageCaption = document.querySelector(
            ".image-container:first-of-type div"
        );
        let firstParagraph = document.querySelector(
            ".article-paragraph:first-of-type"
        );
        let articleControls = document.querySelector(".article-controls");

        let article = JSON.parse(response).body;
        let headingText;
        let articleContent = new Array();
        let paragraphTexts = new Array();
        let images = new Array();
        let lists = new Array();

        article.forEach(element => {
            if (element.type == "heading") {
                headingText = element.model.text;
                return;
            }
            if (element.type == "paragraph") {
                paragraphTexts.push(element.model.text);
            }
            if (element.type == "image") {
                images.push(element.model);
            }
            if (element.type == "list") {
                lists.push(element.model.items);
            }
            articleContent.push(element.type);
        });

        if (paragraphTexts.length > 0) {
            firstParagraph.textContent = paragraphTexts.shift();
            articleContent.splice(articleContent.indexOf("paragraph"), 1);
        }

        if (images.length > 0) {
            let currentImage = images.shift();
            firstImage.setAttribute("src", currentImage.url);
            firstImage.setAttribute("alt", currentImage.altText);
            firstImageCaption.insertAdjacentText(
                "afterbegin",
                `${currentImage.altText}`
            );
            articleContent.splice(articleContent.indexOf("image"), 1);
            firstParagraph.classList.add("is-image");
        } else {
            document.querySelector(".image-container").style =
                "grid-column: unset; display: none;";
        }

        articleContent.forEach(element => {
            if (element == "paragraph") {
                articleControls.insertAdjacentHTML(
                    "beforebegin",
                    `
                        <p class="article-paragraph">
                            ${paragraphTexts.shift()}
                        </p>
                    `
                );
            }
            if (element == "image") {
                let newImage = images.shift();
                articleControls.insertAdjacentHTML(
                    "beforebegin",
                    `
                        <div class="image-container">
                            <img src="${newImage.url}" alt="${newImage.altText}" />
                            <div class="image-caption">${newImage.altText}</div>
                        </div>
                    `
                );
            }
            let listCount = 0;
            if (element == "list") {
                let currentList = lists.shift();
                articleControls.insertAdjacentHTML(
                    "beforebegin",
                    `
                        <ul id="list-${listCount}">
                        </ul>
                    `
                );
                currentList.forEach(listItem => {
                    document
                        .querySelector(`#list-${listCount}`)
                        .insertAdjacentHTML(
                            "afterbegin",
                            `<li>${listItem}</li>`
                        );
                });
                listCount += 1;
            }
        });

        function returnItem(list) {
            list.forEach(element => {
                return "<li>" + element + "</li>";
            });
        }
    }
};

xhttp.open("GET", `../data/article-1.json`, true);
xhttp.send();
