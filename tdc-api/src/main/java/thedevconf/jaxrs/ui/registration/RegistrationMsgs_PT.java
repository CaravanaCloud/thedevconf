package thedevconf.jaxrs.ui.registration;

import io.quarkus.qute.i18n.Localized;
import io.quarkus.qute.i18n.Message;

@Localized("pt-BR")
public interface RegistrationMsgs_PT extends RegistrationMsgs {
    @Override
    @Message("Bem-vindo ao sistema de Inscricoes do TDC")
    String reg_title();
}
