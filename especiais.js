class song {

    constructor() {


        this._esp1audio = new Audio('Especial-1.mp3')
        this._esp2audio = new Audio('Especial-2.mp3')
        this._esp3audio = new Audio('Especial-3.mp3')

        this._esp1El = document.getElementById("esp1")
        this._esp2El = document.getElementById("esp2")
        this._esp3El = document.getElementById("esp3")

        this.esp1Events()
        this.esp2Events()
        this.esp3Events()
    
    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false)
        })
    }

    esp1Events() {

        this.addEventListenerAll(this._esp1El, "click drag", e => {

            this._esp1audio.currentTime = 0
            this._esp1audio.play()
            this._esp2audio.pause()  
            this._esp3audio.pause()
        })
    }

    esp2Events() {

        this.addEventListenerAll(this._esp2El, "click drag", e => {

            this._esp2audio.currentTime = 0
            this._esp2audio.play()  
            this._esp1audio.pause()  
            this._esp3audio.pause()

        })
    }

    esp3Events() {

        this.addEventListenerAll(this._esp3El, "click drag", e => {

            this._esp3audio.currentTime = 0
            this._esp3audio.play() 
            this._esp2audio.pause()  
            this._esp1audio.pause() 
        })
    }

}

let audio = new song()