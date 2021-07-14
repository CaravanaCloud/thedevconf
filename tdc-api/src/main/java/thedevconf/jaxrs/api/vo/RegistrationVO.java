package thedevconf.jaxrs.api.vo;

import java.time.LocalDateTime;

public class RegistrationVO {
    String userId;
    String clientId;
    String name;
//    String language;
    String email;
    String password;
//    String phone;
//    String company;
//    String occupation;
//    String country;
//    String city;
//    String gender;
//    String ethnicity;
//    String pcd;
    Boolean acceptedTerms;
    LocalDateTime createTime;

    public RegistrationVO(String userId, String clientId, String name, String email, String password,
                          Boolean acceptedTerms, LocalDateTime createTime) {
        this.userId = userId;
        this.clientId = clientId;
        this.name = name;
//        this.language = language;
        this.email = email;
        this.password = password;
//        this.phone = phone;
//        this.company = company;
//        this.occupation = occupation;
//        this.country = country;
//        this.city = city;
//        this.gender = gender;
//        this.ethnicity = ethnicity;
//        this.pcd = pcd;
        this.acceptedTerms = acceptedTerms;
        this.createTime = createTime;
    }

    public String getUserId() { return userId; }

    public String getClientId() { return clientId; }

    public String getName() { return name; }

    public String getPassword() { return password; }

//    public String getLanguage() { return language; }

    public String getEmail() { return email; }

//    public String getPhone() { return phone; }
//
//    public String getCompany() { return company; }
//
//    public String getOccupation() { return occupation; }
//
//    public String getCountry() { return country; }
//
//    public String getCity() {  return city; }
//
//    public String getGender() { return gender; }
//
//    public String getEthnicity() { return ethnicity; }
//
//    public String getPcd() { return pcd; }

    public Boolean getAcceptedTerms() { return acceptedTerms; }

    public LocalDateTime getCreateTime() { return createTime; }

    public static RegistrationVO of(String clientId) {
        return new RegistrationVO(
                null,
                clientId,
                null,
                null,
                null,
                false,
                LocalDateTime.now()
        );
    }
}