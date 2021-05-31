package thedevconf.jaxrs;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;

@ApplicationScoped
@Default
public class Configuration {

    @ConfigProperty(name = "google_client_id", defaultValue = "")
    String googleClientId;

    public String getGoogleClientId() {
        return googleClientId;
    }
}
