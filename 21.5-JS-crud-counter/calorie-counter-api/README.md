### Set up instructions
* cd into the database directory:
`rails db:create`
`rails db:migrate`
`rails db:seed`
`rails s`

#### CalorieEntry records are RESTful and namspaced under /api/v1:

```
GET	'/calorie_entries'	/calorie_entries/index	display a list of all calorie_entries
GET	'/calorie_entries/new'	/calorie_entries/new	return an HTML form for creating a new calorie_entry
POST	'/calorie_entries'	--	create a new calorie_entry
GET	'/calorie_entries/:id'	/calorie_entries/show	display a specific calorie_entry
GET	'/calorie_entries/:id/edit'	/calorie_entries/edit	return an HTML form for editing a calorie_entry
PUT	'/calorie_entries/:id'	--	update a specific calorie_entry
DELETE	'/calorie_entries/:id'	--	delete a specific calorie_entry
```

Ask if clarification is needed