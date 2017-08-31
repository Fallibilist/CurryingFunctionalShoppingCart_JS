# CurryingFunctionalShoppingCart_JS
A JavaScript program that builds on a previous currying project, converting to full functional programming principles and adding new functionality

## Functions

<dl>
<dt><a href="#itemRepeater">itemRepeater(itemName, count)</a> ⇒</dt>
<dd><p>Creates an array of count size with the string itemName as the value of each element</p>
</dd>
<dt><a href="#constructCarts">constructCarts(listings, customers)</a> ⇒</dt>
<dd><p>Constructs an an array of cart objects which list the items in the customer&#39;s shopping list</p>
</dd>
</dl>

<a name="itemRepeater"></a>

## itemRepeater(itemName, count) ⇒
Creates an array of count size with the string itemName as the value of each element

**Kind**: global function

**Returns**: an array with the `itemName` repeated `count` number of times

**Author**: Greg Hill

| Param | Description |
| --- | --- |
| itemName | the name of the item to repeat |
| count | the number of times to repeat the item name in the array |

<a name="constructCarts"></a>

## constructCarts(listings, customers) ⇒
Constructs an an array of cart objects which list the items in the customer's shopping list

**Kind**: global function

**Returns**: an array of carts with each given customer's shopping list as an array of items

**Author**: Greg Hill

| Param | Description |
| --- | --- |
| listings | the item/price pairs |
| customers | an array of customer objects which contain the customer's name and an object shoppingList |
