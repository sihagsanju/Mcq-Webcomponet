import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

const showdown: any = require('showdown');
const showdownHighlight: any = require('showdown-highlight');

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: [
    './playback.component.css',
    '../../../node_modules/highlight.js/styles/github.css'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PlaybackComponent {
  public htmlText: string;
  public questionObject: any;
  public questionText: any;
  public selectedOption = '';
  @Output() action = new EventEmitter<any>();

  // @Input() title: string;
  @Input() 
  set question(value: string) {
    console.log('This is the question response', JSON.parse(value));
    this.questionObject = JSON.parse(value);
    const converter = new showdown.Converter({
      extensions: [showdownHighlight],
      simpleLineBreaks: true
    });
    this.htmlText = converter.makeHtml(this.questionObject.questionText);

  }
  get question(): string {
     return this.questionObject;
  }
  // @Input()
  // set text(value: string) {
  //   console.log('Called in text input ');
  //   const converter = new showdown.Converter({
  //     extensions: [showdownHighlight],
  //     simpleLineBreaks: true
  //   });
  //   this.htmlText = converter.makeHtml(value);
  //   console.log(`Setting Html Text ${this.htmlText}`);
  // }

  // get text(): string {
  //   return this.htmlText;
  // }

  // @Input()
  // set options(value: any) {
  //   this.json = value;
  //   this.newJson = this.json.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
  //   this.data = JSON.parse(this.newJson);
  //   this.data.map(data => {
  //     console.log('Data inside map is', data);
  //   });
  // }

  // get options(): any {
  //    return this.data;
  // }
  // @Input() hint: string;

  // public json: any;
  // public newJson: any;
  // public data = [];
  // public converter: any;

  onChange(e) {
    this.selectedOption = e.target.value;
    this.action.emit(this.selectedOption);
  }
}

