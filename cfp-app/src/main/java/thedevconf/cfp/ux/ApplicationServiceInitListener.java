package thedevconf.cfp.ux;

import com.vaadin.flow.router.RouteConfiguration;
import com.vaadin.flow.server.ServiceInitEvent;
import com.vaadin.flow.server.VaadinServiceInitListener;

public class ApplicationServiceInitListener
        implements VaadinServiceInitListener {

    @Override
    public void serviceInit(ServiceInitEvent event) {
        // add view only during development time
        if (!event.getSource()
                .getDeploymentConfiguration()
                .isProductionMode()) {
            RouteConfiguration configuration =
               RouteConfiguration.forApplicationScope();

            configuration.removeRoute("tokens");
        }
    }
}