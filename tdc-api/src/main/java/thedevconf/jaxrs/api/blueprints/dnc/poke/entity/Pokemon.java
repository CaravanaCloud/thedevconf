package thedevconf.jaxrs.api.blueprints.dnc.poke.entity;

import thedevconf.jaxrs.api.blueprints.dnc.PartyPlaceThing;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@PartyPlaceThing
public class Pokemon {
    @Id
    Integer id;
    String name;

    public Pokemon() {
        this(null,null);
    }

    public Pokemon(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public static Pokemon of(int id, String name) {
        return new Pokemon(id, name);
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
