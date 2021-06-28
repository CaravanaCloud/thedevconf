package thedevconf.jaxrs.api.blueprints.dnc.poke.dao;

import thedevconf.jaxrs.api.blueprints.dnc.poke.entity.Pokemon;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Dependent
public class JDBCPokedex {
    @Inject
    DataSource ds;

    public List<Pokemon> findAll(){
        List<Pokemon> result = new ArrayList<>();
        var sql = "SELECT id, name from Pokemon";
        try(var conn = ds.getConnection();
            var stmt = conn.createStatement();
            var rs = stmt.executeQuery(sql)){
            while(rs.next()){
                var id = rs.getInt("id");
                var name = rs.getString("name");
                var poke = Pokemon.of(id,name);
                result.add(poke);
            }
        }catch (SQLException ex){
            throw new RuntimeException(ex);
        }
        return result;
    }
}
