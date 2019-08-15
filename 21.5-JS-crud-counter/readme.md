## Flatiron Calorie Counter
Hello, our client is trying to launch a calorie counter as a tool for their customers to use. We already have a functioning backend API where we can query and store data. However, our frontend developer had to take an unexpected leave of absence before finishing. We need your help to complete this SPA (single page application). **_We are on a tight deadline and need you to have a functioning application by the EOD (end of day)._**

---

### Setup
You can find the code for the backend API in the `./calorie-counter-api` directory. We are using postgresql instead of sqlite for this project so **make sure you have that installed**. How you can check to know for sure is run `psql` in your terminal. 
Afterwards, here are some set up instructions. In your terminal:

* `$ cd ./calorie-counter-api`
* `$ bundle install`
* `$ rails db:create`
* `$ rails db:migrate`
* `$ rails db:seed`

As far as CRUD goes, the backend should have everything you need to `create`, `read` and `update` and `delete`. Still, we're counting on your abilities as a fullstack dev to figure out how the backend works by looking at the codebase.

Take some time to understand the HTML layout that our previous frontend dev has already set up. For CSS library, the previous dev chose [UIkit](https://getuikit.com/). All those extra classes you see are for styling purposes. Feel free to add additional classes/ids at your discretion. *We would advise against removing things from the format of the current setup without good reasons.*

---

### Here are the deliverables:
We want a place for users to keep track of their caloric intake.
* Remove boiler-plate `<li>` tags and render `li.calories-list-item` elements with fetch response from backend API.
* A user can record a new calorie intake which will be *prepended* to the list with pessimistic rendering.
  * To keep the styling consistent, make sure the list-item you are prepending has the following format (you may additional attributes at your discretion):
  ```html
   <li class="calories-list-item">
      <div class="uk-grid">
        <div class="uk-width-1-6">
          <strong><!-- calorie amount goes here--></strong>
          <span>kcal</span>
        </div>
        <div class="uk-width-4-5">
          <em class="uk-text-meta"><!-- addition notes go here --></em>
        </div>
      </div>
      <div class="list-item-menu">
        <a class="edit-button" uk-toggle="target: #edit-form-container" uk-icon="icon: pencil"></a>
        <a class="delete-button" uk-icon="icon: trash"></a>
      </div>
    </li>
  ```
  * Each time an entry is made in the list, calculate the sum of all the calories and set this as the `value` attribute of the `#progress-bar` element.
* A user can delete a calorie intake entry by clicking the respective trash icon. You decide between optimistic or pessistic rendering.
* When clicking the pencil icon, a modal will appear.
  * This modal should contain a form pre-populated with the information from the respective calorie-entry.
  * clicking anywhere outside the modal will cause the modal to disappear.
  * clicking the 'Save Changes' button in the modal form will update that entry on the front-end as well as the backend, we would like this to happen pessimistically.
  * This feature is complicated, we think you should work on it last.

We want want to give beginners an idea of how much calories they should be consuming. We'll use [Basal Metabolic Rate (BMR) formula](https://www.active.com/fitness/calculators/bmr) to accomplish this. Traditionally, there is a formula for female and male calcuation. We will be using both to return a range of number back to the user ie: 1200kcal - 1400kcal.
* Clicking the "Calculate BMR" button should update the `span#lower-bmr-range` and `span#higher-bmr-range` with the appropriate values"
  * forumla for lower-range: `BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)`
  * formula for upper-range: `BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)`
* Clicking the calculate BMR button should also set the `#progress-bar`'s max attribute to the average of the two numbers above.


