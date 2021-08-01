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
@TestProfile(PasswordGeneratorServiceTest.MockingConfigurationProfile.class)
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
        "7D0GBF8wNHtjgI7EjRXFvQ==,mypass1,xe5M1gTYoQumr9x3sX9jBAyi7t9+sN8aAc8DcFX875g=",
        "OLGa3ATlboMRIqW2P+hddQ==,mypass2,QWEkgcfBcDO/3yCfFpRPkKXHcEphCv/t9FC+NYhO6xM=",
        "CbslnZpR21Ez97GI/BcobQ==,mypass3,kRCYY8bKNZuqDx37vbbMwxaZuXq8hM1PVGjcWE4FqWM=",
        "P4tAHIyDsjKVuFE1D6DtBA==,mypass4,msYvhUp38UsmFkT8E0cnm0+svW8fPNv0iKwwTbxgYPw=",
        "6LdR5PkJPUm5Jry/lRt1Lw==,mypass5,XSv2/4rZ/oznbBgwo73PNASUc7OMJ9KQpSdlwZ6Kqec="
    })
    public void testGeneratePassword(
        final String salt,
        final String plainTextPassword,
        final String expectedPassword
    ) {
        var encryptedPasswd = passwordGeneratorService.generatePassword(plainTextPassword, salt);
        Assertions.assertEquals(expectedPassword, encryptedPasswd);
    }

    public static class MockingConfigurationProfile implements QuarkusTestProfile {
        @Override
        public Map<String, String> getConfigOverrides() {
            Map<String, String> config = new HashMap<>();
            config.put(
                "quarkus.datasource.jdbc.url",
                "${DATASOURCE_URL:jdbc:h2:mem:tdcdb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=false;MODE=MYSQL}"
            );
            config.put("quarkus.datasource.db-kind", "${DATASOURCE_KIND:h2}");
            config.put("quarkus.datasource.username", "${DATASOURCE_USERNAME:sa}");
            config.put("quarkus.datasource.password", "${DATASOURCE_PASSWORD:}");
            config.put("quarkus.hibernate-orm.database.generation", "none");
            config.put("quarkus.flyway.clean-at-start", "false");
            config.put("quarkus.flyway.migrate-at-start", "false");
            return config;
        }
    }
}
