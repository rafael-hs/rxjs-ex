const { interval } = require("rxjs");


const obs = interval(2000)

const sub = obs.subscribe(num => {
    console.log(num)
})

const sub2 = obs.subscribe(num => {
    console.log(num * 100)
})

setTimeout(() => {
    sub.unsubscribe()
    sub2.unsubscribe()
}, 6000)