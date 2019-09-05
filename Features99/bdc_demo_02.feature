Feature: BDC validation on demowebshop
@Regression
Scenario: Registered user access to cart in Demowebshop
Given user launched demo webshop app in chrome browser
Then user searches for the item of his choice
And adds the item to the cart
@Sanity
Scenario: Registered user access track the orderred item in the demowebShop
Given user has already placed an order for his favorite items
And  user tries to access the order tracking dashboard
Then identifies the state of the order