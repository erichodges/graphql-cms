import { printSchema } from 'graphql';
import schema from './schema';
import path from 'path';

export default {
  schema: printSchema(schema),
  uploadRoot: path.resolve(__dirname, '../public'),
  rules: {
    product: {
      uploadPath: 'product/img',
      fields: {
        _id: {},
        name: {},
        price: {},
        shortDescription: {},
        pageTitle: {},
        metaDescription: {},
        metaKeywords: {},
        categories: {},
        ingredients: {},
        createdAt: {},
        updatedAt: {},
        image: {
          inputType: 'file',
        },
        isPublished: {},
        longDescription: { inputType: 'markdown' },
        notes: { inputType: 'markdown' },
      },
    },
    coupon: {
      fields: {
        _id: {},
        couponCode: {},
        description: {},
        discountAmount: {},
        minimumAmount: {},
        expirationDate: {
          label: 'expiration date',
          inputType: 'date',
        },
        createdAt: {},
        updatedAt: {},
      },
    },
  },
};
