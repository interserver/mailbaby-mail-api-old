package io.swagger.model;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.v3.oas.annotations.media.Schema;



@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaInflectorServerCodegen", date = "2021-04-06T14:14:50.247955-04:00[America/New_York]")
public class MailOrder   {
  @JsonProperty("id")
  private Integer id = null;
  @JsonProperty("status")
  private String status = null;
  @JsonProperty("username")
  private String username = null;
  @JsonProperty("password")
  private String password = null;
  @JsonProperty("comment")
  private String comment = null;
  /**
   **/
  public MailOrder id(Integer id) {
    this.id = id;
    return this;
  }

  
  @Schema(example = "1234", required = true, description = "")
  @JsonProperty("id")
  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }

  /**
   **/
  public MailOrder status(String status) {
    this.status = status;
    return this;
  }

  
  @Schema(example = "active", required = true, description = "")
  @JsonProperty("status")
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }

  /**
   **/
  public MailOrder username(String username) {
    this.username = username;
    return this;
  }

  
  @Schema(example = "mb1234", required = true, description = "")
  @JsonProperty("username")
  public String getUsername() {
    return username;
  }
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   **/
  public MailOrder password(String password) {
    this.password = password;
    return this;
  }

  
  @Schema(example = "guest123", description = "")
  @JsonProperty("password")
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }

  /**
   **/
  public MailOrder comment(String comment) {
    this.comment = comment;
    return this;
  }

  
  @Schema(example = "main mail account", description = "")
  @JsonProperty("comment")
  public String getComment() {
    return comment;
  }
  public void setComment(String comment) {
    this.comment = comment;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MailOrder mailOrder = (MailOrder) o;
    return Objects.equals(id, mailOrder.id) &&
        Objects.equals(status, mailOrder.status) &&
        Objects.equals(username, mailOrder.username) &&
        Objects.equals(password, mailOrder.password) &&
        Objects.equals(comment, mailOrder.comment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, status, username, password, comment);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MailOrder {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
