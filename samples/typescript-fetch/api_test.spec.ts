/**
 * Mail Baby API
 * This is an API for accesssing the mail services.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: detain@interserver.net
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("DefaultApi", () => {
  let instance: api.DefaultApi
  beforeEach(function() {
    instance = new api.DefaultApi(config)
  });

  test("getMailById", () => {
    const id: number = 789
    return expect(instance.getMailById(id, {})).resolves.toBe(null)
  })
  test("getMailOrders", () => {
    return expect(instance.getMailOrders({})).resolves.toBe(null)
  })
  test("pingServer", () => {
    return expect(instance.pingServer({})).resolves.toBe(null)
  })
  test("placeMailOrder", () => {
    const body: api.MailOrder = undefined
    return expect(instance.placeMailOrder(body, {})).resolves.toBe(null)
  })
  test("sendMailById", () => {
    const id: number = 789
    const subject: string = "subject_example"
    const body: string = "body_example"
    const to: string = "to_example"
    const from: string = "from_example"
    return expect(instance.sendMailById(id, subject, body, to, from, {})).resolves.toBe(null)
  })
  test("validateMailOrder", () => {
    return expect(instance.validateMailOrder({})).resolves.toBe(null)
  })
  test("viewMailLogById", () => {
    const id: number = 789
    const searchString: string = "searchString_example"
    const skip: number = 56
    const limit: number = 56
    return expect(instance.viewMailLogById(id, searchString, skip, limit, {})).resolves.toBe(null)
  })
})

