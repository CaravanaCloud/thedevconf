package thedevconf.jaxrs.ui;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import thedevconf.jaxrs.Configuration;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static javax.ws.rs.core.MediaType.TEXT_PLAIN;

@Path("")
public class IndexResource {
    @Inject
    Configuration cfg;

    @Inject
    Template index;

    @Inject
    Template login;

    @GET
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance get() {
        TemplateInstance template = index.data("cfg",cfg);
        return template;
    }

    @GET
    @Path("login")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance getLogin() {
        TemplateInstance template = login.data("cfg",cfg);
        return template;
    }
}