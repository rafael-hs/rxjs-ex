const { Observable } = require("rxjs")


const obs = Observable.create(subscriber => {
    subscriber.next('RXJS')
    subscriber.next('é')
    subscriber.next('muito')
    subscriber.next('muitoooo')
    subscriber.next('hehe 3 segs')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        throw "eita";
    }


})

obs.subscribe(
    texto => console.log(texto),
    error => console.log(error),
    () => console.log('Fim!')) 