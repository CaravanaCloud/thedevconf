package com.example.application.views.main;

import java.util.Optional;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.router.Route;

@Route
// @CssImport("./views/main/main-view.css")
@PWA(name = "TheDevConf", shortName = "TheDevConf", enableInstallPrompt = false)
// @JsModule("./styles/shared-styles.js")
public class MainView extends VerticalLayout {
    private H1 hTitle = new H1();

    public MainView() {
        hTitle.setText("Helo World! ");
        add(hTitle);
    }
}
