const video = document.querySelector('video');
const numbers = document.querySelector('.numbers');
const progress = document.querySelector('.progress');
const videoPlayback = document.querySelector('.videoPlayback');

videoPlayback.addEventListener('mousemove',handleMouseMove);

function handleMouseMove(e){    
    const reverseMouseInProgressDiv = e.pageY - this.offsetTop;
    const forwardMouseInProgressDiv = this.clientHeight - reverseMouseInProgressDiv;
    const percentageInPoints = (forwardMouseInProgressDiv / this.clientHeight); 
    const percentageInReality = Math.round(percentageInPoints * 100 );
    progress.style.height = percentageInReality + '%';
    const actualPlayBackRate = (( (percentageInPoints * (4 - 0.4)) + 0.4 )+0.01).toFixed(2);
    progress.textContent = actualPlayBackRate + 'x';
    video.playbackRate = actualPlayBackRate;
}