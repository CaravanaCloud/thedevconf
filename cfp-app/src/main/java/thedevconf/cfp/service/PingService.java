package thedevconf.cfp.service;

import javax.ws.rs.GET;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

@RegisterRestClient(configKey = "ping")
public interface PingService {

    @GET
    String ping();
}