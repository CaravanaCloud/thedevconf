package cloud.caravana.auth;

import java.util.Locale;
import java.util.ResourceBundle;

public interface ClientSession {
    boolean isLoggedIn();
    String getIdToken();
    String getAccessToken();
    String getRefreshToken();
    String getUserInfo();
    String ping();

    String getUserDisplayName();
    Locale getLocale();
    ResourceBundle getCFPMessages();
}