package thedevconf.api.rs;

import static java.lang.String.format;
import static javax.ws.rs.core.MediaType.MULTIPART_FORM_DATA;
import static javax.ws.rs.core.MediaType.TEXT_HTML;

import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Logger;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;
import thedevconf.api.data.FormData;
import thedevconf.api.data.PageTemplate;

@Path("/pages")
public class PageResource {
    @Inject
    Logger logger;

    @GET
    @Path("/{pageCode}")
    @Produces(TEXT_HTML)
    public String getPage(@PathParam("pageCode") String pageCode) {
        logger.info("GET /pages/" + pageCode);
        var pages =  PageTemplate.list("code", pageCode);
        if (pages.isEmpty()) {
            return "Page not found";
        }else {
            var page = (PageTemplate) pages.get(0);
            var content = page.getContent();
            return content;
        }
    }

    //curl -v -X PUT --form file='@./tdc-api/templates/future-basic-2020/form.html' http://localhost:8181/pages/demo-future-2021
    //curl -v -X PUT --form file='@./tdc-api/templates/future-basic-2020/success.html' http://localhost:8181/pages/demo-future-2021-success
    @PUT
    @Path("/{pageCode}")
    @Produces(TEXT_HTML)
    @Consumes(MULTIPART_FORM_DATA)
    @Transactional
    public String replaceTemplate(
        @MultipartForm MultipartBody data,
        @PathParam("pageCode") String pageCode) throws Exception {
        var input = data.getFile();
        if (input == null) {
            return "No file received";
        }
        String text = new String(input.readAllBytes(), StandardCharsets.UTF_8);
        System.out.println(format("Received %s %d",pageCode,text.length()));
        var pages =  findPage(pageCode);
        if (pages.isPresent()) {
            logger.info(format("OK Creating updating existing page %s",pageCode));
            pages.get().setContent(text);
        }else {
            logger.info(format("Creating new page %s",pageCode));
            var page = new PageTemplate();
            page.setContent(text);
            page.setCode(pageCode);
            page.persist();
        }
        return text;
    }

    @POST
    @Path("/{pageCode}")
    @Produces(TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Transactional
    public String receiveForm(String body, @PathParam("pageCode") String pageCode) {
        
        logger.info(format("POST received for page %s", pageCode));
        logger.info(body);
        var formData = FormData.of(pageCode, body);
        formData.persist();
        var page = findSuccesPage(pageCode).or( () -> findPage(pageCode));
        if (page.isPresent()) {
            logger.info(format("redirecting to %s", page.get().getCode()));
            return page.get().getContent();
        }
        else
            return "Page not found";
    }
    
    private Optional<PageTemplate> findPage(String pageCode) {
        var pages = PageTemplate.list("code", pageCode);
        if (pages.isEmpty()) 
            return Optional.empty();
        else 
            return Optional.of((PageTemplate) pages.get(0));
    }


    private Optional<PageTemplate> findSuccesPage(String pageCode) {
        return findPage( pageCode + "-success");
    }
}
