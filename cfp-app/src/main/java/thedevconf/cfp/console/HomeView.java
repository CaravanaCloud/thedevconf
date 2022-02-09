package thedevconf.cfp.console;

import java.util.Locale;
import java.util.ResourceBundle;

import javax.inject.Inject;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;

import cloud.caravana.auth.ClientSession;
import thedevconf.cfp.ux.ProposalForm;

@Route("/user/home")
public class HomeView extends AppLayout {
    private ResourceBundle cfpMsg;
    Locale locale = Locale.ENGLISH;
    
    @Inject
    public HomeView(
            ClientSession session,
            WhoAmIView whoAmIView,
            ProposalForm proposalForm) {
        DrawerToggle toggle = new DrawerToggle();

        this.cfpMsg = session.getCFPMessages();

        H1 title = new H1(cfpMsg.getString("cfp.title"));
        title.getStyle()
                .set("font-size", "var(--lumo-font-size-l)")
                .set("margin", "0");

        Tabs tabs = getTabs(whoAmIView, proposalForm);

        addToDrawer(tabs);
        addToNavbar(toggle, title);
    }

    private Tabs getTabs(Component whoAmIView, ProposalForm proposalForm) {
        var tabs = new Tabs();
        
        
        var tabPres = createTab(VaadinIcon.PRESENTATION, cfpMsg.getString("cfp.nav.submitProposal"), null);
        tabPres.getElement().addEventListener("click", e -> {
          setContent(proposalForm);
        });

        var tabDash = createTab(VaadinIcon.DASHBOARD, "Dashboard", null);
        tabDash.getElement().addEventListener("click", e -> {
          setContent(whoAmIView);
        });
        tabs.add(
          tabPres,
          tabDash,
          createTab(VaadinIcon.CART, "Orders",null),
          createTab(VaadinIcon.USER_HEART, "Customers",null),
          createTab(VaadinIcon.PACKAGE, "Products",null),
          createTab(VaadinIcon.RECORDS, "Documents",null),
          createTab(VaadinIcon.LIST, "Tasks",null),
          createTab(VaadinIcon.CHART, "Analytics",null)
        );
        tabs.setOrientation(Tabs.Orientation.VERTICAL);
        return tabs;
      }
    
      private Tab createTab(VaadinIcon viewIcon, 
        String viewName,
        RouterLink link) {
        var icon = viewIcon.create();
        icon.getStyle()
                .set("box-sizing", "border-box")
                .set("margin-inline-end", "var(--lumo-space-m)")
                .set("margin-inline-start", "var(--lumo-space-xs)")
                .set("padding", "var(--lumo-space-xs)");
        if (link == null){
          link = new RouterLink();
          link.add(icon, new Span(viewName));
        }
        return new Tab(link);
      }
}
