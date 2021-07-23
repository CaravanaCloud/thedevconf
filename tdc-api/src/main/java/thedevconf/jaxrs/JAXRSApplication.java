package thedevconf.jaxrs;

import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Info;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;


@OpenAPIDefinition(
        info = @Info(
                title = "TDC API",
                version = "0.0.1")
)
@ApplicationPath("")
public class JAXRSApplication extends Application {

}