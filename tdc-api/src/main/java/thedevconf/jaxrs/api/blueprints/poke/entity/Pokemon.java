package thedevconf.jaxrs.api.blueprints.poke.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import thedevconf.jaxrs.api.blueprints.dnc.PartyPlaceThing;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
        @NamedQuery(name = "pokemon.all", query = "select p from Pokemon p order by p.id")
})
public class Pokemon extends PanacheEntity {
    String name;

    public static Pokemon of(Long id, String name) {
        var pokemon = new Pokemon();
        pokemon.id = id;
        pokemon.name = name;
        return pokemon;
    }

    public String getName() {
        return name;
    }
}
