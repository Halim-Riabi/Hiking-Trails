import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8085/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCategory(categoryDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/admin/category', categoryDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategories(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin',{
      headers: this.createAuthorizationHeader(),
    })
  }

  addTrail(trailDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/admin/trail', trailDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllTrails(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/trails',{
      headers: this.createAuthorizationHeader(),
    })
  }


  getAllTrailsByName(name:any): Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/search/${name}`,{
      headers: this.createAuthorizationHeader(),
    })
  }


  deleteTrail(trailId:any): Observable<any>{
    return this.http.delete(BASIC_URL + `api/admin/trail/${trailId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }




  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }

}
