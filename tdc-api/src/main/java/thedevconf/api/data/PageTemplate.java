package thedevconf.api.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "tdc_page_template")
public class PageTemplate extends PanacheEntity {
    public String code;

    @Column(columnDefinition="longtext")
    public String content;

    public String getContent() {
        return content;
    }

    public void setContent(String text) {
        this.content = text;
    }


    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
