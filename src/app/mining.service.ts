import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personality} from './classes/user';
import {catchError} from 'rxjs/internal/operators';
import {UserInfo} from './classes/user';
import {HttpErrorHandler, HandleError} from './http-error-handler.service';


@Injectable({
    providedIn:'root'
})

export class MiningService{
    
    private handleError:HandleError;
    private url : string = "http://localhost:1337/cognitive-engine.cfapps.io/api/moodstatus";
    private financialURL : string = "http://localhost:1337/twitter-engine-latest.cfapps.io/getFinPercent";
    
    constructor(private http:HttpClient, private httpErrorHandler:HttpErrorHandler){
        this.handleError = httpErrorHandler.createHandleError("MiningService");
    }
    
    public GetUserInfo(userName:string):Observable<Array<Personality>>{
        
        //return this.http.get<Array<Personality>>(this.url);
        return this.http.get<Array<Personality>>(this.url + "/" + userName)
        .pipe(
            catchError(this.handleError("Please enter a valid Twitter Handle",[]))
        );
        
    }
    
    
    public GetFinancialInfo(userName:string):Observable<Array<Personality>>{
        
        return this.http.get<Array<Personality>>(this.financialURL + "/" + userName)
        .pipe(
            catchError(this.handleError("Please enter a valid Twitter Handle",[]))
        );
        
    }

}