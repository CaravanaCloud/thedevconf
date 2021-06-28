package thedevconf.jaxrs.ui.registration;

import io.quarkus.qute.i18n.Localized;
import io.quarkus.qute.i18n.Message;

@Localized("es")
public interface RegistrationMsgs_ES extends RegistrationMsgs {
    @Override
    @Message("Bienvenido al sistema de Inscripciones del TDC")
    String reg_title();
}
