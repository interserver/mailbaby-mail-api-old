package io.swagger.api.factories;

import io.swagger.api.PingApiService;
import io.swagger.api.impl.PingApiServiceImpl;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaJerseyServerCodegen", date = "2021-04-06T14:14:57.434748-04:00[America/New_York]")public class PingApiServiceFactory {
    private final static PingApiService service = new PingApiServiceImpl();

    public static PingApiService getPingApi() {
        return service;
    }
}
