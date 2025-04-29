import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _localstorage: LocalstorageService) { }

  logout(): void {
    this._localstorage.remove("accessToken");
    this._localstorage.remove("role");
    window.location.reload();
  }
}
