package thedevconf.jaxrs;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;

@ApplicationScoped
@Default
public class Configuration {

    @ConfigProperty(name = "google_client_id", defaultValue= "112902828557-5briq7k42grldiglvve9bfdpsmdmjmpm.apps.googleusercontent.com")
    String googleClientId;

    public String getGoogleClientId() {
        return googleClientId;
    }
}
