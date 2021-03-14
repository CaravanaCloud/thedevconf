package com.example.application.views.home;

import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

public class HomeView extends VerticalLayout {
    public HomeView(){
        Span spnHello = new Span();
        spnHello.getElement().setProperty("innerHTML", "Hello CFP");
        add(spnHello);
    }
}
