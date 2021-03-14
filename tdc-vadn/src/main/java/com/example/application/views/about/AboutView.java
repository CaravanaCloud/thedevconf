package com.example.application.views.about;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.example.application.views.about.AboutView.AboutViewModel;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.PageTitle;
import com.example.application.views.main.MainView;

@JsModule("./views/about/about-view.js")
@CssImport("./views/about/about-view.css")
@Tag("about-view")
@Route(value = "about", layout = MainView.class)
@PageTitle("About")
public class AboutView extends PolymerTemplate<AboutViewModel> {

    // This is the Java companion file of a design
    // You can find the design file in /frontend/views/views/about/about-view.js
    // The design can be easily edited by using Vaadin Designer
    // (vaadin.com/designer)

    public static interface AboutViewModel extends TemplateModel {
    }

    public AboutView() {
    }
}
