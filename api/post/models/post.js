'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles:{
        async afterFindOne(result, params, populate){
            const res = await strapi.query('post')
            .model.query(q => {
                q.where('id', result.id);
                q.increment('view',1);
            }).fetch();
            console.log(res)
        }
    }
};
