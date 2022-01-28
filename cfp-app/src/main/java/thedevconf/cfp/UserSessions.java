package thedevconf.cfp;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.Produces;

import com.vaadin.quarkus.annotation.VaadinSessionScoped;

public class UserSessions {
    //TODO: proper session management
    static UserSession current = new UserSession();
    public static UserSession getCurrent(){
        return current;
    }
    
}
