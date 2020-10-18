import '@material/mwc-button';
import '@material/mwc-drawer';
import '@material/mwc-fab';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-top-app-bar-fixed';

function shuffleReviews() {
  // Randomize the order of all quotes, using a Fisherâ€“Yates shuffle
  // based on http://stackoverflow.com/a/11972692/220039
  var quotes = document.getElementById('reviewsList');
  for (var i = quotes.children.length; i >= 0; i--) {
      quotes.appendChild(quotes.children[Math.random() * i | 0]);
  }

  // Make sure the first quote is always a (random) favorite quote
  var favQuotes = document.querySelectorAll('[data-fav]');
  quotes.insertBefore(favQuotes[Math.random() * favQuotes.length | 0], quotes.firstChild);
}


const drawer = document.getElementsByTagName('mwc-drawer')[0];
if (drawer) {
  const container = drawer.parentNode;
  container.addEventListener('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
}

// Shuffle reviews when the Shuffle FAB is clicked
const shuffleFAB = document.getElementById('shuffleFAB');
shuffleFAB.addEventListener('click', () => {
  shuffleReviews();
});

// Shuffle reviews on page load
shuffleReviews();