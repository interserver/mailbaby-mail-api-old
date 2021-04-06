package io.swagger;

import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.*;
import io.swagger.v3.oas.annotations.info.*;

@OpenAPIDefinition(
    info = @Info(
            title = "Mail Baby API",
            version = "1.0.0",
            description = "This is an API for accesssing the mail services.",
            contact = @Contact(
                    name = "Joe Huss",
                    email = "detain@interserver.net"
            ),
            license = @License(
                    name = "Apache 2.0",
                    url = "http://www.apache.org/licenses/LICENSE-2.0.html"
            )
    )
)
public class MainApplication {

    public static void main(String[] args) {
        Micronaut.run(MainApplication.class);
    }
}