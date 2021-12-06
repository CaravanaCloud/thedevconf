package thedevconf.api.data;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "tdc_page_template")
public class PageTemplate extends PanacheEntity {
    public String code;
    public String content;

    public String getContent() {
        return content;
    }

    public void setContent(String text) {
        this.content = text;
    }

    public void setCode(String pageCode) {
        this.code = pageCode;
    }
}
