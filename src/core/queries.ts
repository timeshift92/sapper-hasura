

export const PRODUCT_LIST = `{
    products(limit:5) {
        product_locales {
        name
        }
        brand {
        id
        }
    }
}`
export const PRODUCT_SUB = `subscription {
    products(where: {id: {_eq: 284}}) {
        product_locales {
            name
        }
        brand {
                id
        }
    }
}`

export const PRODUCT_MUTATE = `mutation upd($name: String!) {
    update_product_locales(where: {locales_id: {_eq: 1}, product_id: {_eq: 284}}, _set: {name: $name}) {
      affected_rows
    }
  }
  `