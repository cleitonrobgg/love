class songs {

    constructor() {


        this._frase1audio = new Audio('Frase-1.mp3')
        this._frase2audio = new Audio('Frase-2.mp3')
        this._frase3audio = new Audio('Frase-3.mp3')

        this._frase1El = document.getElementById("frase1")
        this._frase2El = document.getElementById("frase2")
        this._frase3El = document.getElementById("frase3")

        this.frase1Events()
        this.frase2Events()
        this.frase3Events()
    
    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false)
        })
    }

    frase1Events() {

        this.addEventListenerAll(this._frase1El, "click drag", e => {

            this._frase1audio.currentTime = 0
            this._frase1audio.play()
            this._frase2audio.pause()  
            this._frase3audio.pause()
        })
    }

    frase2Events() {

        this.addEventListenerAll(this._frase2El, "click drag", e => {

            this._frase2audio.currentTime = 0
            this._frase2audio.play()  
            this._frase1audio.pause()  
            this._frase3audio.pause()

        })
    }

    frase3Events() {

        this.addEventListenerAll(this._frase3El, "click drag", e => {

            this._frase3audio.currentTime = 0
            this._frase3audio.play() 
            this._frase2audio.pause()  
            this._frase1audio.pause() 
        })
    }

}

let audios = new songs()