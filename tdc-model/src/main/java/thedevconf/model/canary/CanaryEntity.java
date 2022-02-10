package thedevconf.model.canary;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CanaryEntity {
    @Id
    Long id;
    String name;
}
