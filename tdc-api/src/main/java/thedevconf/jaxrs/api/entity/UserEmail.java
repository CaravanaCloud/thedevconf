package thedevconf.jaxrs.api.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "UserEmail_tdc")
@NamedQueries({
        @NamedQuery(name = UserEmail.FIND_BY_EMAIL,
                query = "select us from UserEmail us where us.email = :email")
})
public class UserEmail extends PanacheEntityBase {
    public static final String FIND_BY_EMAIL = "UserEmail.byEmail";
    @Id
    @NotNull
    @Email
    String email;
    LocalDateTime validatedAt;
    @ManyToOne
    @JoinColumn(name = "user_id")
    Person person;

    public static boolean containsByEmail(String email) {
        return UserEmail.count("email", email) > 0;
    }

    public static Optional<UserEmail> findByEmail(String email) {
        return UserEmail.findByIdOptional(email);
    }

    public static UserEmail newFromSessionAndUser(UserSession session, Person user) {
        final var emailAddress = session.getEmail();
        return newFromEmailAndUser(emailAddress, user);
    }

    public static UserEmail newFromEmailAndUser(final String emailAddress, final Person user) {
        var emailRef = UserEmail.findByEmail(emailAddress);
        if (emailRef.isPresent()) {
            final var userEmail = emailRef.get();
            if (Objects.equals(userEmail.person, user)) {
                return userEmail;
            }
            throw new IllegalArgumentException("email already registered by another user");
        }
        UserEmail email = new UserEmail();
        email.email = emailAddress;
        email.person = user;
        email.validatedAt = LocalDateTime.now(); //TODO: Actually check
        email.persist();
        return email;
    }

    public String getEmail() {
        return email;
    }

    public LocalDateTime getValidatedAt() {
        return validatedAt;
    }

    public Person getUser() {
        return person;
    }
}
