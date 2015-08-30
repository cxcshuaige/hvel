var Simplehttp = require('simplehttp');
var simplehttp = new Simplehttp();
var velocity = require('velocity');
var Engine = velocity.Engine;
var engine = new Engine( {
    template : './views/tests/hello.vm'
})
var result = engine.render({
    string: 'abcde',
    list: [1, 2, 3],
    map: {
        'a': 'value-a',
        'b': 'value-b',
        'enough': true
    }
})


simplehttp.create(result)