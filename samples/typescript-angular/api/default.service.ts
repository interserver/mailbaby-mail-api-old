/**
 * Mail Baby API
 * This is an API for accesssing the mail services.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: detain@interserver.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { GenericResponse } from '../model/genericResponse';
import { MailLog } from '../model/mailLog';
import { MailOrder } from '../model/mailOrder';
import { MailOrders } from '../model/mailOrders';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'http://mynew.interserver.net:8787/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Gets mail order information by id
     * returns information about a mail order in the system with the given id.
     * @param id User ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMailById(id: number, observe?: 'body', reportProgress?: boolean): Observable<MailOrder>;
    public getMailById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MailOrder>>;
    public getMailById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MailOrder>>;
    public getMailById(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getMailById.');
        }

        let headers = this.defaultHeaders;

        // authentication (apiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (apiLoginAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-LOGIN"]) {
            headers = headers.set('X-API-LOGIN', this.configuration.apiKeys["X-API-LOGIN"]);
        }

        // authentication (apiPasswordAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-PASS"]) {
            headers = headers.set('X-API-PASS', this.configuration.apiKeys["X-API-PASS"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<MailOrder>('get',`${this.basePath}/mail/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * displays a list of mail service orders
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMailOrders(observe?: 'body', reportProgress?: boolean): Observable<MailOrders>;
    public getMailOrders(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MailOrders>>;
    public getMailOrders(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MailOrders>>;
    public getMailOrders(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (apiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (apiLoginAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-LOGIN"]) {
            headers = headers.set('X-API-LOGIN', this.configuration.apiKeys["X-API-LOGIN"]);
        }

        // authentication (apiPasswordAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-PASS"]) {
            headers = headers.set('X-API-PASS', this.configuration.apiKeys["X-API-PASS"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml',
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<MailOrders>('get',`${this.basePath}/mail`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Checks if the server is running
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public pingServer(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public pingServer(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public pingServer(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public pingServer(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/ping`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * places a mail order
     * Adds an item to the system
     * @param body Inventory item to add
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public placeMailOrder(body?: MailOrder, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public placeMailOrder(body?: MailOrder, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public placeMailOrder(body?: MailOrder, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public placeMailOrder(body?: MailOrder, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (apiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (apiLoginAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-LOGIN"]) {
            headers = headers.set('X-API-LOGIN', this.configuration.apiKeys["X-API-LOGIN"]);
        }

        // authentication (apiPasswordAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-PASS"]) {
            headers = headers.set('X-API-PASS', this.configuration.apiKeys["X-API-PASS"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/mail/order`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Sends an Email
     * Sends An email through one of your mail orders.
     * @param id User ID
     * @param subject 
     * @param body 
     * @param to 
     * @param from 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sendMailById(id: number, subject?: string, body?: string, to?: string, from?: string, observe?: 'body', reportProgress?: boolean): Observable<GenericResponse>;
    public sendMailById(id: number, subject?: string, body?: string, to?: string, from?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GenericResponse>>;
    public sendMailById(id: number, subject?: string, body?: string, to?: string, from?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GenericResponse>>;
    public sendMailById(id: number, subject?: string, body?: string, to?: string, from?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling sendMailById.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (subject !== undefined && subject !== null) {
            queryParameters = queryParameters.set('subject', <any>subject);
        }
        if (body !== undefined && body !== null) {
            queryParameters = queryParameters.set('body', <any>body);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }

        let headers = this.defaultHeaders;

        // authentication (apiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (apiLoginAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-LOGIN"]) {
            headers = headers.set('X-API-LOGIN', this.configuration.apiKeys["X-API-LOGIN"]);
        }

        // authentication (apiPasswordAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-PASS"]) {
            headers = headers.set('X-API-PASS', this.configuration.apiKeys["X-API-PASS"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GenericResponse>('get',`${this.basePath}/mail/${encodeURIComponent(String(id))}/send`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * validatess order details before placing an order
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public validateMailOrder(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public validateMailOrder(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public validateMailOrder(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public validateMailOrder(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (apiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (apiLoginAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-LOGIN"]) {
            headers = headers.set('X-API-LOGIN', this.configuration.apiKeys["X-API-LOGIN"]);
        }

        // authentication (apiPasswordAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-PASS"]) {
            headers = headers.set('X-API-PASS', this.configuration.apiKeys["X-API-PASS"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/mail/order`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * displays the mail log
     * By passing in the appropriate options, you can search for available inventory in the system 
     * @param id User ID
     * @param searchString pass an optional search string for looking up inventory
     * @param skip number of records to skip for pagination
     * @param limit maximum number of records to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public viewMailLogById(id: number, searchString?: string, skip?: number, limit?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<MailLog>>;
    public viewMailLogById(id: number, searchString?: string, skip?: number, limit?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<MailLog>>>;
    public viewMailLogById(id: number, searchString?: string, skip?: number, limit?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<MailLog>>>;
    public viewMailLogById(id: number, searchString?: string, skip?: number, limit?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling viewMailLogById.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (searchString !== undefined && searchString !== null) {
            queryParameters = queryParameters.set('searchString', <any>searchString);
        }
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }

        let headers = this.defaultHeaders;

        // authentication (apiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-KEY"]) {
            headers = headers.set('X-API-KEY', this.configuration.apiKeys["X-API-KEY"]);
        }

        // authentication (apiLoginAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-LOGIN"]) {
            headers = headers.set('X-API-LOGIN', this.configuration.apiKeys["X-API-LOGIN"]);
        }

        // authentication (apiPasswordAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-API-PASS"]) {
            headers = headers.set('X-API-PASS', this.configuration.apiKeys["X-API-PASS"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<MailLog>>('get',`${this.basePath}/mail/${encodeURIComponent(String(id))}/log`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
