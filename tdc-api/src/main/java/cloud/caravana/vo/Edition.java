package cloud.caravana.vo;

public class Edition {
    String name;
    EditionStatus status;

    public Edition(String name,EditionStatus status){
        this.name = name;
        this.status = status;
    }

    public String getName(){
        return name;
    }

    public EditionStatus getStatus(){
        return status;
    }
}
