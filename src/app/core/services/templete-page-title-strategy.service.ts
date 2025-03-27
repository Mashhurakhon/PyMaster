import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TempletePageTitleStrategyService extends TitleStrategy{

  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    if(pageTitle) {
      this.title.setTitle(`${pageTitle} | PyMaster`);
    }
  }
}
