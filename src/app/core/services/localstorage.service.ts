import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public set(key: string, value: any) {
    try {
      localStorage.setItem(key,(value));
    } catch (error) {
      console.log('Error saving to localStorage', error);
    }
  }

  public get(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.log('Error getting data from localStorage', error);
      return null;
    }
  }
}
