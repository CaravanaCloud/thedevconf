package thedevconf.jaxrs.api.services;

import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.QuarkusTestProfile;
import io.quarkus.test.junit.TestProfile;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import javax.inject.Inject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

@QuarkusTest
public class PasswordGeneratorServiceTest {
    @Inject
    PasswordGeneratorService passwordGeneratorService;

    @Test
    public void testGenerateSalt() {
        final var saltSet = IntStream.range(0, 5)
            .boxed()
            .map(v -> passwordGeneratorService.generateSalt()).collect(Collectors.toSet());
        Assertions.assertEquals(
            5,
            saltSet.size(),
            "must generate a different salt for each call"
        );
    }

    @ParameterizedTest
    @CsvSource({
        "MuCsXo3r7oD2GExs6cGhtg==,mypassword1,J0naSfEjv0jeK/rEY24mevRDRAnfL0QpXhUsHMa77+NsfP4ztDjOK0aBCgFt2uvdnekae9Ai+M8pp84SgxslH3NKhmFhs+h8bl5a0JHLk316UKGyjQ9Xz/ixocW4TvzOYL1Owf4dqUZ7S6KtrxjPpaNMAlwh2rKrjrM1Fzah2Iw=",
        "ppC8PwPuzmDhDkdFbsre3A==,mypassword2,4M/5hy0KkyJSUjT9jswTMV0xHo6WNQbaUZOZWCFcgZ3P5V013BfaU+iByAsOXY0MtJ4D74rp5o/IHfTAFKZAE3kPxFVbkNsIB/oRXiHWZo59FXbHZ8hyWG2JxTWNsgXX/1cjGSdrnIH5A8FIKGf+hkd6Fi6V9oQbKFDsK0T0b0Q=",
        "nlvIVO2c4HS+zl0yRYCj/Q==,mypassword3,Bo9r5N+hvGqjWKDE9lWvldcUr0afJdjiBP9sb1lim0pKAAdfj+/xf2UaR4uxCqMSiz64EQIXyv6ZWhFm3wLyio1h4/ovAAB9+qyT0g2hHoYFJ+4/VlDvnpYlnrSSV8BE19mdWM1mXFZNt9Ej2mh8zRGmkL4PNutjmlJA2MAPNNg=",
        "wSR/SMagSSEuSEOdGzF//A==,mypassword4,JB4KnAA8nvJXz51gx78w9UdNxRczailTL8iezkV2u4+/W0/7Rj6yyGqYwF0dH+Ctpjk8qvg8gE3HxF+7jcUlI7Ax5onmqJBgdArGFKjfQzGxWihzfFhrTjgqB8ydjazLZpjxEbPOp4UkKc1ACOSntykFUrhqWbt3QVHiMEfiQ80=",
        "/944pPFs2nfttBSfvZ0jhA==,mypassword5,Int8zME2F+tWqmzOUubtRE5Q+vBQxyHC3J5Y+iUurQ92Y46UI1ow9nPELJfkuCrZfeBSvSOvtpyyXh6Fzgq4qQBuX0drEcVEp3ywh92TxsM+8jjGSQ9FyMjrWK8nrmy26kK9/SXdCqD+YCNHXWvmuc0SrtDmdiORga6V6gWZebQ="
    })
    public void testGeneratePassword(
        final String salt,
        final String plainTextPassword,
        final String expectedPassword
    ) {
        var encryptedPasswd = passwordGeneratorService.generatePassword(plainTextPassword, salt);
        Assertions.assertEquals(expectedPassword, encryptedPasswd);
    }
}
