let display = true;

const lightShareBtn = document.getElementById('share-btn');
const darkShareBtn = document.getElementById('dark-share');

const nameDate = document.getElementById('name-date-container');
const profilePic = document.querySelector('.michelle');
const sigSect = document.getElementById('sig-section-event');

lightShareBtn.addEventListener('click', function() {
  nameDate.style.visibility = 'hidden';
  profilePic.style.visibility = 'hidden';
  sigSect.style.visibility = 'visible';
})      
 
darkShareBtn.addEventListener('click', function() {
  nameDate.style.visibility = 'visible';
  profilePic.style.visibility = 'visible';
  sigSect.style.visibility = 'hidden';
})

