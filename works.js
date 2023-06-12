function open_tab(evt, tab_name) {
    var i, tab, tab_link;

    tab = document.getElementsByClassName("tab");

    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }

    tab_link = document.getElementsByClassName("tab-link");

    for ( i = 0; i < tab_link.length; i++) {
        tab_link[i].className = tab_link[i].className.replace(" active", "");
    }

    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}