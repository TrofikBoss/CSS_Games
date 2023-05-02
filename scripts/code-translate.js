document.querySelectorAll(".code-input").forEach(function(codeinp) {
    if (!document.querySelector(`style.${(codeinp.name).replace("line-", "")}`)) {
        document.body.innerHTML += `<style class="${(codeinp.name).replace("line-", "")}"></style>`;
    }
})
function checkinputs() {
    document.querySelectorAll(".levelobj.visible textarea").forEach(function(x) {
        document.querySelectorAll(`style.${(x.name).replace("line-", "")}`).forEach(function(st) {
            st.innerHTML = `.${(x.name).replace("line-", "")} {${x.value}}`;
        }) 
    })
    
}
function inpchange(x) {
       
}
function maxlines() {
    document.querySelectorAll("textarea").forEach(function(texx) {
        let maxlines = texx.rows;
        var lines = texx.value.split("\n");
        if (lines.length > maxlines) {
            texx.value = lines.slice(0, maxlines).join("\n");
        }
    })
}
setInterval(() => {
    maxlines();
    checkinputs();
}, 100);
