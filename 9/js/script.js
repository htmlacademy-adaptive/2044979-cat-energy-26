let navMain=document.querySelector(".main-header"),navToggle=document.querySelector(".main-header__toggle");navMain.classList.remove("main-header__page--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-header__page--closed")?(navMain.classList.remove("main-header__page--closed"),navMain.classList.add("main-header__page--open")):(navMain.classList.add("main-header__page--closed"),navMain.classList.remove("main-header__page--open"))}));