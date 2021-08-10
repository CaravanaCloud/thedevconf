package thedevconf.jaxrs.api.blueprints.poke.entity;

import static thedevconf.jaxrs.api.blueprints.dnc.MIType.Interval;

import java.time.LocalDateTime;
import thedevconf.jaxrs.api.blueprints.dnc.Moment;

@Moment(Interval)
public class Battle {
    Season season;
    Home home;
    Guest guest;
    LocalDateTime startTime;
}
