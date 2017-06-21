window.setInterval(function(){
  var elements = document.getElementsByClassName("between_page_module");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
	var elements = document.getElementsByClassName("autogen_class_views_pdfs_page_blur_promo autogen_class_widgets_base");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
	var items = document.body.getElementsByTagName("*");
	for (var i = 0, len = items.length; i < len; i++) {
    items[i].removeAttribute("unselectable");
	items[i].style.color = null;
	items[i].style.textShadow = null;
	items[i].style.opacity = null;
	items[i].classList.remove("blurred_page");
	}
}, 500);
