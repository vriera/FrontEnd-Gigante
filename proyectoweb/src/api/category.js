import { Api } from './api.js';
export {CategoriesApi, Category}

class Category{
    constructor( id , description ){
        if(id === undefined) {
            this.id = id;
        }
        this.description = description;
    }
}

class CategoriesApi{

    static get Url() {
        return `${Api.baseUrl}/categories`;
    }

    static async getCategories(controller){
        return await Api.get(CategoriesApi.Url , true , controller);
    }
    static async getCategoryById( category, controller ){
        if ( Number.isInteger(category.id)){
            return await Api.get(`${CategoriesApi.Url}/${category.id}` , true , controller);
        }
    }

    static async postCategory( category , controller ){
        if ( typeof category.description === 'string' || category.description instanceof String ){
            return await Api.post(CategoriesApi.Url , true ,  category, controller);
        }
    }

    static async putCategory( category, controller ){
        if ( Number.isInteger(category.id)){
            return await Api.put( `${CategoriesApi.Url}/${category.id}` , true ,  category , controller );
        }
    }

    static async deleteCategory( id, controller ){
        if ( Number.isInteger(id) ){
            return await Api.post( `${CategoriesApi.Url}/${id}` , true , controller)
        }
    }
}
