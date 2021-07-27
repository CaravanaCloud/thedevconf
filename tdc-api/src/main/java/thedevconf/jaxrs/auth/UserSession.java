package thedevconf.jaxrs.auth;

import org.checkerframework.checker.units.qual.Length;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "UserSession_tdc")
@NamedQueries({
        @NamedQuery(name = "UserSession.byEmail", query = "select us from UserSession us where us.email = :email")
})
public class UserSession {
    @Id
    String clientId;

    @Column(length = 12288)
    String idToken;
    String name;
    String pictureUrl;
    LocalDateTime ctime;
    String email;
    boolean emailVerified;
    String locale;
    String familyName;
    String givenName;
    LocalDateTime modifiedTime;

    @Transient
    boolean isUserInBasicPass;
    private LocalDateTime accessTime;

    public UserSession() {
    }


    public static UserSession byClientId(String clientId) {
        UserSession userInfoVO = new UserSession();
        userInfoVO.ctime = LocalDateTime.now();
        userInfoVO.clientId = clientId;
        return userInfoVO;
    }

    public static final UserSession getCurrent() {
        UserSession user = ThreadLocalUserInfo.get();
        return user;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public LocalDateTime getCtime() {
        return ctime;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
    }

    public LocalDateTime getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(LocalDateTime now) {
        this.modifiedTime = now;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdToken() {
        return idToken;
    }

    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }

    public String getClientId() {
        return clientId;
    }

    public LocalDateTime getCreateTime() {
        return ctime;
    }

    @Override
    public String toString() {
        return "UserInfoVO[clientId=" + getClientId() + ", ctime=" + getCreateTime() + "]";
    }

    public void setUserInBasicPass(boolean isUserInBasicPass) {
        this.isUserInBasicPass = isUserInBasicPass;
    }

    public void getUser() {
    }

    public void setAccessTime(LocalDateTime accessTime) {
        this.accessTime = accessTime;
    }

    public LocalDateTime getAccessTime() {
        return accessTime;
    }
}
