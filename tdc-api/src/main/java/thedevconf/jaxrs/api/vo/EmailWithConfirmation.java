package thedevconf.jaxrs.api.vo;

import java.util.Objects;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import thedevconf.jaxrs.validation.CustomConstraint;

@CustomConstraint(
        delegateTo = EmailWithConfirmation.Validator.class,
        message = EmailWithConfirmation.ERROR_MESSAGE
)
public class EmailWithConfirmation {
    static final String ERROR_MESSAGE = "{thedevconf.jaxrs.api.vo.EmailWithConfirmation.message}";
    @NotEmpty
    @Email
    public String email;
    @NotEmpty
    @Email
    public String emailConfirmation;

    public static boolean isValid(EmailWithConfirmation emailWithConfirmationVO) {
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
            implements ConstraintValidator<CustomConstraint, EmailWithConfirmation> {
        @Override
        public boolean isValid(
            final EmailWithConfirmation value, final ConstraintValidatorContext context
        ) {
            return EmailWithConfirmation.isValid(value);
        }
    }

    @Override
    public String toString() {
        return "EmailWithConfirmation{" +
                "email='" + email + '\'' +
                ", emailConfirmation='" + emailConfirmation + '\'' +
                '}';
    }
}
