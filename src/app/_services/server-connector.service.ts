import {Injectable} from '@angular/core';
import {Video} from "../_interfaces/video";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {VIDEOS} from "../videos/videos";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServerConnectorService {
    private _youtubeURL = 'http://localhost:4000/api/videos';
    constructor(private http: HttpClient) {
    }
    getVideosDetails(): Observable<Video[]>{
        return this.http.get<Video[]>(this._youtubeURL);
    }
    resolve(){
        console.log('resolved video details')
    }
}