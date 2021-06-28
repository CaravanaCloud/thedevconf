package thedevconf.jaxrs.api.blueprints.dnc;


public @interface Moment {
    MIType value() default MIType.Interval;
}
