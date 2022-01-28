package thedevconf.cfp;

import java.util.UUID;

import javax.enterprise.inject.Default;

import com.vaadin.quarkus.annotation.VaadinSessionScoped;

@VaadinSessionScoped
@Default
public class UserSession {
    public UserSession(){
        System.out.println("Creating session "+UUID.randomUUID().toString());
    }

    public boolean isAuthenticated() {
        return false;
    }
}
