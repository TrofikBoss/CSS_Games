
let levelselect = 1;
let leveldata = [[{"lineone": "margin-right: 10px;"}], [{"linetwo": "1"}, {"linethree": "2"}], [{"linefour": "2"}]];

function checkwin() {
    let countel = leveldata[levelselect - 1].length;
    let truee = 0;
    for (let x in leveldata[levelselect - 1]) {  
        document.querySelectorAll(".code-input").forEach(function(inp) {
            if (leveldata[levelselect - 1][x][inp.id] == inp.value) {
                truee++;
            }
        })
    }
    if (truee == countel) {
        console.log("Можно идти дальше!!!");
        document.querySelectorAll(".button-next").forEach(function(butnext) {
            butnext.classList.remove("blocked");
        })
    } else {
        document.querySelectorAll(".button-next").forEach(function(butnext) {
            butnext.classList.add("blocked");
        })
    }
}

setInterval(() => {
    checkwin();
}, 100);

function menuupdate(level) {
    document.querySelectorAll(".game-page__menu-centre").forEach(function(menu) {
        menu.innerHTML = `<p>Уровень ${level} из 10</p><div class="arrow-down"></div>`
    })
    document.querySelectorAll(".game-menu-item").forEach(function(item) {
        if (item.innerHTML != level) {
            item.classList.remove("select");
        } else {
            item.classList.add("select");
        }
    });
    document.querySelectorAll(`.levelobj`).forEach(function(levelobjj) {
        levelobjj.classList.add("hidden");
    })
    document.querySelectorAll(`.level-${level}`).forEach(function(levelobj) {
        levelobj.classList.remove("hidden");
    })
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
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".game-page__menu-left").forEach(function(but) {
        but.addEventListener("click", function(cl) {
            if (levelselect > 1) {
                levelselect--;
                menuupdate(levelselect);
            }
        })
    })
    document.querySelectorAll(".game-page__menu-right").forEach(function(but) {
        but.addEventListener("click", function(cl) {
            if (levelselect < 10) {
                levelselect++;
                menuupdate(levelselect);
            }
        })
    })
    document.querySelectorAll(".button-next").forEach(function(butnext) {
        butnext.addEventListener("click", function(cl) {
            if (!(butnext.classList.contains("blocked"))) {
                levelselect++;
                menuupdate(levelselect);
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
            menuupdate(levelselect);
        })
    })
})