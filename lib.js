'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * @name itemRepeater
 * @param itemName the name of the item to repeat
 * @param count the number of times to repeat the item name in the array
 * @returns an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => Array(count).fill(itemName)

/**
 * @name constructCarts
 * @param listings the item/price pairs
 * @param customers an array of customer objects which contain the customer's name and an object shoppingList
 * @returns an array of carts with each given customer's shopping list as an array of items
 */
const constructCarts =
  listings =>
    customers =>
      customers.map(customer => ({
        customer: customer.name,
        items: entries(customer.shoppingList).reduce((listCtor, item) =>
          listCtor.concat(itemRepeater(item[0])(item[1])), [])
      }))

module.exports = {
  listing,
  customer,
  constructCarts
}
