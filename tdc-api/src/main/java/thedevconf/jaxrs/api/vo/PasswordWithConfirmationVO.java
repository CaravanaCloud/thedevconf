package thedevconf.jaxrs.api.vo;

import java.util.Objects;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.constraints.NotEmpty;
import thedevconf.jaxrs.validation.CustomConstraint;

@CustomConstraint(
    delegateTo = PasswordWithConfirmationVO.Validator.class,
    message = PasswordWithConfirmationVO.ERROR_MESSAGE
)
public class PasswordWithConfirmationVO {
    static final String ERROR_MESSAGE = "{thedevconf.jaxrs.api.vo.PasswordWithConfirmationVO.message}";
    @NotEmpty
    public String password;
    @NotEmpty
    public String passwordConfirmation;

    public static boolean isValid(PasswordWithConfirmationVO emailWithConfirmationVO) {
        if (emailWithConfirmationVO.password == null ||
            emailWithConfirmationVO.passwordConfirmation == null) {
            return false;
        }
        return Objects.equals(
            emailWithConfirmationVO.password,
            emailWithConfirmationVO.passwordConfirmation
        );
    }

    public static class Validator
        implements ConstraintValidator<CustomConstraint, PasswordWithConfirmationVO> {
        @Override
        public boolean isValid(
            final PasswordWithConfirmationVO value, final ConstraintValidatorContext context
        ) {
            return PasswordWithConfirmationVO.isValid(value);
        }
    }

    @Override
    public String toString() {
        return "PasswordWithConfirmationVO{" +
            "password='" + password + '\'' +
            ", passwordConfirmation='" + passwordConfirmation + '\'' +
            '}';
    }
}
