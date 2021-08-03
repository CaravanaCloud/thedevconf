package thedevconf.jaxrs.api.services;

import thedevconf.jaxrs.api.entity.Mode;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.Optional;

@ApplicationScoped
public class ModesService extends BaseService {
    @Transactional
    public Mode of(String code) {
        var mode = Mode.of(code);
        return em.merge(mode);
    }

    @Transactional
    public Optional<Mode> byCode(String modeCode) {
        return em.createNamedQuery("mode.byCode", Mode.class)
                .setParameter("code", modeCode)
                .getResultStream()
                .findFirst();
    }
}
