package thedevconf.api.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import static java.lang.Boolean.parseBoolean;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "tdc_form_data")
public class FormData extends PanacheEntity{
    String pageCode;
    String fullName;
    String email;
    String phone;
    String company;
    String companyRole;
    String city;
    String cityId;
    String country;
    String countryState;
    String zip;
    String captcha;
    String custom0;
    String custom1;
    String custom2;
    String custom3;
    String custom4;
    String custom5;
    String custom6;
    String custom7;
    String custom8;
    String custom9;
    Boolean acceptTerms;
    Boolean acceptPrivacy;
    Boolean accept0;
    Boolean accept1;
    Boolean accept2;
    
    @Column(columnDefinition="text")
    String allInput;


    public Boolean getAcceptTerms() {
        return this.acceptTerms;
    }

    public void setAcceptTerms(Boolean acceptTerms) {
        this.acceptTerms = acceptTerms;
    }

    public Boolean getAcceptPrivacy() {
        return this.acceptPrivacy;
    }

    public void setAcceptPrivacy(Boolean acceptPrivacy) {
        this.acceptPrivacy = acceptPrivacy;
    }
    public Boolean getAccept0() {
        return this.accept0;
    }

    public void setAccept0(Boolean accept0) {
        this.accept0 = accept0;
    }

    public Boolean getAccept1() {
        return this.accept1;
    }

    public void setAccept1(Boolean accept1) {
        this.accept1 = accept1;
    }

    public Boolean getAccept2() {
        return this.accept2;
    }

    public void setAccept2(Boolean accept2) {
        this.accept2 = accept2;
    }

    public String getPageCode() {
        return this.pageCode;
    }

    public void setPageCode(String pageCode) {
        this.pageCode = pageCode;
    }

    public String getFullName() {
        return this.fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCompany() {
        return this.company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getCompanyRole() {
        return this.companyRole;
    }

    public void setCompanyRole(String companyRole) {
        this.companyRole = companyRole;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCountryState() {
        return this.countryState;
    }

    public void setCountryState(String countryState) {
        this.countryState = countryState;
    }

    public String getZip() {
        return this.zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCaptcha() {
        return this.captcha;
    }

    public void setCaptcha(String captcha) {
        this.captcha = captcha;
    }

    public String getCustom0() {
        return this.custom0;
    }

    public void setCustom0(String custom0) {
        this.custom0 = custom0;
    }

    public String getCustom1() {
        return this.custom1;
    }

    public void setCustom1(String custom1) {
        this.custom1 = custom1;
    }

    public String getCustom2() {
        return this.custom2;
    }

    public void setCustom2(String custom2) {
        this.custom2 = custom2;
    }

    public String getCustom3() {
        return this.custom3;
    }

    public void setCustom3(String custom3) {
        this.custom3 = custom3;
    }

    public String getCustom4() {
        return this.custom4;
    }

    public void setCustom4(String custom4) {
        this.custom4 = custom4;
    }

    public String getCustom5() {
        return this.custom5;
    }

    public void setCustom5(String custom5) {
        this.custom5 = custom5;
    }

    public String getCustom6() {
        return this.custom6;
    }

    public void setCustom6(String custom6) {
        this.custom6 = custom6;
    }

    public String getCustom7() {
        return this.custom7;
    }

    public void setCustom7(String custom7) {
        this.custom7 = custom7;
    }

    public String getCustom8() {
        return this.custom8;
    }

    public void setCustom8(String custom8) {
        this.custom8 = custom8;
    }

    public String getCustom9() {
        return this.custom9;
    }

    public void setCustom9(String custom9) {
        this.custom9 = custom9;
    }

    public String getAllInput() {
        return this.allInput;
    }

    public void setAllInput(String allInput) {
        this.allInput = allInput;
    }

    public static FormData of(String pageCode,String body) {
        FormData formData = new FormData();
        formData.pageCode = pageCode;
        formData.allInput = body;
        var tokens = body.split("&");
        for (int i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            var attr = token.split("=");
            var key = attr[0];
            var val = "";
            if (attr.length > 1){
                val = decode(attr[1]);
            }
            switch (key){
                case "name": formData.fullName = val; break;
                case "fullName": formData.fullName = val; break;
                case "email": formData.email = val; break;
                case "phone": formData.phone = val; break;
                case "personal_phone": formData.phone = val; break;
                case "company": formData.company = val; break;
                case "companyRole": formData.companyRole = val; break;
                case "job_title": formData.companyRole = val; break;
                case "city": formData.city = val; break;
                case "city_id": formData.cityId = val; break;
                case "country": formData.country = val; break;
                case "cf_tdc_pais": formData.country = val; break;  
                case "countryState": formData.countryState = val; break;
                case "zip": formData.zip = val; break;
                case "captcha": formData.captcha = val; break;
                case "custom0": formData.custom0 = val; break;
                case "custom1": formData.custom1 = val; break;
                case "custom2": formData.custom2 = val; break;
                case "custom3": formData.custom3 = val; break;
                case "custom4": formData.custom4 = val; break;
                case "custom5": formData.custom5 = val; break;
                case "custom6": formData.custom6 = val; break;
                case "custom7": formData.custom7 = val; break;
                case "custom8": formData.custom8 = val; break;
                case "custom9": formData.custom9 = val; break;
                case "accepTerms": formData.acceptTerms = parseBoolean(val); break;
                case "acceptPrivacy": formData.acceptPrivacy = parseBoolean(val); break;
                case "accept0": formData.accept0 = parseBoolean(val); break;
                case "accept1": formData.accept1 = parseBoolean(val); break;
                case "accept2": formData.accept2 = parseBoolean(val); break;
            }
        }
        return formData;
    }

    private static String decode(String input) {
        var result = input.replaceAll("\\+", " ")
                        .replaceAll("%40", "@")
                        .replaceAll("%2B55", "(")
                        .replaceAll("%2866", ")");
        return result;
    }

    
}
