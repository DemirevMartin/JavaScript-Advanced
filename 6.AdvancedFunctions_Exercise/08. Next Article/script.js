function getArticleGenerator(articles) {
    // You need to return a function that keeps the initial array in its closure 
    // and every time it’s called, it takes the first element from the array 
    // and displays it on the web page, inside "article", in div with ID "content". 
    // If there are no more elements left, your function should do nothing.
    const content = document.getElementById('content');
    
    return () => {
        if(articles.length === 0) return;
        const current = articles.shift();
        const article = document.createElement('article');
        article.textContent = current;
        content.appendChild(article);
    }
}