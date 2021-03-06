/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserve
 */
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Contest} from '../_Models/Contest';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})


export class ContestService{
    baseurl = environment.apiUrl+'contest/';
    constructor(private http:HttpClient) {
    }
    AddContest(model:any){
        return this.http.post(this.baseurl,model);
    }
    GetAll(pageNumber:number){
        return this.http.get(this.baseurl+'?pageNumber='+pageNumber);
    }
    GetContest(id){
        return this.http.get(this.baseurl+id);
    }
    getContestType(){
        return this.http.get(this.baseurl+"type")
    }
}
