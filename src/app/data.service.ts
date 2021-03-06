import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

result:any;

  constructor(private _http: HttpClient) { }
  
  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR')
        .map(result => this.result = result);
  }


}
