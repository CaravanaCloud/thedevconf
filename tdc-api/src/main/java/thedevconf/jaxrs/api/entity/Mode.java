package thedevconf.jaxrs.api.entity;

import javax.persistence.*;

@NamedQueries({
        @NamedQuery(name = "mode.all", query = "select m from Mode m order by m.id")
})
@Entity
@Table(name = "mode_tdc")
public class Mode {
    public static final String BASICPASS = "BASICPASS";
    public static final String VIPPASS = "VIPPASS";
    public static final String PASSVIP = "PASSVIP";
    public static final String PASSPREM = "PASSPREM";
    public static final String PREMPASS = "PREMPASS";
    public static final String CORPPASS = "CORPPASS";

    @Id
    @GeneratedValue
    Long id;

    String code;
    String modeName;
    String description;

    public Long getId() {
        return id;
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