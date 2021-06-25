package thedevconf.jaxrs.ui.registration;

import io.quarkus.qute.i18n.Message;
import io.quarkus.qute.i18n.MessageBundle;

@MessageBundle
public interface RegistrationMsgs {
    @Message("Welcome to TDC Registration")
    String reg_title();

}
