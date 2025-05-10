const basePath = location.hostname.includes('github.io') 
  ? '/DaycareWeb' 
  : '';

fetch(`${basePath}/assets/components/navbar.html`)
    .then(res => res.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
    setupNavbarLinks();
});

function setupNavbarLinks() {
  const prefix = location.hostname.includes('github.io') ? '/DaycareWeb/' : '../../';
  document.getElementById('Home').href = prefix + 'index.html';
  document.getElementById('Curriculum').href = prefix + 'pages/curriculum.html';
  document.getElementById('Enrollment').href = prefix + 'pages/enrollment.html';
  document.getElementById('About').href = prefix + 'pages/about.html';


  let css = document.getElementById("CssLink");
  if (!css) {
    css = document.createElement("link");
    css.rel = "stylesheet";
    css.id = "CssLink";
    document.head.appendChild(css);
  }
  css.href = prefix + 'assets/components/navbar.css';

  document.getElementById("CssLink").href = prefix + 'assets/components/navbar.css';
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myBtn").classList.toggle("none");
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
        if (myBtn.classList.contains('none')) {
        myBtn.classList.remove('none');
      }
    }
}