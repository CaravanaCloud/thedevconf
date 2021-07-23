package thedevconf.jaxrs.api.entity;

public enum AcceptedTerms {
    FALSE(0),
    TRUE(1);

    private final int value;

    AcceptedTerms(int value) {
        this.value = value;
    }

    public int getAcceptedTerms() {
        return value;
    }
}