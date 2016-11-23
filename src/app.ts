import {bindable} from "aurelia-framework";

export class App {
  // @bindable message = 'Hello world';
  @bindable text = ko.observable('foo');

  // @bindable foo = {bar:'Quick brown fox'};

  update(){
    // this.message = this.reverse(this.message);
    this.text(this.reverse(this.text()));
    // this.foo.bar = this.reverse(this.foo.bar);
    console.log('text: ' + this.text());
    // console.log('foo.bar: ' + this.foo.bar);
  }

  reverse(text:string){
    return text.split('').reverse().join('');
  }
}
