//Clase cronomero
class Crono{
    // Constructor. hay que indicar el 
    //display donde mostrar el cronometro
    constructor(display) {
        this.display = display;
        
        //Tiempo
        this.cent = 0, //Centesimas
        this.seg = 0, //Segundos
        this.min = 0, //Minutos
        this.time = 0; //Temporizador asociado
    }

// Metodo que se ejecuta en una centesima
Tic() {
    //Incrementar en una centesima
    this.cent +=1;

    //100 centesimas hacen 1 segundo
    if (this.cent == 100) {
        this.seg += 1;
        this.cent = 0;
    }
    //60 segundos es un minuto 
    if (this.seg == 60) {
        this.min = 1;
        this.seg = 0;
    }
    //Mostrar el valor actual
    this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent
}

//Arrancar el cronometro
start() {
    if (!this.timer) {
        //Lanzar el temporizador para que llame
        //al metodo tic cada 10ms(una centesima)
        this.timer = setInterval(() => {
            this.tic();
        }, 10);
    }
}

//Parar el cronometro
stop() {
    if(this.timer) {
        clearInterval(this.timer);
        this.timer = null;
    }
}

//Reset del cronometro
reset() {
    this.cent = 0;
    this.seg = 0;
    this.min = 0;

    this.display.innerHTML = "0:0:0";
    }
}