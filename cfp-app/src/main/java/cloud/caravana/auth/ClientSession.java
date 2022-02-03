package cloud.caravana.auth;

public interface ClientSession {
    boolean isLoggedIn();
    String getIdToken();
    String getAccessToken();
    String getRefreshToken();
    String getUserInfo();
    String ping();
    String whoami();
}