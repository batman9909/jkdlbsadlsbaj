var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Motion')
    .pauseFor(500)
    .deleteAll()
    .typeString('over')
    .pauseFor(500)
    .deleteAll()
    .typeString('emotion.')
    .pauseFor(500)
    .deleteAll()
    .start();