package thedevconf.jaxrs.api.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "UserEmail_tdc")
@NamedQueries({
   @NamedQuery(name = "User.byEmail", query = "select ue from UserEmail ue where ue.email = :email")
})
public class UserEmail {
    @Id
    String email;
    LocalDateTime validatedAt;
    @ManyToOne
    Person user;

    public static UserEmail of(UserSession session, Person user) {
        var email = new UserEmail();
        email.email = session.getEmail();
        email.validatedAt = LocalDateTime.now(); //TODO: Actually check
        email.user = user;
        return email;
    }

    public String getEmail() {
        return email;
    }

    public LocalDateTime getValidatedAt() {
        return validatedAt;
    }

    public Person getUser() {
        return user;
    }
}
