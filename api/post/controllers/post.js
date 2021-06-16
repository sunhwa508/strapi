'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    let entity;

    let user = ctx.state.user.id;

    ctx.request.body.author = user;

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.post.create(data, { files });
    } else {
      entity = await strapi.services.post.create(ctx.request.body);
    }
    
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};