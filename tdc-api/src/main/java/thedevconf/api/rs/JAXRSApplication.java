package thedevconf.api.rs;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Info;


@OpenAPIDefinition(
        info = @Info(
                title = "TDC API",
                version = "1.0")
)
public class JAXRSApplication extends Application {

}
