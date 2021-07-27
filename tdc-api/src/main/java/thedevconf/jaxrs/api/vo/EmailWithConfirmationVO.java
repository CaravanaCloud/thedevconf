package thedevconf.jaxrs.api.vo;

import java.util.Objects;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import thedevconf.jaxrs.validation.CustomConstraint;

@CustomConstraint(
    delegateTo = EmailWithConfirmationVO.Validator.class,
    message = EmailWithConfirmationVO.ERROR_MESSAGE
)
public class EmailWithConfirmationVO {
    static final String ERROR_MESSAGE = "{thedevconf.jaxrs.api.vo.EmailWithConfirmationVO.message}";
    @NotEmpty
    @Email
    public String email;
    @NotEmpty
    @Email
    public String emailConfirmation;

    public static boolean isValid(EmailWithConfirmationVO emailWithConfirmationVO) {
        if (emailWithConfirmationVO.email == null ||
            emailWithConfirmationVO.emailConfirmation == null) {
            return false;
        }
        return Objects.equals(
            emailWithConfirmationVO.email,
            emailWithConfirmationVO.emailConfirmation
        );
    }

    public static class Validator
        implements ConstraintValidator<CustomConstraint, EmailWithConfirmationVO> {
        @Override
        public boolean isValid(
            final EmailWithConfirmationVO value, final ConstraintValidatorContext context
        ) {
            return EmailWithConfirmationVO.isValid(value);
        }
    }

    @Override
    public String toString() {
        return "EmailWithConfirmationVO{" +
            "email='" + email + '\'' +
            ", emailConfirmation='" + emailConfirmation + '\'' +
            '}';
    }
}
