
const shareBtn = document.getElementById('share-btn');

const nameDate = document.getElementById('name-date-container');
const profilePic = document.querySelector('.michelle');
const sigSect = document.getElementById('sig-section');

shareBtn.addEventListener('click', function() {
  nameDate.style.visibility = 'hidden';
  profilePic.style.visibility = 'hidden';
  sigSect.style.backgroundColor = '#48556A'
})