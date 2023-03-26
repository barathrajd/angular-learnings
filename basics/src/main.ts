import { enableProdMode } from '@angular/core';
// JIT
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// // AOT
// import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
