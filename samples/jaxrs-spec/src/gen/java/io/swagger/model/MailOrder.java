package io.swagger.model;

import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class MailOrder   {
  private @Valid Integer id = null;
  private @Valid String status = null;
  private @Valid String username = null;
  private @Valid String password = null;
  private @Valid String comment = null;

  /**
   **/
  public MailOrder id(Integer id) {
    this.id = id;
    return this;
  }

  
  @ApiModelProperty(example = "1234", required = true, value = "")
  @JsonProperty("id")
  @NotNull

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

  
  @ApiModelProperty(example = "active", required = true, value = "")
  @JsonProperty("status")
  @NotNull

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

  
  @ApiModelProperty(example = "mb1234", required = true, value = "")
  @JsonProperty("username")
  @NotNull

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

  
  @ApiModelProperty(example = "guest123", value = "")
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

  
  @ApiModelProperty(example = "main mail account", value = "")
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
