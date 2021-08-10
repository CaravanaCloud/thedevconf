package thedevconf.jaxrs.api.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import thedevconf.jaxrs.api.services.PasswordGeneratorService;

@Entity
@Table(name = "UserEmailPassword_tdc")
public class UserEmailPassword extends PanacheEntityBase {
    @Id
    @Email
    @NotNull
    private String email;
    @NotEmpty
    private String salt;
    @NotEmpty
    @Lob
    private String hash;
    private LocalDateTime createTime;

    public static UserEmailPassword createFrom(
            final String email,
            final String plainTextPassword,
            final PasswordGeneratorService passwordGeneratorService
    ) {
        if (UserEmailPassword.containsByEmail(email)) {
            throw new IllegalArgumentException(
                    "email already registered"
            );
        }
        final var salt = passwordGeneratorService.generateSalt();
        final var hash = passwordGeneratorService.generatePassword(plainTextPassword, salt);
        UserEmailPassword entity = createTransientFrom(email, salt, hash);
        entity.persist();
        return entity;
    }

    public static boolean matches(
            final String email,
            final String plainTextPassword,
            final PasswordGeneratorService passwordGeneratorService
    ) {
        final var entityRef = UserEmailPassword.findByEmail(email);
        if (email.isEmpty()) {
            return false;
        }
        final var targetUserEmailPassword = entityRef.get();
        return targetUserEmailPassword
                .matches(
                        UserEmailPassword.createTransientFrom(
                                email,
                                plainTextPassword,
                                passwordGeneratorService
                                        .generatePassword(plainTextPassword, targetUserEmailPassword.salt)
                        ));
    }

    public boolean matches(final UserEmailPassword other) {
        if (this == other) {
            return true;
        }
        if (other == null) {
            return false;
        }
        return Objects.equals(hash, other.hash);
    }

    public static UserEmailPassword createTransientFrom(
            final String email,
            final String salt,
            final String hash
    ) {
        UserEmailPassword entity = new UserEmailPassword();
        entity.email = email;
        entity.salt = salt;
        entity.hash = hash;
        entity.createTime = LocalDateTime.now();
        return entity;
    }

    public static Optional<UserEmailPassword> findByEmail(String email) {
        return UserEmailPassword.findByIdOptional(email);
    }

    public static boolean containsByEmail(final String email) {
        return findByEmail(email).isPresent();
    }

    public String getEmail() {
        return email;
    }

    public LocalDateTime getCreateTime() {
        return this.createTime;
    }

}
