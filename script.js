var featuresclick=document.getElementsByClassName("features");
var sbclick=document.getElementsByClassName("sb-box");

for(let i=0;i<featuresclick.length;i++){
    featuresclick[i].addEventListener("click",function(){
        var activef=document.getElementsByClassName("activef");
        for (let j = 0; j < activef.length; j++) {
            activef[j].classList.remove("activef");
        }
        this.classList.add("activef");
    });
}

for(let i=0;i<sbclick.length;i++){
    sbclick[i].addEventListener("click",function(){
        var activesb=document.getElementsByClassName("activesb");
        for (let j = 0; j < activesb.length; j++) {
            activesb[j].classList.remove("activesb");
        }
        this.classList.add("activesb");
    });
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