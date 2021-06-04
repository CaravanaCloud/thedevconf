package thedevconf.jaxrs.api.vo;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class RegistrationVO{
    String userId;
    String clientId;
    String data;
    Boolean acceptedTerms;
    LocalDateTime createTime;

    public RegistrationVO(String userId, String clientId, String data, Boolean acceptedTerms, LocalDateTime createTime) {
        this.userId = userId;
        this.clientId = clientId;
        this.data = data;
        this.acceptedTerms = acceptedTerms;
        this.createTime = createTime;
    }

    public String getUserId() {
        return userId;
    }

    public String getClientId() {
        return clientId;
    }

    public String getData() {
        return data;
    }

    public Boolean getAcceptedTerms() {
        return acceptedTerms;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public static RegistrationVO of(String clientId) {
        return new RegistrationVO(
                null,
                clientId,
                null,
                false,
                LocalDateTime.now()
        );
    }
}
