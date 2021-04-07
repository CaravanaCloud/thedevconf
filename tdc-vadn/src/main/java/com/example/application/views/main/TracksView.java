package com.example.application.views.main;

import com.example.application.data.entity.Track;
import com.example.application.data.service.TracksService;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.HasComponents;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import java.util.List;
import java.util.stream.Collectors;

@SuppressWarnings("serial")
public class TracksView  extends VerticalLayout {
    private static final String BTN_ED_SIZE = "10em";
    private static final long serialVersionUID = 1L;

    final HorizontalLayout lytEditions = new HorizontalLayout();
    final ComponentEventListener<ClickEvent<Button>> listener = event -> event.getSource().setText("OK!!");
    private TracksService tracksService;

    public TracksView(TracksService tracksService){
        this.tracksService = tracksService;

        mkDiv("Personalize sua experiencia");
        mkEditions();
        mkTracks();
        mkDiv("Finalize sua inscrição");
        mkDiv("Valor Final: R$ 350,00");
        mkButton("Prosseguir", listener, BTN_ED_SIZE, this);
    }

    private void mkDiv(String text) {
        Div page1 = new Div();
        page1.setText(text);
        add(page1);
    }

    private void mkTracks() {
        HorizontalLayout days = new HorizontalLayout();
        tracksService.getAlternatives();
        List<Track> tracks = tracksService.getTracks();

        List<Track> tracksFirstDay = tracks
                .stream()
                .filter(track -> track.getDate().equalsIgnoreCase("23-03-2021"))
                .collect(Collectors.toList());

        System.out.println(tracksFirstDay);

        mkDay(days, "Terça,  23/03/2021", "Agile", "Análise", "APIs", "JS", "AI", "UX", "DEVTEST", "DevOps", ".NET", "Python");
        mkDay(days, "Quarta, 24/03/2021", "Coaching", "Management", "Microservices", "Gestão", "Data Science", "Services", "Testes", "LGPD", "Java", "Web");
        mkDay(days, "Quinta, 25/03/2021", "Kanban", "Agility", "XP", "Mobile", "Dados", "Transformation", "Security", "Cloud", "Architecture", "Go");
        
        add(days);
    }

    private void mkDay(HorizontalLayout days, String title, String... tracks) {
        VerticalLayout day = new VerticalLayout();
        
        Div divTitle = new Div();
        divTitle.setText(title);
        day.add(divTitle);

        for (String track: tracks){
            mkButton(track, listener, BTN_ED_SIZE, day);
        }

        days.add(day);
    }

    private void mkEditions() {
        mkButton("Innovation");
        mkButton("Connections");
        mkButton("Transformation");
        mkButton("Future");
        add(lytEditions);
    }

    private void mkButton(String title){
        mkButton(title,listener,BTN_ED_SIZE, lytEditions);
    }

    private void mkButton(String title, 
    ComponentEventListener<ClickEvent<Button>>  listener, 
    String size, 
    HasComponents parent) {
        new Button(title, listener){{
            setWidth(size);
            setMaxWidth(size);
            parent.add(this);
        }};
    }
}
