import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Item } from './models/models';


@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john')
   .pipe(map(data => {
      let dataList :Item[] = data['items'];
      return dataList;
      console.log(dataList);   
   }));
   
  }

}
