export default class UserDto {
  email
  id
  firstname
  lastname

  constructor(model) {
    this.firstname = model.firstname
    this.lastname = model.lastname
    this.email = model.email
    this.id = model._id
  }
}