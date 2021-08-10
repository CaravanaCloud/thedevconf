package thedevconf.jaxrs.api.blueprints.poke.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.sql.DataSource;
import thedevconf.jaxrs.api.blueprints.poke.entity.Pokemon;

@Dependent
public class JDBCPokedex {

    @Inject
    DataSource ds;

    public List<Pokemon> findAll() {
        List<Pokemon> result = new ArrayList<>();
        var sql = "SELECT id, name from Pokemon";
        try (
                var conn = ds.getConnection();
                var stmt = conn.createStatement();
                var rs = stmt.executeQuery(sql)
        ) {
            while (rs.next()) {
                var id = rs.getLong("id");
                var name = rs.getString("name");
                var poke = Pokemon.of(id, name);
                result.add(poke);
            }
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
        return result;
    }
}
