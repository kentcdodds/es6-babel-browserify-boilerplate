import {Person} from './model/Person';
import formly from 'angular-formly';

global.app = function () {
    var christoph = new Person('Kent C.', 'Dodds');
    console.log(formly);
};
