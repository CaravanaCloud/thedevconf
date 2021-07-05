package thedevconf.jaxrs.auth;

import thedevconf.jaxrs.api.vo.UserInfoVO;

public class ThreadLocalUserInfo {
    static ThreadLocal<UserInfoVO> tlui = new ThreadLocal<>();

    public static void load(String clientId) {
        System.out.println("loading client id: "+clientId);
        UserInfoVO userInfoVO = UserInfoVO.byClientId(clientId);
        tlui.set(userInfoVO);
    }

    public static void clear() {
        System.out.println("Removing user info ");
        tlui.remove();
    }

    public static UserInfoVO get() {
        UserInfoVO user = tlui.get();
        System.out.println("Getting user info "+user);
        return user;
    }

}
