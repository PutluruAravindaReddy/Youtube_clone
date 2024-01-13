// const VideoCardContainer=document.querySelector(".videos-sec");
// let api_key="AIzaSyCS2uu78o1-7swd87jnlDo4uk2U1sLfp4g";
// let video_http="https://www.googleapis.com/youtube/v3/videos?";
// let channel_http="https://www.googleapis.com/youtube/v3/channels?";




// fetch(video_http + new URLSearchParams({
//     key:api_key,
//     part:'snippet',
//     chart:'mostPopular',
//     maxResults:120,
//     regionCode:'IN',
// }))

// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     data.items.forEach(item =>{
//         getChannelIcon(item);
//     })
// })

// .catch(err => console.log(err));

// const getChannelIcon = (video_data) => {
//     fetch(channel_http + new URLSearchParams({
//         key:api_key,
//         part:'snippet',
//         id:video_data.snippet.channelId
//     }))
//     .then(res => res.json())
//     .then(data =>{
//         video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//         makeVideoCard(video_data);
//     })
// }




// const makeVideoCard=(data) =>{
//     VideoCardContainer.innerHTML+=`
//     <div class="videos" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
//         <div class="thumbnail">
//             <img src="${data.snippet.thumbnails.high.url}" alt="">
//         </div>
//         <div class="video-sec-bottom">
//             <img class="channel_logo" src="${data.channelThumbnail}" alt="" width="37" height="37">
//                         <div>
//                             <div class="title_info">
//                                 <h5>${data.snippet.title}</h5>
//                                 <img src="./img/3-dots.png" alt="" height="25">
//                             </div>
//                             <div class="channelname_verifysym">
//                                 <a>${data.snippet.channelTitle}</a>
//                                 <img src="./img/verified-symbol.png" alt="channel verified symbol" width="12"
//                                     height="12">
//                             </div>
//                             <div class="views_Upload_time">
//                                 <p id="views">224M views</p>
//                                 <p id="upload_time">2 years ago</p>
//                             </div>
//                         </div>
//                     </div>
//     </div>
//     `
// }



const VideoCardContainer=document.querySelector(".videos-sec");
let api_key="AIzaSyCS2uu78o1-7swd87jnlDo4uk2U1sLfp4g";
let video_http="https://www.googleapis.com/youtube/v3/videos?";
let channel_http="https://www.googleapis.com/youtube/v3/channels?";


fetch(video_http + new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart:'mostPopular',
    maxResults:91,
    regionCode:'IN',
}))

.then(res => res.json())
.then(data => {
    console.log(data);
    data.items.forEach(item =>{
        getChannelIcon(item);
    })
})

.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key:api_key,
        part:'snippet',
        id:video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data =>{
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard=(data) =>{
    VideoCardContainer.innerHTML+=`
    <div class="videos" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
        <div class="thumbnail">
            <img src="${data.snippet.thumbnails.high.url}" alt="">
        </div>
        <div class="video-sec-bottom">
            <img class="channel_logo" src="${data.channelThumbnail}" alt="" width="37" height="37">
                        <div>
                            <div class="title_info">
                                <h5>${data.snippet.title}</h5>
                                <img src="./img/3-dots.png" alt="" height="25">
                            </div>
                            <div class="channelname_verifysym">
                                <a>${data.snippet.channelTitle}</a>
                                <img src="./img/verified-symbol.png" alt="channel verified symbol" width="12"
                                    height="12">
                            </div>
                            <div class="views_Upload_time">
                                <p id="views">224M views</p>
                                <p id="upload_time">2 years ago</p>
                            </div>
                        </div>
                    </div>
    </div>
    `
}

var featuresclick = document.getElementsByClassName("features");
var sbclick = document.getElementsByClassName("sb-box");
var showmore = document.querySelector(".show-more");
var showless = document.querySelector(".show-less");
var remchannels = document.getElementsByClassName("extra-channels");
let sidebar=document.getElementById("sidebar");



for (let i = 0; i < featuresclick.length; i++) {
    featuresclick[i].addEventListener("click", function () {
        var activef = document.getElementsByClassName("activef");
        for (let j = 0; j < activef.length; j++) {
            activef[j].classList.remove("activef");
        }
        this.classList.add("activef");
    });
}

for (let i = 0; i < sbclick.length; i++) {
    sbclick[i].addEventListener("click", function () {
        var activesb = document.getElementsByClassName("activesb");
        for (let j = 0; j < activesb.length; j++) {
            activesb[j].classList.remove("activesb");
        }
        this.classList.add("activesb");
    });
}

showmore.addEventListener("click", function () {
        for (let i = 0; i < remchannels.length; i++) {
            remchannels[i].classList.remove("channels-hide");
        }
        showmore.classList.add("channels-hide");
});

showless.addEventListener("click", function () {
    for (let i = 0; i < remchannels.length; i++) {
        remchannels[i].classList.add("channels-hide");
    }
    showmore.classList.remove("channels-hide");
    showless.classList.add("channels-hide");
});


sidebar.addEventListener("click",function(){
    if(sidebar.classList.contains("hide")){
        sidebar.classList.remove("hide");
    }
    else{
        sidebar.classList.add("hide");
    }
})

if(sidebar){
    if(sidebar.classList.contains("hide")){
        sidebar.classList.remove("hide");
    }
    else{
        sidebar.classList.add("hide");
    }
}


// window.addEventListener('scroll', function() {
//     // Get the features section and videos section
//     var featuresSection = document.getElementById('features-sec');
//     var videosSection = document.getElementById('videos-sec');

//     // Get the position of the features section relative to the viewport
//     var featuresSectionRect = featuresSection.getBoundingClientRect();

//     // Check if the features section is in view
//     var isFeaturesInViewport = featuresSectionRect.top < window.innerHeight && featuresSectionRect.bottom >= 0;

//     // Add or remove the "active-section" class based on whether the features section is in view
//     videosSection.classList.toggle('active-section', isFeaturesInViewport);
// });