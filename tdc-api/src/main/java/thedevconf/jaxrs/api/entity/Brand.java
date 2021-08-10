package thedevconf.jaxrs.api.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import javax.persistence.Entity;
import javax.persistence.Table;

// ** The Dev Conf *** by Globalcode
// ** QCON ** by InfoQ
// ** QAI ** by InfoQ
@Entity
@Table(name = "tdc_brand")
public class Brand extends PanacheEntity {
    String name;
    String code;
}
