const about_article = document.getElementById("about-article");
const education_article = document.getElementById("education-article");

about_article.addEventListener("mouseover", () => {articleFocus(about_article)});
education_article.addEventListener("mouseover", () => {articleFocus(education_article)});

function articleFocus(articleFocused) {
    switch (articleFocused) {
        case about_article:
            education_article.style.zIndex = 0;
            education_article.style.backgroundColor = "#E2E2E2";
            about_article.style.zIndex = 1;
            about_article.style.backgroundColor = "#F5F5F5";            
            break;
    
        case education_article:
            education_article.style.zIndex = 1;
            education_article.style.backgroundColor = "#F5F5F5";
            about_article.style.zIndex = 0;
            about_article.style.backgroundColor = "#E2E2E2";   
            break;
        
        default:
            alert("Ah cabron");
            break;    
    }
}