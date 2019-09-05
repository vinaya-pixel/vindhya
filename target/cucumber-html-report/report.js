$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features99/bdc_demo_01.feature");
formatter.feature({
  "name": "BDC validation on demowebshop",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Users choice to apt for an account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user accesss the signup page",
  "keyword": "Given "
});
formatter.match({
  "location": "bdc_demo_01_def.user_accesss_the_signup_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gets  the credentials",
  "keyword": "And "
});
formatter.match({
  "location": "bdc_demo_01_def.gets_the_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vhdgfogf",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Features99/bdc_demo_02.feature");
formatter.feature({
  "name": "BDC validation on demowebshop",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Registered user access to cart in Demowebshop",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user launched demo webshop app in chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "bdc_demo_02_def.user_launched_demo_webshop_app_in_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for the item of his choice",
  "keyword": "Then "
});
formatter.match({
  "location": "bdc_demo_02_def.user_searches_for_the_item_of_his_choice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds the item to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "bdc_demo_02_def.adds_the_item_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registered user access track the orderred item in the demowebShop",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user has already placed an order for his favorite items",
  "keyword": "Given "
});
formatter.match({
  "location": "bdc_demo_02_def.user_has_already_placed_an_order_for_his_favorite_items()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tries to access the order tracking dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "bdc_demo_02_def.user_tries_to_access_the_order_tracking_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "identifies the state of the order",
  "keyword": "Then "
});
formatter.match({
  "location": "bdc_demo_02_def.identifies_the_state_of_the_order()"
});
formatter.result({
  "status": "passed"
});
});