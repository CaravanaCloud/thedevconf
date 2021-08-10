package thedevconf.jaxrs;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@ApplicationScoped
@Default
public class Configuration {

    @ConfigProperty(name = "google_client_id", defaultValue = "")
    String googleClientId;

    public String getGoogleClientId() {
        return googleClientId;
    }
}
