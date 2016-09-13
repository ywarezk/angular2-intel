/**
 * Root component
 */

import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [
        require('bootstrap/dist/css/bootstrap.css')
    ]
})
export class AppComponent{
    helloPokemonVariable : string = 'hello pikachu';
    printHtml : string = `
        <span>Color me red</span>
    `;
    pikachuImage : string = 'http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035';
    exampleTwoWay : string = 'hello world';
    passToGreeting : string = 'im passing variable from parent to greeting';

    items = {hello: 'world', type: 'foo'};

    ifExample : boolean = false;
    classExample : any = {
        'btn': true,
        'btn-primary': true
    }

    getHelloString() : string{
        return 'hello world';
    }

    greetingFunction(e){
        debugger;
        alert('hello world');
    }

    deleteGreetingFromParent(e){
        console.log('deleting the element');
        e.target.remove();
    }

    changeStyleOfButton(){
        this.ifExample = !this.ifExample;
        this.classExample['btn-primary'] = !this.classExample['btn-primary'];
    }

}
