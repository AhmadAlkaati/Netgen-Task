// toggling dropdown menus */
function dropDown() {
  menuButtons = document.querySelectorAll('.menu-btn');
  menuButtons.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      const dropDownMenus = document.querySelectorAll('.dropdown-menu');
      // Checking index of each menu button in order to show a specific dropdown menu when a specific menu button is clicked //
      if (index === 0) {
        dropDownMenus[0].classList.toggle('toggle-dropdown-menu');
      }
      if (index === 1) {
        dropDownMenus[1].classList.toggle('toggle-dropdown-menu');
      }
      if (index === 2) {
        dropDownMenus[2].classList.toggle('toggle-dropdown-menu');
      }
      if (index === 3) {
        dropDownMenus[3].classList.toggle('toggle-dropdown-menu');
      }
      if (index === 4) {
        dropDownMenus[4].classList.toggle('toggle-dropdown-menu');
      }
      if (index === 5) {
        dropDownMenus[5].classList.toggle('toggle-dropdown-menu');
      }
      if (index === 6) {
        dropDownMenus[6].classList.toggle('toggle-dropdown-menu');
      }
      if (index === 7) {
        dropDownMenus[7].classList.toggle('toggle-dropdown-menu');
      }
      // Changing color and background color of menu button //
      btn.classList.toggle('menu-btn-color');
    });
  });
}

// Changing view between flex and grid //
function changeView() {
  const viewBtn = document.querySelector('.view-btn');
  // Change view event's listener function //
  viewBtn.addEventListener('click', toggleView);
  function toggleView(e) {
    const viewBtnIcon = document.querySelector('.view-btn i');
    const contentHeader = document.querySelector('.content-header');
    const content = document.querySelector('.content');
    const books = document.querySelectorAll('.book');
    viewBtnIcon.classList.toggle('fa-th-list');
    viewBtnIcon.classList.toggle('fa-th');
    contentHeader.classList.toggle('hide-header');
    content.classList.toggle('grid-view');
    books.forEach((book) => {
      book.classList.toggle('book-grid');
    });
  }
}

// Run all functions //
function RunAll() {
  dropDown();
  changeView();
}
RunAll();
