package thedevconf.cfp;

import java.util.UUID;

public class UserSession {
    String uuid = UUID.randomUUID().toString();
    String username;
    String email;
    String name;

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public UserSession(){
    }

    //TODO: proper session management
    public boolean isAuthenticated() {
        return username != null;
    }

    @Override
    public String toString() {
        return uuid;
    }

}
