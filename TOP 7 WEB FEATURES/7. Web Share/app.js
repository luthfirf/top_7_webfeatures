// Web Share API

const shareBtn = document.getElementById('share');

shareBtn.onclick = async(filesArray) => {
    if (navigator.canShare) {
        navigator.share({
            url: 'https://fireship.io',
            title: 'PWAs are awesome!',
            text: 'I learned how to build a PWA today',
        })
    }
}