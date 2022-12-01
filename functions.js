let progressCircle = document.querySelector('.progressCircle');
let progressCounter = document.querySelector('.progressCounter');
let percent = 0;

let parsePercentToDeg = (percent)=>{
	return value = 360 * percent / 100;
}

progressCircle.addEventListener('click', ()=>{
	if (percent == 100 || percent == 0) {
		percent = 0;
		animateProgress = setInterval(()=>{
			percent++;
			progressCounter.innerHTML = percent;
			progressCircle.style.backgroundImage = 
				"conic-gradient(#34a1eb " + parsePercentToDeg(percent) +
				"deg, transparent " + parsePercentToDeg(percent) + "deg)";
			if (percent >= 100) {
				clearInterval(animateProgress);
			}
		}, 50);
	}
})