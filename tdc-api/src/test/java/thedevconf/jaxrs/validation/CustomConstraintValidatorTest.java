package thedevconf.jaxrs.validation;

import io.quarkus.test.junit.QuarkusTest;

import java.io.IOException;
import java.util.Properties;
import java.util.Set;
import java.util.function.Function;
import java.util.function.Supplier;
import javax.inject.Inject;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import javax.validation.Validator;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

@QuarkusTest
public class CustomConstraintValidatorTest {

    static final Set<String> CONTRIBUTORS =
            Set.of("Marcus", "Lucia", "Julio", "Nathalia");

    @Inject
    Validator validator;

    @Test
    public void testWithErrorMessageHardcoded() {
        performTest(MyPojoA::new, () -> "invalid contributor name");
    }

    @Test
    public void testWithErrorMessageFromValidationsProperties() throws IOException {
        Properties properties = getValidationMessages();
        performTest(MyPojoB::new, () -> properties.getProperty(
                String.format("%s.message", CustomConstraint.class.getName())
        ));
    }

    private Properties getValidationMessages() throws IOException {
        Properties properties = new Properties();
        properties.load(Thread.currentThread().getContextClassLoader()
                .getResourceAsStream("ValidationMessages.properties"));
        return properties;
    }

    private void performTest(
            final Function<String, Object> constructor,
            final Supplier<String> expectedErrorMessage
    ) {
        CONTRIBUTORS.forEach(possibleContributor -> {
            Assertions.assertTrue(
                    validator.validate(constructor.apply(possibleContributor)).isEmpty(),
                    String.format("%s should be classified as a valid contributor", possibleContributor)
            );
        });
        final var anonymous = "anonymous";
        final var violations = validator.validate(constructor.apply(anonymous));
        Assertions.assertFalse(
                violations.isEmpty(),
                String.format("%s should be classified as a valid contributor", anonymous)
        );
        Assertions.assertEquals(
                expectedErrorMessage.get(),
                violations.iterator().next().getMessage(),
                "returned an unexpected message"
        );
    }

    @CustomConstraint(
            delegateTo = MyPojoA.class,
            message = "invalid contributor name"
    )
    public static class MyPojoA implements ConstraintValidator<CustomConstraint, MyPojoA> {
        String name;

        public MyPojoA() {
            // Bean Validation Spec requires it
        }

        public MyPojoA(final String name) {
            this.name = name;
        }

        @Override
        public boolean isValid(final MyPojoA target, final ConstraintValidatorContext context) {
            return CONTRIBUTORS.contains(target.name);
        }
    }

    @CustomConstraint(
            delegateTo = MyPojoB.class
    )
    public static class MyPojoB implements ConstraintValidator<CustomConstraint, MyPojoB> {
        String name;

        public MyPojoB() {
            // Bean Validation Spec requires it
        }

        public MyPojoB(final String name) {
            this.name = name;
        }

        @Override
        public boolean isValid(final MyPojoB target, final ConstraintValidatorContext context) {
            return CONTRIBUTORS.contains(target.name);
        }
    }
}
