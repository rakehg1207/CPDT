
import { Injectable }from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers,RequestOptions} from'@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/catch';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';

@Injectable()

export class LoginService {
        private actionUrlforProfile:string;
        private actionUrlwithAPI:string;
        private headers:Headers;
        private headerCurrency:string;
        private actionUrlforLogin:string;
        private headerApiuser:string;
        public startupTable: string;


    constructor( private _http: Http) {
        this.actionUrlforLogin = "http://ustlssoat114.airservices.svcs.entsvcs.com:8980/M";
        this.headers = new Headers();
        this.headers.append('Content-Type','application/json');
        this.headers.append('Accept','application/json');
    }

    public login(username:any, Password:any) {
        let headers = new Headers();
        console.log("here");
        let requestData = "USER=cm.pty.agent&PASSWORD=Pss%40test17&submit=Log+In&TYPE=33554433&REALMOID=06-000cafcb-b7c1-1924-8334-a5dccc1a40a7&GUID=&SMAUTHREASON=0&SMAGENTNAME=-SM-vmmIZgUXXBthAsuGauombvJ%2FUK46t%2B2z923c0JIzCYFcmMo1o4%2FGmH4ZyEo8y%2F1i&TARGET=%2Fcss&SMRETRIES=&SMTRYNO=-SM-vmmIZgUXXBthAsuGauombvJ%2FUK46t%2B2z923c0JIzCYFcmMo1o4%2FGmH4ZyEo8y%2F1i"
        headers.append('content-type','application/x-www-form-urlencoded');
        let option =new RequestOptions({headers: headers,withCredentials: true})
        console.log(this.actionUrlforLogin);
        console.log(requestData);
        return this._http.post(this.actionUrlforLogin+'siteminderagent/forms/login.fcc',requestData, option);

    }
 
}