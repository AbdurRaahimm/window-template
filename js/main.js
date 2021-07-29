
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const btnCon = document.querySelector('#btnCon')
const HomeContent = document.querySelector('#HomeContent')
const AboutContent = document.querySelector('#AboutContent')
const ControlContent = document.querySelector('#ControlContent')


home.addEventListener('click', ()=>{
    new WinBox({
        title: 'Home Page',
        top:70,
        mount:HomeContent,
        onfocus: function(){
            this.setBackground("#000");
        },
        onblur: function(){
            this.setBackground("#999");
        },
        onresize: function(width, height){},
        onmove: function(x, y){},
        onclose: function(force){
            return !confirm("Close window?");
        }
    })
});



about.addEventListener('click', ()=>{
    new WinBox({
        title: 'About Page',
        top:90,
        left:90,
        mount:AboutContent,
        onfocus: function(){
            this.setBackground("#000");
        },
        onblur: function(){
            this.setBackground("#999");
        },
        onresize: function(width, height){},
        onmove: function(x, y){},
        onclose: function(force){
            return !confirm("Close window?");
        }
    })
});

btnCon.addEventListener('click', ()=>{
    new WinBox({
        title: 'Action Page',
        top:120,
        left:100,
        mount:ControlContent,
        onfocus: function(){
            this.setBackground("#000");
        },
        onblur: function(){
            this.setBackground("#999");
        },
        onresize: function(width, height){},
        onmove: function(x, y){},
        onclose: function(force){
            return !confirm("Close window?");
        }
    })
});


const winbox = new WinBox("Controls", {

    mount: document.getElementById("controls"),
    border: 4,
    onclose: function(force){
        return !force && !confirm("Close window?");
    }
});

window.buttons = {

    minimize: function(){

        winbox.minimize();
    },
    maximize: function(){

        winbox.maximize();
    },
    fullscreen: function(){

        winbox.fullscreen();
    },
    move: function(){

        winbox.move("center", "center");
    },
    resize: function(){

        winbox.resize("50%", "50%");
    },
    title: function(){

        winbox.setTitle("Title-" + Math.random());
    },
    color: function(){

        winbox.setBackground(
            "rgb(" + (Math.random() * 255 | 0) + "," +
                     (Math.random() * 255 | 0) + "," +
                     (Math.random() * 255 | 0) + ")"
        );
    },
    modal: function(){

        winbox.body.parentNode.classList.toggle("modal");
    },
    close: function(){

        winbox.close();
    },
    force_close: function(){

        winbox.close(true);
    }
};