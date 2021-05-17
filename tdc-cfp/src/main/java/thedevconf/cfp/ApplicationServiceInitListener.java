package thedevconf.cfp;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.server.ServiceInitEvent;
import com.vaadin.flow.server.VaadinServiceInitListener;

import java.util.logging.Logger;

public class ApplicationServiceInitListener
        implements VaadinServiceInitListener {

    Logger log = Logger.getLogger(ApplicationServiceInitListener.class.getName());

    @Override
    public void serviceInit(ServiceInitEvent event) {
        log.info("serviceInit");
        event.getSource().addUIInitListener(uiEvent -> {
            final UI ui = uiEvent.getUI();
            ui.addBeforeEnterListener(this::authenticateNavigation);
        });
    }

    private void authenticateNavigation(BeforeEnterEvent event) {
        log.info("authenticateNavigation");
        if (! MainView.class.equals(event.getNavigationTarget())
                && ! SecurityUtils.isUserLoggedIn()) {
            event.rerouteTo(MainView.class);
        }
    }

}