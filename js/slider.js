 let slider = document.getElementById('slider');
 let li = slider.getElementsByTagName('li');
 li[0].classList.add("active");
setInterval(slideActive, 5000);
	function slideActive() {
		for (let i = 0; i < li.length; i++) {
			if (li[i].classList.contains("active") && i == li.length-1) {
				li[i].classList.remove("active");
				li[0].classList.add("active");			
			} else if (li[i].classList.contains("active")) {
				li[i].classList.remove("active");
				i++;
				li[i].classList.add("active");		
				}
			}
			
	}
 
