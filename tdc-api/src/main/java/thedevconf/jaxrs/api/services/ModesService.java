package thedevconf.jaxrs.api.services;

import java.util.Optional;
import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import thedevconf.jaxrs.api.entity.Mode;

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
