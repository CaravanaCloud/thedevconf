package thedevconf.jaxrs.api.blueprints.poke.vo;

import java.util.List;
import thedevconf.jaxrs.api.blueprints.poke.entity.Pokemon;

public class PokedexVO {
    List<Pokemon> pokemons;

    public PokedexVO() {
        this(List.of());
    }

    public PokedexVO(List<Pokemon> pokemons) {
        this.pokemons = pokemons;
    }

    public static PokedexVO of(List<Pokemon> pokes) {
        return new PokedexVO(pokes);
    }

    public List<Pokemon> getPokemons() {
        return pokemons;
    }
}
