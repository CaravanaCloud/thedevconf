package thedevconf.jaxrs.api.blueprints.poke.dao;

import java.util.List;
import javax.enterprise.context.Dependent;
import thedevconf.jaxrs.api.blueprints.poke.entity.Pokemon;

@Dependent
public class PanachePokedex {
    public List<Pokemon> findAll() {
        return Pokemon.listAll();
    }
}