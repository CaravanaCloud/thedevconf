package thedevconf.jaxrs.auth;

import thedevconf.jaxrs.api.entity.UserSession;

public class ThreadLocalUserInfo {
    static ThreadLocal<UserSession> tlui = new ThreadLocal<>();

    public static void set(UserSession user) {
        System.out.println("setting user: " + user);
        tlui.set(user);
    }

    public static void clear() {
        System.out.println("Removing user info ");
        tlui.remove();
    }

    public static UserSession get() {
        UserSession user = tlui.get();
        System.out.println("Getting user info " + user);
        return user;
    }
}