package thedevconf.jaxrs.api.services;

import java.security.NoSuchAlgorithmException;
import java.security.Provider;
import java.security.SecureRandom;
import java.security.Security;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@ApplicationScoped
public class PasswordGeneratorService {
    // CONSTANTS RELATED TO SALT PROPERTY
    public static final String SALT_SIZE_PROPERTY = "thedevconf.jaxrs.api.services.PasswordGeneratorService.saltSize";
    public static final int SALT_SIZE_DEFAULT_VALUE = 16;
    public static final int SALT_SIZE_MINIMAL_VALUE = 8;
    // CONSTANTS RELATED TO ITERATION_COUNT PROPERTY
    public static final String ITERATION_COUNT_PROPERTY = "thedevconf.jaxrs.api.services.PasswordGeneratorService.PBEKeySpec.iterationCount";
    public static final int ITERATION_COUNT_DEFAULT_VALUE = 150000;
    public static final int ITERATION_COUNT_MINIMAL_VALUE = 10000;
    // CONSTANTS RELATED TO KEY_LENGTH PROPERTY
    public static final String KEY_LENGTH_PROPERTY = "thedevconf.jaxrs.api.services.PasswordGeneratorService.PBEKeySpec.keyLength";
    public static final int KEY_LENGTH_DEFAULT_VALUE = 128;
    public static final int KEY_LENGTH_MINIMAL_VALUE = 32;
    private static final int DERIVED_KEY_LENGTH_MULTIPLIER = 8;
    // CONSTANTS RELATED TO SECRET_KEY_ALGORITHM PROPERTY
    public static final String SECRET_KEY_ALGORITHM_PROPERTY = "thedevconf.jaxrs.api.services.PasswordGeneratorService.SecretKeyFactory.algorithm";
    public static final String SECRET_KEY_ALGORITHM_DEFAULT_VALUE = "PBKDF2WithHmacSHA512";

    // attributes
    private final int saltSize;
    private final int iterationCount;
    private final int keyLength;
    private final SecretKeyFactory secretKeyFactory;

    public PasswordGeneratorService(
        @ConfigProperty(name = SALT_SIZE_PROPERTY)
        final Optional<Integer> saltSizeProperty,
        @ConfigProperty(name = SECRET_KEY_ALGORITHM_PROPERTY, defaultValue = SECRET_KEY_ALGORITHM_DEFAULT_VALUE)
        final Optional<String> algorithm,
        @ConfigProperty(name = ITERATION_COUNT_PROPERTY)
        final Optional<Integer> iterationCount,
        @ConfigProperty(name = KEY_LENGTH_PROPERTY)
        final Optional<Integer> keyLength
    ) {
        this.saltSize = getSaltSize(saltSizeProperty);
        this.iterationCount = iterationCount(iterationCount);
        this.keyLength = keyLength(keyLength);
        this.secretKeyFactory = secretKeyFactory(algorithm);
    }

    private int getSaltSize(Optional<Integer> saltSizeProperty) {
        int saltSize =
            saltSizeProperty
                .orElse(SALT_SIZE_DEFAULT_VALUE);
        validateSaltSize(saltSize);
        return saltSize;
    }

    private void validateSaltSize(final int saltSize) {
        if (saltSize < SALT_SIZE_MINIMAL_VALUE) {
            throw new IllegalArgumentException(String.format(
                "invalid value for the \"%s\" property. " +
                    "It must be at least or greater than %s bytes. Default is %s bytes.",
                SALT_SIZE_MINIMAL_VALUE,
                SALT_SIZE_DEFAULT_VALUE
            ));
        }
    }

    private int iterationCount(Optional<Integer> iterationCount) {
        final int iterationCountValue = iterationCount.orElse(ITERATION_COUNT_DEFAULT_VALUE);
        validateIterationCount(iterationCountValue);
        return iterationCountValue;
    }

    private void validateIterationCount(final int iterationCountValue) {
        if (iterationCountValue < ITERATION_COUNT_MINIMAL_VALUE) {
            throw new IllegalArgumentException(String.format(
                "invalid value for the \"%s\" property. " +
                    "It must be at least or greater than %s. Default is %s.",
                ITERATION_COUNT_PROPERTY,
                ITERATION_COUNT_MINIMAL_VALUE
            ));
        }
    }

    private int keyLength(Optional<Integer> keyLength) {
        final int keyLengthValue = keyLength.orElse(KEY_LENGTH_DEFAULT_VALUE);
        validateKeyLength(keyLengthValue);
        return keyLengthValue;
    }

    private void validateKeyLength(final int keyLength) {
        if (keyLength < KEY_LENGTH_MINIMAL_VALUE) {
            throw new IllegalArgumentException(String.format(
                "invalid value for the \"%s\" property. " +
                    "It must be at least or greater than %s bytes. Default is %s bytes.",
                KEY_LENGTH_PROPERTY,
                KEY_LENGTH_MINIMAL_VALUE
            ));
        }
    }

    private SecretKeyFactory secretKeyFactory(Optional<String> algorithm) {
        try {
            return SecretKeyFactory.getInstance(algorithm.get());
        } catch (NullPointerException | NoSuchAlgorithmException e) {
            throw new IllegalArgumentException(
                String.format(
                    "Specified algorithm %s is not available by the providers %s",
                    algorithm.get(),
                    Arrays.stream(Security.getProviders()).map(Provider::getName)
                        .collect(Collectors.joining(","))
                ));
        }
    }

    private PBEKeySpec getPBEKeySpecFor(final char[] password, final byte[] salt) {
        PBEKeySpec keySpec = null;
        final var keyLengthInBits = this.keyLength * DERIVED_KEY_LENGTH_MULTIPLIER;
        try {
            keySpec = new PBEKeySpec(
                password,
                salt,
                iterationCount,
                keyLengthInBits
            );
        } catch (NullPointerException | IllegalArgumentException e) {
            throw new IllegalArgumentException(
                String.format(
                    "One of the argument is illegal. Salt %s" +
                        " may be of 0 length, iteration count %s" +
                        " is not positive or derived key length %s" +
                        " is not positive.",
                    salt,
                    iterationCount,
                    keyLength
                ));
        }
        return keySpec;
    }

    public String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[this.saltSize];
        random.nextBytes(salt);
        return Base64.getEncoder().encodeToString(salt);
    }

    public String generatePassword(String plainTextPassword, String salt) {
        char[] charEnteredPassword = plainTextPassword.toCharArray();
        byte[] decodedSalt = Base64.getDecoder().decode(salt);
        PBEKeySpec keySpec = getPBEKeySpecFor(
            charEnteredPassword,
            decodedSalt
        );
        byte[] hashedArray = null;
        try {
            hashedArray = this.secretKeyFactory.generateSecret(keySpec).getEncoded();
        } catch (InvalidKeySpecException e) {
            throw new IllegalArgumentException(
                "Specified key specification is inappropriate",
                e
            );
        }
        return Base64.getEncoder().encodeToString(hashedArray);
    }
}
