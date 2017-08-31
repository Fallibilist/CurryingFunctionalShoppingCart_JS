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
 * @function itemRepeater
 * @author Greg Hill
 * @description creates an array of count size with the string itemName as the value of each element
 * @param itemName the name of the item to repeat
 * @param count the number of times to repeat the item name in the array
 * @returns an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => Array(count).fill(itemName)

/**
 * @function constructCarts
 * @author Greg Hill
 * @description constructs an an array of cart objects which list the items in the customer's shopping list
 * @param listings the item/price pairs
 * @param customers an array of customer objects which contain the customer's name and an object shoppingList
 * @returns an array of carts with each given customer's shopping list as an array of items
 */
const constructCarts =
  listings =>
    customers =>
      customers.map(customer =>
        (cart(customer.name, ...entries(customer.shoppingList).reduce((listCtor, item) =>
          listCtor.concat(itemRepeater(item[0])(item[1])), []))))

module.exports = {
  listing,
  customer,
  constructCarts
}
