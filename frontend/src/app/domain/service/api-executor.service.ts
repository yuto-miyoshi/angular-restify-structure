import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiConst } from "../const/api.const";

// TODO miyoshi: providersは？
@Injectable()
export class ApiExecutor {
    // TODO miyoshi: HttpModuleってどこから？
    constructor(private readonly httpClient: HttpClient) {}

    fetchId(): Observable<{id: number}> {
        return this.executeGET('id');
    }

    private executeGET<T>(command: string): Observable<T> {
        return this.httpClient.get<T>(`${ApiConst.url}/${command}`);
    }
}