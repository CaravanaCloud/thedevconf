package thedevconf.jaxrs.api.blueprints.poke.dao;

import thedevconf.jaxrs.api.blueprints.poke.entity.Pokemon;

import javax.enterprise.context.Dependent;
import java.util.List;

@Dependent
public class PanachePokedex {
    public List<Pokemon> findAll() {
        return Pokemon.listAll();
    }
}