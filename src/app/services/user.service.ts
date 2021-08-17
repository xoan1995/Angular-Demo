import {Injectable} from '@angular/core';
import {IUser} from '../user/userInterFace';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/';
    users: IUser[] =[];

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + 'users');
  }

  add(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.url + 'users', user);
  }

  findUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.url + 'users/' + id);
  }

  update(user: Object, idUser: number) {
    return this.http.put(this.url + '/' + idUser + '/update', (user));
  }

  delete(idUser: number): Observable<IUser> {
    return this.http.delete<IUser>(this.url + 'users/' + idUser);
  }
  searchUser(textSearch: string) {
    this.getUser().subscribe(value => {
      this.users = value;
    });
    console.log(this.users.filter(user =>  user.nickName.indexOf(textSearch) !== -1 ));
    return this.users.filter(user =>  user.nickName.includes(textSearch) );
  }
}