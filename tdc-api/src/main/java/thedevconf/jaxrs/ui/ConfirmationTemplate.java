package thedevconf.jaxrs.ui;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("")
public class ConfirmationTemplate extends BaseResource{

  @Inject
  Template confirmation;

  @GET
  @Path("confirmation")
  @Produces(MediaType.TEXT_HTML)
  public TemplateInstance getConfirmation() {
    return instanceOf(confirmation);
  }
}