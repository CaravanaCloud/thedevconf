package thedevconf.api.rs;

import static javax.ws.rs.core.MediaType.MULTIPART_FORM_DATA;
import static javax.ws.rs.core.MediaType.TEXT_HTML;

import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.UriInfo;

import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import thedevconf.api.data.PageTemplate;

@Path("/pages")
public class PageResource {
    
    @GET
    @Path("/{pageCode}")
    @Produces(TEXT_HTML)
    public String getPage(@PathParam("pageCode") String pageCode) {
        var pages =  PageTemplate.list("code", pageCode);
        if (pages.isEmpty()) {
            return "Page not found";
        }else {
            var page = (PageTemplate) pages.get(0);
            var content = page.getContent();
            return content;
        }
    }

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
        System.out.println(text);
        var pages =  PageTemplate.list("code", pageCode);
        if (pages.isEmpty()) {
            var page = new PageTemplate();
            page.setContent(text);
            page.setCode(pageCode);
            page.persist();
        }else {
            var page = (PageTemplate) pages.get(0);
            page.setContent(text);
        }
        return text;
    }

    @POST
    @Path("/{pageCode}")
    @Produces(TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Transactional
    public String receiveForm(Map<String, String> data, @PathParam("pageCode") String pageCode) {
        StringBuilder result = new StringBuilder();
        
        return "Map received (%s)".formatted(data.size());
    }
}
