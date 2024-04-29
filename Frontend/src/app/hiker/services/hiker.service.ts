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

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
