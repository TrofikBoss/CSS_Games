document.addEventListener("DOMContentLoaded", function() {
    function menuupdate() {
        document.querySelectorAll(".game-page__menu-centre").forEach(function(menu) {
            menu.innerHTML = `<p>Уровень ${levelselect} из 10</p><div class="arrow-down"></div>`
        })
        document.querySelectorAll(".game-menu-item").forEach(function(item) {
            if (item.innerHTML != levelselect) {
                item.classList.remove("select");
            } else {
                item.classList.add("select");
            }
        });
    }
    function menucheckbutton() {
        document.querySelectorAll(".game-page__menu-right").forEach(function(but1) {
            if (levelselect != 10) {
                but1.classList.remove("blocked");
            } else {
                but1.classList.add("blocked");
            }
        })
        document.querySelectorAll(".game-page__menu-left").forEach(function(but1) {
            if (levelselect != 1) {
                but1.classList.remove("blocked");
            } else {
                but1.classList.add("blocked");
            }
        })
    }
    let levelselect = 1;
    document.querySelectorAll(".game-page__menu-left").forEach(function(but) {
        but.addEventListener("click", function(cl) {
            if (levelselect > 1) {
                levelselect--;
                menucheckbutton();
                menuupdate();
            }
        })
    })
    document.querySelectorAll(".game-page__menu-right").forEach(function(but) {
        but.addEventListener("click", function(cl) {
            if (levelselect < 10) {
                levelselect++;
                menucheckbutton();
                menuupdate();
            }
        })
    })
    document.querySelectorAll(".game-page__menu-centre").forEach(function(menu_but) {
        menu_but.addEventListener("click", function(cl) {
            document.querySelectorAll(".game-page__menu-level").forEach(function(menu) {
                menu.classList.toggle("close");
            })
        })
    })
    document.querySelectorAll(".game-menu-item").forEach(function(but) {
        but.addEventListener("click", function(click) {
            document.querySelectorAll(".game-menu-item").forEach(function(but1) {
                but1.classList.remove("select");
            });
            but.classList.add("select");
            levelselect = Number(but.innerHTML);
            menucheckbutton();
            menuupdate();
        })
    })
})
