export function wait (ms) {
    return new Promise((revolve) => {
        setTimeout(revolve, ms)
    })
}