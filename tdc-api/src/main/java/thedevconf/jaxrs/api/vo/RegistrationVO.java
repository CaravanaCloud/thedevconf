package thedevconf.jaxrs.api.vo;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonCreator.Mode;
import java.time.LocalDateTime;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import thedevconf.jaxrs.api.services.RegistrationService;
import thedevconf.jaxrs.validation.CustomConstraint;

@CustomConstraint(
    message = "{thedevconf.jaxrs.api.vo.RegistrationVO.emailRegisteredAlready}",
    delegateTo = RegistrationService.RegistrationValidator.class
)
public class RegistrationVO {
    @NotEmpty
    String name;
    @NotNull
    @Valid
    EmailWithConfirmationVO emailWithConfirmation;
    @NotNull
    @Valid
    PasswordWithConfirmationVO passwordWithConfirmation;
    @NotNull
    @AssertTrue
    Boolean acceptedTerms;
    LocalDateTime createTime;

    public RegistrationVO() {
        this(
            null,
            new EmailWithConfirmationVO(),
            new PasswordWithConfirmationVO(),
            Boolean.FALSE,
            null
        );
    }

    public RegistrationVO(
        String name,
        EmailWithConfirmationVO emailWithConfirmation,
        PasswordWithConfirmationVO passwordWithConfirmation,
        boolean acceptedTerms,
        LocalDateTime createTime
    ) {
        this.name = name;
        this.emailWithConfirmation = emailWithConfirmation;
        this.passwordWithConfirmation = passwordWithConfirmation;
        this.acceptedTerms = acceptedTerms;
        this.createTime = createTime;
    }

    public static RegistrationVO of(final String clientId) {
        return new RegistrationVO();
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public EmailWithConfirmationVO getEmailWithConfirmation() {
        return emailWithConfirmation;
    }

    public void setEmailWithConfirmation(final EmailWithConfirmationVO emailWithConfirmation) {
        this.emailWithConfirmation = Optional.ofNullable(emailWithConfirmation).orElseGet(
            EmailWithConfirmationVO::new);
    }

    public PasswordWithConfirmationVO getPasswordWithConfirmation() {
        return passwordWithConfirmation;
    }

    public void setPasswordWithConfirmation(final PasswordWithConfirmationVO passwordWithConfirmation) {
        this.passwordWithConfirmation = Optional.ofNullable(passwordWithConfirmation).orElseGet(
            PasswordWithConfirmationVO::new);
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
