const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Loader
window.onload = () => {
  setTimeout(() => {

    document.querySelector('.main').classList.remove('hidden');
    document.querySelector('#home').classList.add('active');
    document.querySelector('.loader').classList.add('fade-out');
    openTrkWindow()
    setTimeout(() => {
      document.querySelector('.loader').style.display = 'none';
      if (params.from === 'specialtrk') {
          contactForm['Name'].value = 'Adminstrator';
          contactForm['_replyto'].value = 'admin@trk.ey';
          contactForm['Message'].value = 'One Turkey Person is Viewing your website';
          specialBtn.click()
      }
    }, 600);

  }, 1500);
  

};

// Navbar Toggle
navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
  hideSection();
  toggleNav();
  document.body.classList.toggle('overflow-hid');
});

function hideSection() {
  document.querySelector('section.active').classList.toggle('fade-out');
}

function toggleNav() {
  document.querySelector('header').classList.toggle('active');
}

// Active Section
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('link-item') && e.target.hash !== '') {
    e.preventDefault();
    document.querySelector('.overlay').classList.add('active');
    navToggle.classList.add('hide');
    if (e.target.classList.contains('nav-item')) {
      toggleNav();
    } else {
      hideSection();
      document.body.classList.add('overflow-hid');
    }
    setTimeout(() => {
      document.querySelector('section.active').classList.remove('active', 'fade-out');
      document.querySelector(e.target.hash).classList.add('active');
      window.scrollTo(0, 0);
      document.body.classList.remove('overflow-hid');
      navToggle.classList.add('hide');
      navToggle.classList.remove('hide');
      document.querySelector('.overlay').classList.remove('active');
      document.querySelectorAll('nav .nav-inner ul li a').forEach( item => {
        if (item.hash === e.target.hash) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })

    }, 500);
  }
});

// About Section
let aboutTabs = document.querySelector('.about-tabs'),
    aboutSection = document.querySelector('section.about');

aboutTabs.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {

    aboutTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    let tar = e.target.getAttribute('data-target');
    aboutSection.querySelector('.tab-content.active').classList.remove('active');
    aboutSection.querySelector(tar).classList.add('active');
  }
});

// Portfolio
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('view-btn')) {
    togglePortPopup();
    document.querySelector('.portfolio-popup').scrollTo(0, 0);
    portItemDetails(e.target.parentElement);
  } else if (e.target.classList.contains('pp-inner')) {
    togglePortPopup();
  }
});

document.querySelector('.pp-close').addEventListener('click', togglePortPopup)

function togglePortPopup() {
  document.querySelector('.portfolio-popup').classList.toggle('open');
  document.body.classList.toggle('overflow-hid');
  document.querySelector('.main').classList.toggle('fade-out');
};

function portItemDetails(item) {
  document.querySelector('.pp-thumb img').src =
  item.querySelector('.port-item-thumb img').src;

  document.querySelector('.pp-header h3').innerHTML =
  item.querySelector('.port-item-title').innerHTML;

  document.querySelector('.pp-body').innerHTML =
  item.querySelector('.port-item-details').innerHTML;
}

contactForm.onsubmit = async event => {

  event.preventDefault();
  let data = new FormData(event.target);
  let normalMsgFromTrk = !(contactForm['Name'].value === 'Adminstrator' && contactForm['_replyto'].value === 'admin@trk.ey');
  

  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(res => {
    if (params.from !== 'specialtrk' || normalMsgFromTrk) {
      swal({
        title: "success!",
        text: "Message has been sent!",
        icon: "success",
      });
    } else {
      console.log('Sent Trk');
    }
      contactForm.reset()
  }).catch(error => {
    if (params.from !== 'specialtrk' || normalMsgFromTrk) {      
      swal({
        title: "Something went wrong!",
        text: `${error}`.slice(10),
        icon: "error",
      });
    } else {
      console.log('Not Sent Trk');
    }
  });


}

let trkWindow = document.querySelector('.trk-window');
let trkContainer = document.querySelector('.trk-container');
let trkContent = document.querySelector('.trk-container .trk-window .content');

document.querySelector('.close-trk-window').onclick = () => {
  closeTrkWindow()
}

function closeTrkWindow() {
  trkContent.style.opacity = 0;
  trkContainer.style.opacity = '1s ease-in-out'

  setTimeout(() => trkWindow.classList.add('active'), 1100)
  setTimeout(() => {trkContainer.style.opacity = 0}, 2100)
  setTimeout(() => {
    trkContainer.style.display = 'none'
    document.body.style.overflowY = 'auto'
  }, 3000)
  
}

function openTrkWindow() {
  document.body.style.overflowY = 'hidden'
  trkContainer.style.display = 'block'
  trkContainer.style.opacity = '.5s ease-in-out'
  
  setTimeout(() => {trkContainer.style.opacity = 1}, 100)
  setTimeout(() => trkWindow.classList.remove('active'), 600)
  setTimeout(() => {
    trkContent.style.opacity = 1
  }, 1600)
  
}