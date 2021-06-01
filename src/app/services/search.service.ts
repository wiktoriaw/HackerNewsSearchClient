import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IResponse } from "../models/interface.model";

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    getSearchResults(searchTerm: string, pageNo: number): Observable<IResponse> {
        return this.http.get<IResponse>(`http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story&page=${pageNo}`);
    }
}