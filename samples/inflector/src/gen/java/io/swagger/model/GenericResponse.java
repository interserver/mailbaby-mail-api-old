package io.swagger.model;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.v3.oas.annotations.media.Schema;



@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaInflectorServerCodegen", date = "2021-04-06T14:14:50.247955-04:00[America/New_York]")
public class GenericResponse   {
  @JsonProperty("status")
  private String status = null;
  @JsonProperty("status_text")
  private String statusText = null;
  /**
   **/
  public GenericResponse status(String status) {
    this.status = status;
    return this;
  }

  
  @Schema(example = "ok", description = "")
  @JsonProperty("status")
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }

  /**
   **/
  public GenericResponse statusText(String statusText) {
    this.statusText = statusText;
    return this;
  }

  
  @Schema(example = "The command completed successfully.", description = "")
  @JsonProperty("status_text")
  public String getStatusText() {
    return statusText;
  }
  public void setStatusText(String statusText) {
    this.statusText = statusText;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GenericResponse genericResponse = (GenericResponse) o;
    return Objects.equals(status, genericResponse.status) &&
        Objects.equals(statusText, genericResponse.statusText);
  }

  @Override
  public int hashCode() {
    return Objects.hash(status, statusText);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GenericResponse {\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    statusText: ").append(toIndentedString(statusText)).append("\n");
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
