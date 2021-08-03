package thedevconf.jaxrs.api;

import io.quarkus.test.junit.QuarkusTestProfile;
import java.util.Map;
import java.util.UUID;

public class RegistrationServiceTestProfile implements QuarkusTestProfile {
    @Override
    public Map<String, String> getConfigOverrides() {
        return Map.of(
            "quarkus.datasource.jdbc", "true",
            "quarkus.datasource.jdbc.url",
            "jdbc:h2:mem:tdcdb" +
                UUID.randomUUID().toString().substring(0, 5) +
                ";DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=false;MODE=MYSQL",
            "quarkus.datasource.db-kind", "h2",
            "quarkus.datasource.username", "sa",
            "quarkus.datasource.password", "",
            "quarkus.hibernate-orm.database.generation", "drop-and-create",
            "quarkus.flyway.clean-at-start", "false",
            "quarkus.flyway.migrate-at-start", "false"
            //                ,"quarkus.hibernate-orm.log.sql", "true"
        );
    }
}