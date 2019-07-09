import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatRadioModule } from '@angular/material/radio';
import { PlaybackComponent } from './playback/playback.component';

@NgModule({
  declarations: [
    PlaybackComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [ PlaybackComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const el = createCustomElement(PlaybackComponent, { injector: this.injector });
    customElements.define('mcq-cmp', el);
   }
 }
