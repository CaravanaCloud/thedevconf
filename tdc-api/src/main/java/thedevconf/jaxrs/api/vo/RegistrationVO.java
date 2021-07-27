package thedevconf.jaxrs.api.vo;

import java.time.LocalDateTime;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

public class RegistrationVO {
    String userId;
    String clientId;
    String name;
    @NotNull
    @Valid
    EmailWithConfirmationVO emailWithConfirmation;
    @NotNull
    @Valid
    PasswordWithConfirmationVO passwordWithConfirmation;
    Boolean acceptedTerms;
    LocalDateTime createTime;

    public RegistrationVO(
            String userId,
            String clientId,
            String name,
            EmailWithConfirmationVO emailWithConfirmation,
            PasswordWithConfirmationVO passwordWithConfirmation,
            Boolean acceptedTerms,
            LocalDateTime createTime
    ) {
        this.userId = userId;
        this.clientId = clientId;
        this.name = name;
        this.emailWithConfirmation = emailWithConfirmation;
        this.passwordWithConfirmation = passwordWithConfirmation;
        this.acceptedTerms = acceptedTerms;
        this.createTime = createTime;
    }

    public static RegistrationVO of(String clientId) {
        return new RegistrationVO(
                null,
                clientId,
                null,
                new EmailWithConfirmationVO(),
                new PasswordWithConfirmationVO(),
                false,
                LocalDateTime.now()
        );
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(final String userId) {
        this.userId = userId;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(final String clientId) {
        this.clientId = clientId;
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
        this.emailWithConfirmation = emailWithConfirmation;
    }

    public PasswordWithConfirmationVO getPasswordWithConfirmation() {
        return passwordWithConfirmation;
    }

    public void setPasswordWithConfirmation(final PasswordWithConfirmationVO passwordWithConfirmation) {
        this.passwordWithConfirmation = passwordWithConfirmation;
    }

    public Boolean getAcceptedTerms() {
        return acceptedTerms;
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
                "userId='" + userId + '\'' +
                ", clientId='" + clientId + '\'' +
                ", name='" + name + '\'' +
                ", emailWithConfirmation='" + emailWithConfirmation + '\'' +
                ", passwordWithConfirmation='" + passwordWithConfirmation + '\'' +
                ", acceptedTerms=" + acceptedTerms +
                ", createTime=" + createTime +
                '}';
    }
}
