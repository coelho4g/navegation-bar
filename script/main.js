theme = document.querySelector('img');
theme.onclick = function(){
    src = theme.getAttribute('src')
    if(src === '../images/dom.png'){
        theme.setAttribute('src', '../images/lua.png')
        document.getElementById('theme').style.background = 'white'
        document.querySelector('body').style.background = 'black'
        document.querySelector('body').style.color = 'white'
    }else{
        theme.setAttribute('src', '../images/dom.png')
        document.getElementById('theme').style.background = 'white'
        document.querySelector('body').style.background = 'white'
        document.querySelector('body').style.color = 'black'
    }
}