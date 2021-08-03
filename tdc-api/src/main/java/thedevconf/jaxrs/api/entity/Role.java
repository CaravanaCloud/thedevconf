package thedevconf.jaxrs.api.entity;

public enum Role {
  USER(1),
  STAFF(2),
  ADMIN(3);

  private final int roleID;

  Role(int roleID) {
    this.roleID = roleID;
  }

  public int getRoleID() {
    return roleID;
  }
}
