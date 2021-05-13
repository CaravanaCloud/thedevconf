package thedevconf.cfp;

import cloud.caravana.vo.Alternatives;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;
import java.util.Date;


@Route("")
@PWA(name = "TheDevConf CFP", shortName = "tdc-cfp", enableInstallPrompt = false)
@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class MainView extends VerticalLayout {
    public MainView(){
        Button button = new Button("TheDevConf CFP");
        button.addClickListener(e -> onClick(e));
        add(button);
    }

    private Notification onClick(ClickEvent<Button> e) {
        String result = "???";
        try {
            Client client = ClientBuilder.newBuilder().build();
            String apiURL = getApiURL();
            WebTarget target = client.target(apiURL);
            Response response = target.request().get();
            Alternatives alts = response.readEntity(Alternatives.class);
            System.out.println(alts.toString());
            response.close();
            result = alts.toString();
        }catch (Exception ex){
            result = ex.getMessage();
        }
        return Notification.show(result);
    }

    private String getApiURL() {
        String apiURL = System.getenv().get("TDC_API_URL");
        if(apiURL == null){
            apiURL = "http://localhost:8181/api/mode";
        }
        return apiURL;
    }
}
