package thedevconf.jaxrs.api.vo;

import thedevconf.jaxrs.auth.ThreadLocalUserInfo;

import java.time.LocalDateTime;

public class UserInfoVO {
    String clientId;
    LocalDateTime ctime;

    public String getClientId(){
        return clientId;
    }

    public LocalDateTime getCreateTime(){
        return ctime;
    }

    public static UserInfoVO byClientId(String clientId) {
        UserInfoVO userInfoVO = new UserInfoVO();
        userInfoVO.clientId = clientId;
        return userInfoVO;
    }

    public static final UserInfoVO getCurrentUserInfoVO(){
        UserInfoVO user = ThreadLocalUserInfo.get();
        return user;
    }


    @Override
    public String toString() {
        return "UserInfoVO[clientId="+getClientId()+", ctime="+getCreateTime()+"]";
    }
}
