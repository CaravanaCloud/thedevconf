package thedevconf.jaxrs.api.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "tdc_edition")
@NamedQueries({
        @NamedQuery(name = "edition.byCode", query = "select e from Edition e where e.code = :code")
})
public class Edition extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    Long id;

    @ManyToOne
    Brand brand;

    @Column(unique = true)
    String code;

    LocalDateTime gateOpenTime;
    LocalDateTime gateCloseTime;

    public static Edition of(String code) {
        var edition = new Edition();
        edition.code = code;
        return edition;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
