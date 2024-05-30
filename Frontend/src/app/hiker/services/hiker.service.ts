import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8085/";

@Injectable({
  providedIn: 'root'
})
export class HikerService {

  constructor(private http: HttpClient) { }

  // updateEmail(userId: number, email: string): Observable<any> {
  //   return this.http.put(`${BASIC_URL}api/users/${userId}/email`, { email }, {
  //     headers: this.createAuthorizationHeader(),
  //   });
  // }

  // updatePassword(userId: number, password: string): Observable<any> {
  //   return this.http.put(`${BASIC_URL}api/users/${userId}/password`, { password }, {
  //     headers: this.createAuthorizationHeader(),
  //   });
  // }
  updateEmail(userId: String, email: string): Observable<any> {
    return this.http.put(`${BASIC_URL}api/hiker/${userId}/email`, { email }, {
      headers: this.createAuthorizationHeader(),
    });
  }

  updatePassword(userId: String, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put(`${BASIC_URL}api/hiker/${userId}/password`, { oldPassword, newPassword }, {
      headers: this.createAuthorizationHeader(),
    });
  }

  // updateTrail(trailId:any, trailDto:any): Observable<any>{
  //   return this.http.put(BASIC_URL + `api/agency/trail/${trailId}`, trailDto,{
  //     headers: this.createAuthorizationHeader(),
  //   })
  // }


  getAllTrails(): Observable<any>{
    return this.http.get(BASIC_URL + 'api/hiker/trails',{
      headers: this.createAuthorizationHeader(),
    })
  }


  getAllTrailsByName(name:any): Observable<any>{
    return this.http.get(BASIC_URL + `api/hiker/search/${name}`,{
      headers: this.createAuthorizationHeader(),
    })
  }

  addToDemand(trailId:any): Observable<any>{
    const demandDto = {
      trailId : trailId,
      userId : UserStorageService.getUserId()
    }

    return this.http.post(BASIC_URL + `api/hiker/demand`, demandDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  increaseTrailNbparticipants(trailId:any): Observable<any>{
    const demandDto = {
      trailId : trailId,
      userId : UserStorageService.getUserId()
    }

    return this.http.post(BASIC_URL + `api/hiker/addition`, demandDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  decreaseTrailNbparticipants(trailId:any): Observable<any>{
    const demandDto = {
      trailId : trailId,
      userId : UserStorageService.getUserId()
    }

    return this.http.post(BASIC_URL + `api/hiker/deduction`, demandDto, {
      headers: this.createAuthorizationHeader(),
    })
  }



  getDemandByUserId(): Observable<any>{
    const userId = UserStorageService.getUserId()
    return this.http.get(BASIC_URL + `api/hiker/demand/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  placeBook(bookDto): Observable<any>{
    bookDto.userId = UserStorageService.getUserId()
    return this.http.post(BASIC_URL + `api/hiker/placeBook`, bookDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getBookingsByUserId(): Observable<any>{
    const userId = UserStorageService.getUserId()
    return this.http.get(BASIC_URL + `api/hiker/myBookings/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getBookedTrails(bookId:number): Observable<any>{
    return this.http.get(BASIC_URL + `api/hiker/booked-trails/${bookId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  giveReview(reviewDto:any): Observable<any>{
    return this.http.post(BASIC_URL + `api/hiker/review`, reviewDto ,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getTrailDetailById(trailId: number) :Observable<any>{
    return this.http.get(BASIC_URL + `api/hiker/trail/${trailId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
