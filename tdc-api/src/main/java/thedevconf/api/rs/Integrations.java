package thedevconf.api.rs;

import thedevconf.api.data.FormData;

public class Integrations {

    public static void onFormReceived(FormData formData) {
        System.out.println("Form received");
        System.out.println(formData);
    }

}
