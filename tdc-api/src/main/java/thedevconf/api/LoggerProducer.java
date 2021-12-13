package thedevconf.api;

import java.util.logging.Logger;

import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;

public class LoggerProducer {
    @Produces
    public Logger getLogger(final InjectionPoint ip)
    {
        return Logger.getLogger(ip.getMember().getDeclaringClass().getCanonicalName());
    }
}
