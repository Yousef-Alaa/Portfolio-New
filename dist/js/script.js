function hideSection(){document.querySelector("section.active").classList.toggle("fade-out")}function toggleNav(){document.querySelector("header").classList.toggle("active")}window.onload=()=>{setTimeout(()=>{document.querySelector(".main").classList.remove("hidden"),document.querySelector("#home").classList.add("active"),document.querySelector(".loader").classList.add("fade-out"),setTimeout(()=>{document.querySelector(".loader").style.display="none"},600)},1500)},navToggle=document.querySelector(".nav-toggle"),navToggle.addEventListener("click",()=>{hideSection(),toggleNav(),document.body.classList.toggle("overflow-hid")}),document.addEventListener("click",t=>{t.target.classList.contains("link-item")&&""!==t.target.hash&&(t.preventDefault(),document.querySelector(".overlay").classList.add("active"),navToggle.classList.add("hide"),t.target.classList.contains("nav-item")?toggleNav():(hideSection(),document.body.classList.add("overflow-hid")),setTimeout(()=>{document.querySelector("section.active").classList.remove("active","fade-out"),document.querySelector(t.target.hash).classList.add("active"),window.scrollTo(0,0),document.body.classList.remove("overflow-hid"),navToggle.classList.add("hide"),navToggle.classList.remove("hide"),document.querySelector(".overlay").classList.remove("active"),document.querySelectorAll("nav .nav-inner ul li a").forEach(e=>{e.hash===t.target.hash?e.classList.add("active"):e.classList.remove("active")})},500))});let aboutTabs=document.querySelector(".about-tabs"),aboutSection=document.querySelector("section.about");function togglePortPopup(){document.querySelector(".portfolio-popup").classList.toggle("open"),document.body.classList.toggle("overflow-hid"),document.querySelector(".main").classList.toggle("fade-out")}function portItemDetails(e){document.querySelector(".pp-thumb img").src=e.querySelector(".port-item-thumb img").src,document.querySelector(".pp-header h3").innerHTML=e.querySelector(".port-item-title").innerHTML,document.querySelector(".pp-body").innerHTML=e.querySelector(".port-item-details").innerHTML}aboutTabs.addEventListener("click",e=>{e.target.classList.contains("tab-item")&&!e.target.classList.contains("active")&&(aboutTabs.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),e=e.target.getAttribute("data-target"),aboutSection.querySelector(".tab-content.active").classList.remove("active"),aboutSection.querySelector(e).classList.add("active"))}),document.addEventListener("click",function(e){e.target.classList.contains("view-btn")?(togglePortPopup(),document.querySelector(".portfolio-popup").scrollTo(0,0),portItemDetails(e.target.parentElement)):e.target.classList.contains("pp-inner")&&togglePortPopup()}),document.querySelector(".pp-close").addEventListener("click",togglePortPopup),contactForm.onsubmit=async e=>{e.preventDefault();var t=new FormData(e.target);fetch(e.target.action,{method:contactForm.method,body:t,headers:{Accept:"application/json"}}).then(e=>{swal({title:"success!",text:"Message has been sent!",icon:"success"}),contactForm.reset()}).catch(e=>{swal({title:"Something went wrong!",text:(""+e).slice(10),icon:"error"})})};