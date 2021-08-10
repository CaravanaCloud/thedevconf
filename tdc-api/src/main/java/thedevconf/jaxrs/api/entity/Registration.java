package thedevconf.jaxrs.api.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "tdc_registration",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"person_id", "mode_id", "edition_id"})
        }
)
@NamedQueries({
        @NamedQuery(
                name = "registration.byPersonAndMode",
                query = "select r from Registration r "
                        + "where r.person = :person and r.mode.code = :modeCode and r.edition.code = :editionCode")
})
public class Registration extends PanacheEntity {
    @ManyToOne
    @JoinColumn(name = "person_id")
    Person person;

    @ManyToOne
    @JoinColumn(name = "mode_id")
    Mode mode;

    @ManyToOne
    @JoinColumn(name = "edition_id")
    Edition edition;

    public static Registration of(Person person, Edition edition, Mode mode) {
        var reg = new Registration();
        reg.person = person;
        reg.edition = edition;
        reg.mode = mode;
        return reg;
    }
}
