package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.api.entity.Edition;

import javax.enterprise.context.ApplicationScoped;
import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.util.Optional;

@ApplicationScoped
public class EditionsService extends BaseService{
    @Transactional
    public Edition of(String code) {
        var edition = Edition.of(code);
        return em.merge(edition);
    }

    public Optional<Edition> byCode(String editionCode) {
        return em.createNamedQuery("edition.byCode", Edition.class)
                .setParameter("code" , editionCode)
                .getResultStream()
                .findFirst();
    }
}
