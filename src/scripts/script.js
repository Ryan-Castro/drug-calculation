function $(element){
    return document.querySelector(element)
}

function calculate(){
    const D = Number($("#desidratacao").value)
    const W = Number($("#peso").value)
    const Y = (D/100) * W * 10
    const Z = Y / 6
    const T = Z * 60
    const X = T / 60
    const res = X / 6 

    $("main").innerHTML = `
        <p>${D}% X ${W.toFixed(2)}Kg X ${10}ml = <span class="res red">${Y.toFixed(2)}</span></p>
        <p><span class="red">${Y.toFixed(2)}</span> / 6 = <span class="res blue">${Z.toFixed(2)}</span></p>
        <p><span class="blue">${Z.toFixed(2)}</span> X 60 = <span class="res yellow">${T.toFixed(2)}</span></p>
        <p><span class="yellow">${T.toFixed(2)}</span> / 60 = <span class="res green">${X.toFixed(2)}</span></p>
        <p><span class="green">${X.toFixed(2)}</span> / 6 = <span class="res">${res.toFixed(2)}</span></p>
        <input type="button" value="Começar novamente" onclick="reloadPage()">
    `
}

function reloadPage(){
    location.reload()
}
