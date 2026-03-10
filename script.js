const API_KEY = "AIzaSyACYMiHoAM7fSRyD0vcKKDwLOt1z23zH3g";

const videoContainer = document.getElementById("videoContainer");
const videoPlayer = document.getElementById("videoPlayer");


// Search Videos
function searchVideos(){

const query = document.getElementById("searchInput").value;

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=9&type=video`)
.then(response => response.json())
.then(data => {

videoContainer.innerHTML = "";

data.items.forEach(item => {

const videoId = item.id.videoId;

const thumbnail = item.snippet.thumbnails.medium.url;
const title = item.snippet.title;
const channel = item.snippet.channelTitle;

const videoCard = document.createElement("div");
videoCard.classList.add("video-card");

videoCard.innerHTML = `

<img src="${thumbnail}">

<div class="video-info">
<h4>${title}</h4>
<p>${channel}</p>
</div>

`;

videoCard.addEventListener("click", function(){
playVideo(videoId);
});

videoContainer.appendChild(videoCard);

});

});

}



// Play Video

function playVideo(videoId){

videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;

}