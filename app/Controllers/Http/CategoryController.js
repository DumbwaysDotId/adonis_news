'use strict'

const Category = use('App/Models/Category')
const { validate } = use('Validator')

class CategoryController {

  async index ({ request, response, view }) {
    const categories = await Category.all()

    return {
      data: categories
    }
  }

  async store ({ request }){
    const rules = {
      title: 'required'
    }

    const validation = await validate(request.all(), rules)

    if(validation.fails()){
      return {
        message: "error",
        data: validation.messages()
      }
    }

    const category = await Category.create(request.all())

    return {
      message: "success",
      data: category
    }
  }
 
}

module.exports = CategoryController
