/* tslint:disable */
/* eslint-disable */
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
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { GenericResponse } from '../models';
import { MailLog } from '../models';
import { MailOrder } from '../models';
import { MailOrders } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * returns information about a mail order in the system with the given id.
         * @summary Gets mail order information by id
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMailById: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getMailById.');
            }
            const localVarPath = `/mail/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            // authentication apiLoginAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-LOGIN")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-LOGIN"] = localVarApiKeyValue;
            }

            // authentication apiPasswordAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-PASS")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-PASS"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary displays a list of mail service orders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMailOrders: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/mail`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            // authentication apiLoginAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-LOGIN")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-LOGIN"] = localVarApiKeyValue;
            }

            // authentication apiPasswordAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-PASS")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-PASS"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Checks if the server is running
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingServer: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds an item to the system
         * @summary places a mail order
         * @param {MailOrder} [body] Inventory item to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        placeMailOrder: async (body?: MailOrder, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/mail/order`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            // authentication apiLoginAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-LOGIN")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-LOGIN"] = localVarApiKeyValue;
            }

            // authentication apiPasswordAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-PASS")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-PASS"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends An email through one of your mail orders.
         * @summary Sends an Email
         * @param {number} id User ID
         * @param {string} [subject] 
         * @param {string} [body] 
         * @param {string} [to] 
         * @param {string} [from] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendMailById: async (id: number, subject?: string, body?: string, to?: string, from?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling sendMailById.');
            }
            const localVarPath = `/mail/{id}/send`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            // authentication apiLoginAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-LOGIN")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-LOGIN"] = localVarApiKeyValue;
            }

            // authentication apiPasswordAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-PASS")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-PASS"] = localVarApiKeyValue;
            }

            if (subject !== undefined) {
                localVarQueryParameter['subject'] = subject;
            }

            if (body !== undefined) {
                localVarQueryParameter['body'] = body;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary validatess order details before placing an order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateMailOrder: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/mail/order`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            // authentication apiLoginAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-LOGIN")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-LOGIN"] = localVarApiKeyValue;
            }

            // authentication apiPasswordAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-PASS")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-PASS"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * By passing in the appropriate options, you can search for available inventory in the system 
         * @summary displays the mail log
         * @param {number} id User ID
         * @param {string} [searchString] pass an optional search string for looking up inventory
         * @param {number} [skip] number of records to skip for pagination
         * @param {number} [limit] maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewMailLogById: async (id: number, searchString?: string, skip?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling viewMailLogById.');
            }
            const localVarPath = `/mail/{id}/log`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            // authentication apiLoginAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-LOGIN")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-LOGIN"] = localVarApiKeyValue;
            }

            // authentication apiPasswordAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-PASS")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-PASS"] = localVarApiKeyValue;
            }

            if (searchString !== undefined) {
                localVarQueryParameter['searchString'] = searchString;
            }

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * returns information about a mail order in the system with the given id.
         * @summary Gets mail order information by id
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMailById(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MailOrder>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMailById(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary displays a list of mail service orders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMailOrders(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MailOrders>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMailOrders(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Checks if the server is running
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pingServer(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).pingServer(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Adds an item to the system
         * @summary places a mail order
         * @param {MailOrder} [body] Inventory item to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async placeMailOrder(body?: MailOrder, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).placeMailOrder(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Sends An email through one of your mail orders.
         * @summary Sends an Email
         * @param {number} id User ID
         * @param {string} [subject] 
         * @param {string} [body] 
         * @param {string} [to] 
         * @param {string} [from] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendMailById(id: number, subject?: string, body?: string, to?: string, from?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GenericResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).sendMailById(id, subject, body, to, from, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary validatess order details before placing an order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateMailOrder(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).validateMailOrder(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * By passing in the appropriate options, you can search for available inventory in the system 
         * @summary displays the mail log
         * @param {number} id User ID
         * @param {string} [searchString] pass an optional search string for looking up inventory
         * @param {number} [skip] number of records to skip for pagination
         * @param {number} [limit] maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async viewMailLogById(id: number, searchString?: string, skip?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MailLog>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).viewMailLogById(id, searchString, skip, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * returns information about a mail order in the system with the given id.
         * @summary Gets mail order information by id
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMailById(id: number, options?: any): AxiosPromise<MailOrder> {
            return DefaultApiFp(configuration).getMailById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary displays a list of mail service orders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMailOrders(options?: any): AxiosPromise<MailOrders> {
            return DefaultApiFp(configuration).getMailOrders(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Checks if the server is running
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pingServer(options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).pingServer(options).then((request) => request(axios, basePath));
        },
        /**
         * Adds an item to the system
         * @summary places a mail order
         * @param {MailOrder} [body] Inventory item to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        placeMailOrder(body?: MailOrder, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).placeMailOrder(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends An email through one of your mail orders.
         * @summary Sends an Email
         * @param {number} id User ID
         * @param {string} [subject] 
         * @param {string} [body] 
         * @param {string} [to] 
         * @param {string} [from] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendMailById(id: number, subject?: string, body?: string, to?: string, from?: string, options?: any): AxiosPromise<GenericResponse> {
            return DefaultApiFp(configuration).sendMailById(id, subject, body, to, from, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary validatess order details before placing an order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateMailOrder(options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).validateMailOrder(options).then((request) => request(axios, basePath));
        },
        /**
         * By passing in the appropriate options, you can search for available inventory in the system 
         * @summary displays the mail log
         * @param {number} id User ID
         * @param {string} [searchString] pass an optional search string for looking up inventory
         * @param {number} [skip] number of records to skip for pagination
         * @param {number} [limit] maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewMailLogById(id: number, searchString?: string, skip?: number, limit?: number, options?: any): AxiosPromise<Array<MailLog>> {
            return DefaultApiFp(configuration).viewMailLogById(id, searchString, skip, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * returns information about a mail order in the system with the given id.
     * @summary Gets mail order information by id
     * @param {number} id User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMailById(id: number, options?: any) {
        return DefaultApiFp(this.configuration).getMailById(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary displays a list of mail service orders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMailOrders(options?: any) {
        return DefaultApiFp(this.configuration).getMailOrders(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Checks if the server is running
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public pingServer(options?: any) {
        return DefaultApiFp(this.configuration).pingServer(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Adds an item to the system
     * @summary places a mail order
     * @param {MailOrder} [body] Inventory item to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public placeMailOrder(body?: MailOrder, options?: any) {
        return DefaultApiFp(this.configuration).placeMailOrder(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Sends An email through one of your mail orders.
     * @summary Sends an Email
     * @param {number} id User ID
     * @param {string} [subject] 
     * @param {string} [body] 
     * @param {string} [to] 
     * @param {string} [from] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public sendMailById(id: number, subject?: string, body?: string, to?: string, from?: string, options?: any) {
        return DefaultApiFp(this.configuration).sendMailById(id, subject, body, to, from, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary validatess order details before placing an order
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public validateMailOrder(options?: any) {
        return DefaultApiFp(this.configuration).validateMailOrder(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * By passing in the appropriate options, you can search for available inventory in the system 
     * @summary displays the mail log
     * @param {number} id User ID
     * @param {string} [searchString] pass an optional search string for looking up inventory
     * @param {number} [skip] number of records to skip for pagination
     * @param {number} [limit] maximum number of records to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public viewMailLogById(id: number, searchString?: string, skip?: number, limit?: number, options?: any) {
        return DefaultApiFp(this.configuration).viewMailLogById(id, searchString, skip, limit, options).then((request) => request(this.axios, this.basePath));
    }
}
