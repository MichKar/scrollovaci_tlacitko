window.addEventListener("scroll", function(){
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - window.innerHeight
    if(Math.ceil(scrolled) >300){
        topPage = document.querySelector(".top-page")
        topPage.style.display = "block"

        topPage.addEventListener("click", function(){
            topPage.style.display = "none"
        })
    }
})
