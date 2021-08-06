package thedevconf.jaxrs.api.vo;

import java.time.LocalDateTime;
import java.util.Objects;

public class UserRegistrationByEmailAndPasswordResponse {

    private String email;
    private LocalDateTime createTime;

    public UserRegistrationByEmailAndPasswordResponse(final String email, final LocalDateTime createTime) {
        this.email = email;
        this.createTime = createTime;
    }

    public String getEmail() {
        return email;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final UserRegistrationByEmailAndPasswordResponse that = (UserRegistrationByEmailAndPasswordResponse) o;
        return Objects.equals(createTime, that.createTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(createTime);
    }
}
