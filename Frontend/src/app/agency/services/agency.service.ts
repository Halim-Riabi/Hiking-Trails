import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';


const BASIC_URL = "http://localhost:8085/";

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }

  
  addCategory(categoryDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/agency/category', categoryDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategories(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/agency',{
      headers: this.createAuthorizationHeader(),
    })
  }

  addTrail(trailDto:any): Observable<any>{
    return this.http.post(BASIC_URL + 'api/agency/trail', trailDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  updateTrail(trailId:any, trailDto:any): Observable<any>{
    return this.http.put(BASIC_URL + `api/agency/trail/${trailId}`, trailDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllTrails(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/agency/trails',{
      headers: this.createAuthorizationHeader(),
    })
  }

  getTrailById(trailId): Observable<any>{
    return this.http.get(BASIC_URL + `api/agency/trail/${trailId}`,{
      headers: this.createAuthorizationHeader(),
    })
  }


  getAllTrailsByName(name:any): Observable<any>{
    return this.http.get(BASIC_URL + `api/agency/search/${name}`,{
      headers: this.createAuthorizationHeader(),
    })
  }


  deleteTrail(trailId:any): Observable<any>{
    return this.http.delete(BASIC_URL + `api/agency/trail/${trailId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  // if something goes wrong try changing the link with these '' instead of these ``
  getPlacedBookings(): Observable<any>{
    return this.http.get(BASIC_URL + `api/agency/placedBookings`, {
      headers: this.createAuthorizationHeader(),
    })
  }


  changeBookStatus(bookId: number, status: string): Observable<any>{
    return this.http.get(BASIC_URL + `api/agency/book/${bookId}/${status}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  updatePassword(userId: String, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put(BASIC_URL+`api/agency/${userId}/password`, { userId, oldPassword, newPassword }, {
      headers: this.createAuthorizationHeader(),
    });
  }




  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }

}
