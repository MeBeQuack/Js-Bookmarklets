let v = document.getElementsByClassName("video-ads")[0];
let y = document.getElementsByClassName("ytp-ad-module")[0];
if(v.innerHTML !== "" || y.innerHTML !== ""){
    var banner = false; 
    let f = document.getElementsByClassName("ytp-ad-overlay-close-button");
    for(var i = 0; i < f.length; i++)
    { 
        f[i].click(); 
        banner = true;
    } 
    if(banner === false)
    { 
        let h = document.getElementsByClassName("html5-main-video")[0];
        h.currentTime = h.duration;
        let s = document.getElementsByClassName("video-stream")[0];
        s.currentTime = s.duration;
        //sets the time to the max
        let a = document.getElementsByClassName("ytp-ad-skip-button")[0];
        a.click();
        let ad = document.getElementsByClassName("ytp-ad-preview-container")[0];
        ad.click();
        
    } 
}