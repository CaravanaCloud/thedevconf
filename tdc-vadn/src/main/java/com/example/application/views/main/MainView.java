package com.example.application.views.main;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.tabs.*;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.router.Route;

@Route
// @CssImport("./views/main/main-view.css")
@PWA(name = "TheDevConf", shortName = "TheDevConf", enableInstallPrompt = false)
// @JsModule("./styles/shared-styles.js")
public class MainView extends VerticalLayout {
    private static final long serialVersionUID = 1L;

    public MainView() {
        H1 hTitle = new H1();
        
        
        hTitle.setText("TheDevConf PoC");
        add(hTitle);
        addCoupon();
        addTabs();
    }

    private void addCoupon() {
        FormLayout form = new FormLayout();

        TextField lblCoupon = new TextField();
        lblCoupon.setLabel("Coupon Code");

        Button button = new Button("Aplicar");
        button.setMaxWidth("6em");
        button.addClickListener(event -> button.setText("You pushed it!"));
    
        form.add(lblCoupon);
        form.add(button);
        
        add(form);
    }

    private void addTabs() {
        Tab tab1 = new Tab("Premium Pass");
        
        Tab tab2 = new Tab("Passport Premium");
        Div page2 = new Div();
        page2.setText("Page#2");
        page2.setVisible(false);
        
        Tab tab3 = new Tab("Vip Pass");
        Div page3 = new Div();
        page3.setText("Page#3");
        page3.setVisible(false);
        
        TracksView tracksView = new TracksView();
        Map<Tab, Component> tabsToPages = new HashMap<>();
        tabsToPages.put(tab1, tracksView);
        tabsToPages.put(tab2, page2);
        tabsToPages.put(tab3, page3);
        
        Tabs tabs = new Tabs(tab1, tab2, tab3);
        
        Div pages = new Div(tracksView, page2, page3);
        
        tabs.addSelectedChangeListener(event -> {
            tabsToPages.values().forEach(page -> page.setVisible(false));
            Component selectedPage = tabsToPages.get(tabs.getSelectedTab());
            selectedPage.setVisible(true);
        });

        tabs.setWidthFull();
        
        add(tabs, pages);
    }
    
}
