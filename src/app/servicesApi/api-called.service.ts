import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
import { MOCK_HOME_DATA, MOCK_CITIES_DATA, MOCK_CATEGORIES_DATA, MOCK_PRODUCTS_DATA, MOCK_PRODUCT_DETAILS_DATA, MOCK_BRANDS_DATA, MOCK_BASKET_DATA, MOCK_SETTINGS_DATA, MOCK_ABOUT_US_DATA, MOCK_PARTNERS_DATA, MOCK_SUCCESS_RESPONSE, MOCK_HISTORY_DATA } from './mock-data';
import {NgxSpinnerService} from 'ngx-spinner';

const baseUrl = 'https://cp.alhayatsmart.com/api/';

@Injectable()

export class ApiCalledService {
  constructor(private http: Http, private spinner: NgxSpinnerService) {
  }
  getHome(lang: any): Observable<any> {
    this.spinner.show();
    // Simulate an API call
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_HOME_DATA);
  }

  getCities(lang: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_CITIES_DATA);
  }

  getCategories(lang: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_CATEGORIES_DATA);
  }

  getSettings(): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_SETTINGS_DATA);
  }

  changeProfileImage(selectedFile: any, api_token: string): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    // In a real mock, you might want to handle the file, but for now, we'll just return success.
    return of(MOCK_SUCCESS_RESPONSE);
  }

  getProducts(lang: any, categoryId: any, sortBy: any, search: any, priceRange: any, brands: string): Observable<any> {
    return of(MOCK_PRODUCTS_DATA);
  }

  nextProducts(url: string, lang: any, categoryId: any, sortBy: any, search: any, priceRange: any, brands: string): Observable<any> {
    // In a real scenario, you might have pagination logic here.
    // For now, returning an empty set to signify no more products.
    return of({ data: [], links: { next: null } });
  }

  getBrands(lang: any, categoryId: any): Observable<any> {
    return of(MOCK_BRANDS_DATA);
  }

  getProduct(lang: any, productId: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_PRODUCT_DETAILS_DATA);
  }

  // tslint:disable-next-line:variable-name
  addToBasket(basket: any, api_token: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_SUCCESS_RESPONSE);
  }

  // tslint:disable-next-line:variable-name
  getBasket(lang: any, api_token: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_BASKET_DATA);
  }

  changeQuantity(product_id: number, api_token: any, quantity: number): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_SUCCESS_RESPONSE);
  }

  deleteFromBasket(product_id: number, api_token: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_SUCCESS_RESPONSE);
  }

  checkOut(data: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_SUCCESS_RESPONSE);
  }

  startQoutation(data: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of({ ...MOCK_SUCCESS_RESPONSE, quotation_id: 12345 });
  }
  qoutationFinalStep(data: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_SUCCESS_RESPONSE);
  }

  getAbout(lang: string): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_ABOUT_US_DATA);
  }
  getPartners(): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_PARTNERS_DATA);
  }

  getHistory(lang: any, api_token: any): Observable<any> {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 500);
    return of(MOCK_HISTORY_DATA);
  }
}
