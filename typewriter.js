var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


typewriter.typeString('Exiled')
    .pauseFor(200)
    .deleteAll()
    .typeString('from')
    .pauseFor(200)
    .deleteAll()
    .typeString('heaven.')
    .pauseFor(200)
    .deleteAll()
    .start();