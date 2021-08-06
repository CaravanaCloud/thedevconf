package thedevconf.jaxrs.api.vo;

import java.time.LocalDateTime;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import thedevconf.jaxrs.api.services.RegistrationService.UserRegistrationByEmailAndPasswordRequestValidator;
import thedevconf.jaxrs.validation.CustomConstraint;

@CustomConstraint(
    message = "{thedevconf.jaxrs.api.vo.UserRegistrationByEmailAndPasswordRequest.emailRegisteredAlready}",
    delegateTo = UserRegistrationByEmailAndPasswordRequestValidator.class
)
public class UserRegistrationByEmailAndPasswordRequest {
    @NotEmpty
    String name;
    @NotNull
    @Valid
    EmailWithConfirmation emailWithConfirmation;
    @NotNull
    @Valid
    PasswordWithConfirmation passwordWithConfirmation;
    @NotNull
    @AssertTrue
    Boolean acceptedTerms;
    LocalDateTime createTime;

    public UserRegistrationByEmailAndPasswordRequest() {
        this(
            null,
            new EmailWithConfirmation(),
            new PasswordWithConfirmation(),
            Boolean.FALSE,
            null
        );
    }

    public UserRegistrationByEmailAndPasswordRequest(
        String name,
        EmailWithConfirmation emailWithConfirmation,
        PasswordWithConfirmation passwordWithConfirmation,
        boolean acceptedTerms,
        LocalDateTime createTime
    ) {
        this.name = name;
        this.emailWithConfirmation = emailWithConfirmation;
        this.passwordWithConfirmation = passwordWithConfirmation;
        this.acceptedTerms = acceptedTerms;
        this.createTime = createTime;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public EmailWithConfirmation getEmailWithConfirmation() {
        return emailWithConfirmation;
    }

    public void setEmailWithConfirmation(final EmailWithConfirmation emailWithConfirmation) {
        this.emailWithConfirmation = Optional.ofNullable(emailWithConfirmation).orElseGet(
            EmailWithConfirmation::new);
    }

    public PasswordWithConfirmation getPasswordWithConfirmation() {
        return passwordWithConfirmation;
    }

    public void setPasswordWithConfirmation(final PasswordWithConfirmation passwordWithConfirmation) {
        this.passwordWithConfirmation = Optional.ofNullable(passwordWithConfirmation).orElseGet(
            PasswordWithConfirmation::new);
    }

    public Boolean getAcceptedTerms() {
        return Optional.ofNullable(acceptedTerms).orElse(Boolean.FALSE);
    }

    public void setAcceptedTerms(final Boolean acceptedTerms) {
        this.acceptedTerms = acceptedTerms;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(final LocalDateTime createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "RegistrationVO{" +
            ", name='" + name + '\'' +
            ", emailWithConfirmation='" + emailWithConfirmation + '\'' +
            ", passwordWithConfirmation='" + passwordWithConfirmation + '\'' +
            ", acceptedTerms=" + acceptedTerms +
            ", createTime=" + createTime +
            '}';
    }
}
