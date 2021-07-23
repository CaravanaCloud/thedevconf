package thedevconf.jaxrs.api.entity;

import javax.persistence.*;
import javax.ws.rs.Consumes;
import java.util.Objects;

@Entity
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String language;
    String phone;
    String company;
    String occupation;
    String country;
    String city;
    String gender;
    String ethnicity;
    String pcd;
    AcceptedTerms acceptedTerms;

    public User() {
    }

    public User(String language, String phone, String company, String occupation, String country, String city, String gender, String ethnicity, String pcd, AcceptedTerms acceptedTerms) {
        this.language = language;
        this.phone = phone;
        this.company = company;
        this.occupation = occupation;
        this.country = country;
        this.city = city;
        this.gender = gender;
        this.ethnicity = ethnicity;
        this.pcd = pcd;
        this.acceptedTerms = acceptedTerms;
    }


    public Long getId() {
        return id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEthnicity() {
        return ethnicity;
    }

    public void setEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
    }

    public String getPcd() {
        return pcd;
    }

    public void setPcd(String pcd) {
        this.pcd = pcd;
    }

    public AcceptedTerms getAcceptedTerms() {
        return acceptedTerms;
    }

    public void setAcceptedTerms(boolean acceptedTerms) {

        if (acceptedTerms) {
            this.acceptedTerms = AcceptedTerms.TRUE;
        } else {
            this.acceptedTerms = AcceptedTerms.FALSE;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(language, user.language) && Objects.equals(phone, user.phone) && Objects.equals(company, user.company) && Objects.equals(occupation, user.occupation) && Objects.equals(country, user.country) && Objects.equals(city, user.city) && Objects.equals(gender, user.gender) && Objects.equals(ethnicity, user.ethnicity) && Objects.equals(pcd, user.pcd) && acceptedTerms == user.acceptedTerms;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, language, phone, company, occupation, country, city, gender, ethnicity, pcd, acceptedTerms);
    }
}