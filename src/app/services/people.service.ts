import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Photo {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: number;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getInfo(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url);
  }
}
