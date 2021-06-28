package thedevconf.jaxrs.api.blueprints.poke.entity;

import thedevconf.jaxrs.api.blueprints.dnc.Role;

import java.math.BigDecimal;

@Role
public class Guest {
    Trainer trainer;
    Pokemon pokemon;
    BigDecimal bet;
}
