const blogSection = document.querySelectorAll(".blog");
const blogFooter = document.querySelectorAll(".blogFooter");
const likeBtns = document.querySelectorAll(".like-btn");
const likeCounter = document.querySelector(".likeCounter");
const blogTextHeader = document.getElementById('text-header');
const blogTextCutBody = document.getElementById('text-cut-body');
const blog = document.getElementById('blog-section');


let content = [
    {
        id : 1,
        Header: "What is TRUE TONE on the iPhone?",
        image : "img/iPhone-14-Pro-cameras-390x220.jpeg",
        like : 0,
        disLike : 0,
        link : "siri.html",
        shortContent: "Have you ever wondered how your iPhone's flash can capture photos with more natural and uniform lighting? The answer lies in the True Tone flash, an innovative technology present in the latest models of the iPhone.",
        fullContent: "",
    },
    {
        id : 2,
        Header: "Keeping Your Photos and Videos Private on Your iPhone or iPad",
        image : "img/Hide-photos-iOS-390x220.jpg",
        like : 0,
        disLike : 0,
        link : "siri.html",
        shortContent: "The iPhone has become the most personal and intimate device we have nowadays, as it carries practically all our digital life within it.",
        fullContent: "",
    },
    {
        id : 3,
        Header: "Siri Offline Requests Expanding to More Languages on iOS 17",
        image : "img/siri.jpg",
        like : 0,
        disLike : 0,
        link : "siri.html",
        shortContent: "Apple is set to introduce an exciting update to its virtual assistant, Siri, with the upcoming release of iOS 17. The highly anticipated feature will expand Siri’s offline capabilities to include a wider range of languages...",
        fullContent: "",
    },
    
]


// like section counter 
let likeCount = (id,element) =>{
    let filteredContent = content.find((c)=> c.id == id)
    if (filteredContent) {
        filteredContent.like = filteredContent.like + 1;
        element.innerHTML = filteredContent.like;
    }
}
let dislikeCount = (id,element) =>{
    let filteredContent = content.find((c)=> c.id == id)
    if (filteredContent) {
        filteredContent.disLike = filteredContent.disLike + 1;
        element.innerHTML = filteredContent.disLike;
    }
}
for (let i = 0; i <= content.length; i++) {
    let eachContent = content[i];
    let uniqueLike = "like" + eachContent.id;
    let uniqueDislike = "disLike" + eachContent.id;
    blog.innerHTML += `<div class="blog">
    <div id="text-header">${eachContent.Header}</div>
    <div class="blog-img-wrap">
        <img src="${eachContent.image}" alt="img" class="img-response">
    </div>
    <p class="blog-text" id="text-cut-body">${eachContent.shortContent}</p>
    <a href="${eachContent.link}" class="continue">CONTINUE READING</a>
    <div class="blogFooter">
        <div class="likes">
            likes:
            <div class="like-btn" onclick="likeCount(${eachContent.id},${uniqueLike})">
                <i class="fa-regular fa-thumbs-up"></i>
                <span id="${uniqueLike}">${eachContent.like}</span>
            </div>
            <div class="like-btn" onclick="dislikeCount(${eachContent.id},${uniqueDislike})">
                <i class="fa-regular fa-thumbs-down"></i>
                <span id="${uniqueDislike}">${eachContent.disLike}</span>
            </div>
        </div>
        <p class="blog-comment">14 comment</p>
    </div>
    </div>`
}



// console.log(blogTextHeader);
// blogTextHeader.innerHTML = jsonHeader(content);