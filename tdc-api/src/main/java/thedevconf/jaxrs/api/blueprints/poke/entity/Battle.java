package thedevconf.jaxrs.api.blueprints.poke.entity;

import thedevconf.jaxrs.api.blueprints.dnc.Moment;

import java.time.LocalDateTime;

import static thedevconf.jaxrs.api.blueprints.dnc.MIType.Interval;

@Moment(Interval)
public class Battle {
    Season season;
    Home home;
    Guest guest;
    LocalDateTime startTime;
}
