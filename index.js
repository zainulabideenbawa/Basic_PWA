
console.log("HELLOO PWA")
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}

function getData() {
    fetch("")
        .then(function (response) {
            return response.json()
        })
        .then(function ())
        .catch(function (err) {
            console.log("Error in getting data")
        })
}