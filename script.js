var element = document.querySelector("a[class='button contacts-button']");
var close = document.querySelector("span[class='modal-close'");
var active = document.querySelector("section[class='write-us-hidden']")
if (element) {
    
    // TODO: Attaching sample click listener. Remove it.
   element.addEventListener('click', function () {
    	active.classList.add("active");
       //document.getElementById('modal').style.display='block';
      
    }, false);
  
    
}
if (close) {
	   close.addEventListener('click', function (){
     	//document.getElementById('modal').style.display='none';
     	active.classList.remove("active");
     }, false);
}
