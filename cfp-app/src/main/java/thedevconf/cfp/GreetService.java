package thedevconf.cfp;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class GreetService {

    public String greet(String name) {
        if (name == null || name.isEmpty()) {
            return "Hello anonymous user";
        } else {
            return "Hello " + name;
        } 
    }
}
