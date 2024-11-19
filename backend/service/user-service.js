import ApiError from '../exceptions/api-error.js'
import UserModel from '../models/user-model.js'
import bcrypt, {hash} from 'bcrypt'
import UserDto from '../dtos/user-dto.js'
import tokenService from './token-service.js'

class UserService {

  async register (email, password, name, lastname) {
    const candidate = await UserModel.findOne({email})

    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
    }

    const hashPassword = await hash(password, 3)

    const user = await UserModel.create({email, name, lastname, password: hashPassword})
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async login (email, password) {
    const user = await UserModel.findOne({email})

    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден')
    }

    const isPassEquals = await bcrypt.compare(password, user.password)

    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль')
    }

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async logout (refreshToken) {
    return await tokenService.removeToken(refreshToken)
  }

  async refresh (refreshToken) {
    if (!refreshToken) {
      throw new ApiError.UnauthorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await tokenService.findToken(refreshToken)
    if (!userData || !tokenFromDb) {
      throw new ApiError.UnauthorizedError()
    }
    const user = await UserModel.findById(userData.id)
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

}

export default new UserService()