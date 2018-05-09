import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, delay, pluck} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../post/post/post';
@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  resp:Response;
  constructor(private http: HttpClient) { }
  getResourceServices<T>(url: string, property: string): Observable<T[]> {
		return this.http.get<T[]>(url).pipe(
			map((collection: T[]) => {
        return collection.map((data) => {
          return data[property];
        });
			})
    );
  }
}
