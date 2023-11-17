class songs {

    constructor() {


        this._poema1audio = new Audio('Poema-1.mp3')
        this._poema2audio = new Audio('Poema-2.mp3')
        this._poema3audio = new Audio('Poema-3.mp3')

        this._poema1El = document.getElementById("poema1")
        this._poema2El = document.getElementById("poema2")
        this._poema3El = document.getElementById("poema3")

        this.poema1Events()
        this.poema2Events()
        this.poema3Events()
    
    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false)
        })
    }

    poema1Events() {

        this.addEventListenerAll(this._poema1El, "click drag", e => {

            this._poema1audio.currentTime = 0
            this._poema1audio.play()
            this._poema2audio.pause()  
            this._poema3audio.pause()
        })
    }

    poema2Events() {

        this.addEventListenerAll(this._poema2El, "click drag", e => {

            this._poema2audio.currentTime = 0
            this._poema2audio.play()  
            this._poema1audio.pause()  
            this._poema3audio.pause()

        })
    }

    poema3Events() {

        this.addEventListenerAll(this._poema3El, "click drag", e => {

            this._poema3audio.currentTime = 0
            this._poema3audio.play() 
            this._poema2audio.pause()  
            this._poema1audio.pause() 
        })
    }

}

let audios = new songs()