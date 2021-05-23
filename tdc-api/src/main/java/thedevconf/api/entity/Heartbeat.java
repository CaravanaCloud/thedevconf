package thedevconf.api.entity;


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.hibernate.annotations.GenericGenerator;
import thedevconf.util.JSON;

@Entity
public class Heartbeat implements Serializable {
    static final String staticJvmUuid = UUID.randomUUID().toString();

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(columnDefinition = "CHAR(36)")
    String uuid;
    String sourceIP;
    LocalDateTime acceptTime;
    String payload;



    @Override
    public String toString() {
        return JSON.stringify(this);
    }

    public static Heartbeat of() {
        Heartbeat hb = new Heartbeat();
        hb.uuid = UUID.randomUUID().toString();
        hb.sourceIP = "127.0.0.1";
        hb.acceptTime = LocalDateTime.now();
        hb.payload = "<3";
        return hb;
    }

    public static String getStaticJvmUuid() {
        return staticJvmUuid;
    }

    public String getUuid() {
        return uuid;
    }

    public String getSourceIP() {
        return sourceIP;
    }

    public LocalDateTime getAcceptTime() {
        return acceptTime;
    }

    public String getPayload() {
        return payload;
    }
}

