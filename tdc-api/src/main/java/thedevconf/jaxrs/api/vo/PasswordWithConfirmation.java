package thedevconf.jaxrs.api.vo;

import java.util.Objects;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.constraints.NotEmpty;
import thedevconf.jaxrs.validation.CustomConstraint;

@CustomConstraint(
        delegateTo = PasswordWithConfirmation.Validator.class,
        message = PasswordWithConfirmation.ERROR_MESSAGE
)
public class PasswordWithConfirmation {
    static final String ERROR_MESSAGE = "{thedevconf.jaxrs.api.vo.PasswordWithConfirmation.message}";
    @NotEmpty
    public String password;
    @NotEmpty
    public String passwordConfirmation;

    public static boolean isValid(PasswordWithConfirmation emailWithConfirmationVO) {
        if (emailWithConfirmationVO.password == null
                || emailWithConfirmationVO.passwordConfirmation == null) {
            return false;
        }
        return Objects.equals(
                emailWithConfirmationVO.password,
                emailWithConfirmationVO.passwordConfirmation
        );
    }

    public static class Validator
            implements ConstraintValidator<CustomConstraint, PasswordWithConfirmation> {
        @Override
        public boolean isValid(
                final PasswordWithConfirmation value, final ConstraintValidatorContext context
        ) {
            return PasswordWithConfirmation.isValid(value);
        }
    }

    @Override
    public String toString() {
        return "PasswordWithConfirmation{"
                + "password='" + password + '\''
                + ", passwordConfirmation='" + passwordConfirmation + "\'"
                + "}";
    }
}
