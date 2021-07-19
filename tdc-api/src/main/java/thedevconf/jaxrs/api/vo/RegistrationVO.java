package thedevconf.jaxrs.api.vo;

import java.time.LocalDateTime;

public class RegistrationVO {
    String userId;
    String clientId;
    String name;
    String email;
    String password;
    Boolean acceptedTerms;
    LocalDateTime createTime;

    public RegistrationVO(String userId, String clientId, String name, String email, String password,
                          Boolean acceptedTerms, LocalDateTime createTime) {
        this.userId = userId;
        this.clientId = clientId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.acceptedTerms = acceptedTerms;
        this.createTime = createTime;
    }

    public String getUserId() { return userId; }

    public String getClientId() { return clientId; }

    public String getName() { return name; }

    public String getPassword() { return password; }

    public String getEmail() { return email; }

    public Boolean getAcceptedTerms() { return acceptedTerms; }

    public LocalDateTime getCreateTime() { return createTime; }

    public static RegistrationVO of(String clientId) {
        return new RegistrationVO(
                null,
                clientId,
                null,
                null,
                null,
                false,
                LocalDateTime.now()
        );
    }
}