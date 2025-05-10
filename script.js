fetch('gabe0529.github.io/assets/components/navbar.html')
    .then(res => res.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
});

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