package thedevconf.jaxrs.api.blueprints.poke.entity;

import thedevconf.jaxrs.api.blueprints.dnc.PartyPlaceThing;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@PartyPlaceThing
@NamedQueries({
        @NamedQuery(name = "pokemon.all", query = "select p from Pokemon p order by p.id")
})
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
