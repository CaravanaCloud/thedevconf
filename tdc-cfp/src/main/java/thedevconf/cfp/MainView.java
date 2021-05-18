package thedevconf.cfp;

import cloud.caravana.vo.Alternatives;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.server.InitialPageSettings;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.server.PageConfigurator;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;
import java.util.Date;


@Route("")
@PWA(name = "TheDevConf CFP", shortName = "tdc-cfp", enableInstallPrompt = false)
@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class MainView extends VerticalLayout implements PageConfigurator {
    String VERSION = "#7";

    public MainView(){
        addDependencies();
        addComponents();
    }

    private void addDependencies() {
        UI ui = UI.getCurrent();
        Page page = ui.getPage();
        page.addJsModule("https://apis.google.com/js/platform.js");
    }

    private void addComponents() {
        Button button = new Button("TheDevConf CFP "+VERSION);
        button.addClickListener(e -> onClick(e));
        add(button);

        Div menu = new Div();
        menu.add(new RouterLink("home", HomeView.class));
        add(menu);
    }

    private Notification onClick(ClickEvent<Button> e) {
        String result = "";
        String resURL = getURL("/api/mode");
        try {
            Client client = ClientBuilder.newBuilder().build();
            WebTarget target = client.target(resURL);
            Response response = target.request().get();
            String ctype = response.getHeaderString("content-type");
            if (200 == response.getStatus()
            && "application/json".equals(ctype)) {
                Alternatives alts = response.readEntity(Alternatives.class);
                result += alts.toString();
            }else {
                String body = response.readEntity(String.class);
                result += body.toString();
            }
            response.close();

        }catch (Exception ex){
            result += ex.getMessage();
        }
        System.out.println(result);
        return Notification.show(result);
    }

    private String getURL(String path) {
        return getApiURL() + path;
    }

    private String getApiURL() {
        String apiURL = System.getenv().get("TDC_API_URL");
        if(apiURL == null){
            apiURL = "http://localhost:8181";
        }
        return apiURL;
    }

    @Override
    public void configurePage(InitialPageSettings settings) {
        settings.addMetaTag("google-signin-client_id",getGoogleClientId());
    }

    private String getGoogleClientId() {
        return getEnv("GOOGLE_CLIENT_ID");
    }

    private String getEnv(String key) {

    }
}
