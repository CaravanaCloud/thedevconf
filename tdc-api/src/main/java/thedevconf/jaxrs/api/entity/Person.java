package thedevconf.jaxrs.api.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "User_tdc")
public class Person extends PanacheEntityBase {
    //TODO:
    // Make relation between User and UserSession
    // Add data validation
    // maybe transform each user property in a type?)
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
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
    @Transient
    UserSession session;

    public Person() {
    }

    public Person(String language, String phone, String company, String occupation, String country, String city, String gender, String ethnicity, String pcd, AcceptedTerms acceptedTerms) {
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

    public static Person of() {
        return new Person();
    }

    public String getName() {
        return name;
    }

    public static Person of(UserSession session) {
        var user = new Person();
        user.name = session.getName();
        return user;
    }

    public static Person newFromSession(UserSession session) {
        var user = Person.newFromName(session.getName());
        UserEmail.newFromSessionAndUser(session, user);
        return user;
    }

    public static Person newFromName(String name) {
        Person user = newTransientFromName(name);
        user.persist();
        return user;
    }

    public static Person newTransientFromName(final String name) {
        var user = new Person();
        user.name = name;
        return user;
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
        Person user = (Person) o;
        return Objects.equals(id, user.id) && Objects.equals(language, user.language) && Objects.equals(phone, user.phone) && Objects.equals(company, user.company) && Objects.equals(occupation, user.occupation) && Objects.equals(country, user.country) && Objects.equals(city, user.city) && Objects.equals(gender, user.gender) && Objects.equals(ethnicity, user.ethnicity) && Objects.equals(pcd, user.pcd) && acceptedTerms == user.acceptedTerms;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, language, phone, company, occupation, country, city, gender, ethnicity, pcd, acceptedTerms);
    }

    public void setSession(UserSession session) {
        this.session = session;
    }
}
