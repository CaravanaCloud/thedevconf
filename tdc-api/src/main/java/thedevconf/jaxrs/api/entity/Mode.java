package thedevconf.jaxrs.api.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@NamedQueries({
        @NamedQuery(name = "mode.all", query = "select m from Mode m order by m.id"),
        @NamedQuery(name = "mode.byCode",
                query = "select m from Mode m where m.code = :code order by m.id")
})
@Entity
@Table(name = "tdc_mode")
public class Mode extends PanacheEntityBase {
    public static final String BASICPASS = "BASICPASS";
    public static final String VIPPASS = "VIPPASS";
    public static final String PASSVIP = "PASSVIP";
    public static final String PASSPREM = "PASSPREM";
    public static final String PREMPASS = "PREMPASS";
    public static final String CORPPASS = "CORPPASS";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    Long id;

    @Column(unique = true)
    String code;
    String modeName;
    String description;

    public static Mode of(String code) {
        Mode mode = new Mode();
        mode.code = code;
        return mode;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public String getModeName() {
        return modeName;
    }

    public String getDescription() {
        return description;
    }
}