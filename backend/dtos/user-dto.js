export default class UserDto {
  email
  id
  name
  lastname

  constructor(model) {
    this.name = model.name
    this.lastname = model.lastname
    this.email = model.email
    this.id = model._id
  }
}