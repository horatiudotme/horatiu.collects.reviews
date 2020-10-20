import '@material/mwc-drawer';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-tab-bar';
import '@material/mwc-tab';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
// import '@material/mwc-fab';

const reviewList = document.getElementById('reviewList');

// Randomize the order of all reviews, using a Fisher-Yates shuffle
// based on http://stackoverflow.com/a/11972692/220039
function shuffleReviews() {
  for (var i = reviewList.children.length; i >= 0; i--) {
      reviewList.appendChild(reviewList.children[Math.random() * i | 0]);
  }

  // Make sure the first quote is always a (random) favorite quote, if we have enough favorites to cycle through
  const favQuotes = document.querySelectorAll('[data-fav]');
  if (favQuotes.length >= 5) {
    reviewList.insertBefore(favQuotes[Math.random() * favQuotes.length | 0], reviewList.firstChild);
  }
}

// Initialize the drawer
const drawer = document.getElementsByTagName('mwc-drawer')[0];
if (drawer) {
  const container = drawer.parentNode;
  container.addEventListener('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
}

// Shuffle reviews when the Shuffle button is clicked
const shuffleButton = document.getElementById('shuffleButton');
shuffleButton.addEventListener('click', () => {
  shuffleReviews();
});

// Filter reviews when tab bars are clicked
const reviewTypeTabBar = document.getElementById('reviewTypeTabBar');
reviewTypeTabBar.addEventListener('MDCTabBar:activated', (e) => {
  document.body.dataset.filter = e.detail.index;
});

// Shuffle reviews on page load
shuffleReviews();
