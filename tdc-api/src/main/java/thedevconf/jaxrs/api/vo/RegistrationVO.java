package thedevconf.jaxrs.api.vo;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record RegistrationVO(
    String userId,
    String clientId,
    String data,
    Boolean acceptedTerms,
    LocalDateTime createTime){

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
