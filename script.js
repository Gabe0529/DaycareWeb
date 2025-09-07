// NAVBAR FUNCTIONALITY --------------------------------------------------------------------------
// Set up navbar for all pages
const basePath = location.hostname.includes('github.io') 
  ? '/DaycareWeb' 
  : '';

fetch(`${basePath}/assets/components/navbar.html`)
    .then(res => res.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
    setupNavbarLinks();
});

// setup navbar links for each page to avoid github problems
function setupNavbarLinks() {
  const prefix = location.hostname.includes('github.io') ? '/DaycareWeb/' : '../../';
  document.getElementById('Home').href = prefix + 'index.html';
  document.getElementById('Curriculum').href = prefix + 'pages/curriculum.html';
  document.getElementById('Enrollment').href = prefix + 'pages/enrollment.html';
  document.getElementById('About').href = prefix + 'pages/about.html';

  // setup navbar css
  let css = document.getElementById("CssLink");
  if (!css) {
    css = document.createElement("link");
    css.rel = "stylesheet";
    css.id = "CssLink";
    document.head.appendChild(css);
  }
  css.href = prefix + 'assets/components/comoponents.css';

  document.getElementById("CssLink").href = prefix + 'assets/components/components.css';
}

// hamburger button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myBtn").classList.toggle("none");
    document.getElementById("logo").style.opacity = "0";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
    if (!e.target.matches('.dropbtn')) {
        var myBtn = document.getElementById("myBtn");
        var logo = document.getElementById("logo");
        if (myBtn.classList.contains('none') && logo.style.opacity == "0") {
          myBtn.classList.remove('none');
          logo.style.opacity = "1";
      }
    }
}

// FOOTER Functionality -------------------------------------------------------------------------
fetch(`${basePath}/assets/components/footer.html`)
    .then(res => res.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
});
