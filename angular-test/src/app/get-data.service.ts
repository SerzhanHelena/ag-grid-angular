import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Item } from "./models/Item";
import { ResponseModel } from './models/ResponseModel';

const url:string = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(url)
   .pipe(map(data =>  {
      const response : ResponseModel = {
        etag : data['etag'],
        items: data['items'],
        kind: data['kind'],
        nextPageToken: data['nextPageToken'],
        pageInfo: data['pageInfo'],
        regionCode: data['regionCode']
      };
      
      let dataList :Item[] = response.items;
      return dataList; 
   }));
   
  }

}
