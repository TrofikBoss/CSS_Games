
let levelselect = 1;
let leveldata = [[{"lineone": ["justify-content: flex-end;"]}], [{"linetwo": ["justify-content: flex-end;"]}], [{"linethree": ["justify-content: space-between; align-items: flex-end;", "align-items: flex-end; justify-content: space-between;"]}], [{"linefour": ["flex-direction: column;justify-content: space-between;", "flex-direction: column-reverse;justify-content: space-between;", "justify-content: space-between;flex-direction: column;", "justify-content: space-between;flex-direction: column-reverse;"]}], [{"linefive": ["flex-direction: column; justify-content: space-between; align-items: flex-end;", "flex-direction: column; align-items: flex-end; justify-content: space-between;", "justify-content: space-between; flex-direction: column; align-items: flex-end;", "justify-content: space-between; align-items: flex-end; flex-direction: column;", "align-items: flex-end; flex-direction: column; justify-content: space-between;", "align-items: flex-end; justify-content: space-between; flex-direction: column;"]}], [{"linesix": ["justify-content: space-between;"]}, {"lineseven": ["order: 3;"]}, {"lineeight": ["order: 2;"]}, {"linenine": ["order: 1;"]}], [{"lineten": ["align-self: center;"]}, {"lineeleven": ["align-self: flex-end;"]}], [{"linetwelve": ["flex-wrap: wrap;"]}], [{"linethirteen": ["flex-flow: column wrap;", "flex-flow: wrap column;"]}], [{"linefourteen": ["flex-wrap: wrap; align-content: flex-end;", "align-content: flex-end; flex-wrap: wrap;"]}], [{"linefiveteen": ["flex-direction: row-reverse; align-content: flex-end;", "align-content: flex-end; flex-direction: row-reverse;"]}], [{"linesixteen": ["universal"]}]];


function checkwin() {
    /*for (let x in leveldata[levelselect - 1]) {  
        document.querySelectorAll(`.code-input.level-${levelselect}`).forEach(function(inp) {
            if (leveldata[levelselect - 1][x][inp.id] != undefined) {
                for (let z = 0; z < leveldata[levelselect - 1][x][inp.id].length; z++) {
                    if ((leveldata[levelselect - 1][x][inp.id][z]) != "universal") {
                        if ((leveldata[levelselect - 1][x][inp.id][z]).replaceAll(" ", "") == (((((((inp.value).replaceAll("flex-wrap: wrap-reverse", "flex-wrap: wrap")).replaceAll("\n", "").replaceAll("align-items:end", "align-items:flex-end")).replaceAll("justify-content:end", "justify-content:flex-end")).replaceAll("column-reverse", "column")).replaceAll("align-self:end", "align-self:flex-end")).replaceAll("align-content: end", "align-content: flex-end")).replaceAll(" ", "")) {
                            truee++;
                            break;
                        }
                    } else {
                        let truecat = 0;
                        let countcat = 0;
                        document.querySelectorAll(`.cat.level-${levelselect}`).forEach(function(catt) {
                            countcat += 1;
                            let x1 = true;
                            document.querySelectorAll(`.mouse.level-${levelselect}`).forEach(function(mouss) {
                                if (x1 == true) {
                                    if (Math.abs((catt.offsetLeft + 100) - (mouss.offsetLeft + 50)) < 50) {
                                        if (Math.abs((catt.offsetTop + 100) - (mouss.offsetTop + 50)) < 50) {
                                            truecat++;
                                            x1 = false
                                        }
                                    }    
                                }
                            })
                        })
                        console.log(truecat);
                        if (countcat == truecat) {
                            truee = countel;
                            console.log(1);
                        }
                    }   
                }
            } 
        })
    }*/
    //let countel = leveldata[levelselect - 1].length;
    let truee = 0;
    let truecat = 0;
    let countcat = 0;
    document.querySelectorAll(`.cat.level-${levelselect}`).forEach(function(catt) {
        countcat += 1;
        let x1 = true;
        if (catt.classList.contains("typecat")) {
            let typecatt;
            if (catt.classList.contains("type1")) {
                typecatt = "type1";
            } else if (catt.classList.contains("type2")) {
                typecatt = "type2";
            } else if (catt.classList.contains("type3")) {
                typecatt = "type3";
            } else if (catt.classList.contains("type4")) {
                typecatt = "type4";
            } 
            document.querySelectorAll(`.mouse.level-${levelselect}.${typecatt}`).forEach(function(mouss) {
                if (x1 == true) {
                    if (Math.abs((catt.offsetLeft + 100) - (mouss.offsetLeft + 50)) < 80) {
                        if (Math.abs((catt.offsetTop + 100) - (mouss.offsetTop + 50)) < 80) {
                            truecat++;
                            x1 = false
                        }
                    }    
                }
            })
        } else {
            document.querySelectorAll(`.mouse.level-${levelselect}`).forEach(function(mouss) {
                if (x1 == true) {
                    if (Math.abs((catt.offsetLeft + 100) - (mouss.offsetLeft + 50)) < 80) {
                        if (Math.abs((catt.offsetTop + 100) - (mouss.offsetTop + 50)) < 80) {
                            truecat++;
                            x1 = false
                        }
                    }    
                }
            })
        }
    })
    if (countcat == truecat) {
        document.querySelectorAll(`.nofood.level-${levelselect}`).forEach(function(changeimg) {
            changeimg.classList.remove("nofood");
            changeimg.classList.add("food");
        })
        document.querySelectorAll(".button-next").forEach(function(butnext) {
            butnext.classList.remove("blocked");
        })
    } else {
        document.querySelectorAll(`.food.level-${levelselect}`).forEach(function(changeimg) {
            changeimg.classList.remove("food");
            changeimg.classList.add("nofood");
        })
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
        menu.innerHTML = `<p>Уровень ${level} из 12</p><div class="arrow-down"></div>`
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
        levelobjj.classList.remove("visible");
    })
    document.querySelectorAll(`.level-${level}`).forEach(function(levelobj) {
        levelobj.classList.remove("hidden");
        levelobj.classList.add("visible");
    })
    document.querySelectorAll(".game-page__menu-right").forEach(function(but1) {
        if (levelselect != 12) {
            but1.classList.remove("blocked");
        } else {
            but1.classList.add("blocked");
        }
    })
    document.querySelectorAll(".button-next").forEach(function(but1) {
        if (levelselect != 12) {
            but1.classList.remove("hidden");
        } else {
            but1.classList.add("hidden");
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
            if (levelselect < 12) {
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