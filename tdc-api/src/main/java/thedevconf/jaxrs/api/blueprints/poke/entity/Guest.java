package thedevconf.jaxrs.api.blueprints.poke.entity;

import java.math.BigDecimal;
import thedevconf.jaxrs.api.blueprints.dnc.Role;

@Role
public class Guest {
    Trainer trainer;
    Pokemon pokemon;
    BigDecimal bet;
}
