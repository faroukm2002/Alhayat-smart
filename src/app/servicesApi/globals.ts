import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User, Basket} from '../interfaces.module';
import { MOCK_CATEGORIES_DATA } from './mock-data';

@Injectable()
export class Globals {
  private lang: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private categories: BehaviorSubject<object> = new BehaviorSubject<object>(MOCK_CATEGORIES_DATA);
  private basket: BehaviorSubject<Basket> = new BehaviorSubject<Basket>(null);

  public setLang(lang) {
    this.lang.next(lang);
  }

  public getLang() {
    return this.lang.asObservable();
  }

  public setCategories(lang) {
    this.categories.next(lang);
  }

  public getCategories() {
    return this.categories.asObservable();
  }

  public setUser(user) {
    if (user) {

      localStorage.setItem('user', JSON.stringify(user));
    }
    this.user.next(user);
  }

  public getUser() {
    return this.user.asObservable();
  }

  public setBasket(basket) {
    this.basket.next(basket);
  }
  public getBasket() {
    return this.basket.asObservable();
  }
}
