const calorieForm = document.getElementById('new-calorie-form');
const calorieList = document.getElementById('calories-list');
const calorieField = document.getElementById('calories');
const notesField = document.getElementById('notes');
const submit = document.getElementById('submit');
const progressBar = document.getElementById('progress-bar');
const deleteBtns = document.getElementsByClassName('delete-button');
const editId = document.getElementById('editId')
const editCalories = document.getElementById('editCalories')
const editNotes = document.getElementById('editNotes')

// beginregion - CRUD

// CREATE
submit.addEventListener('click', () => {
    event.preventDefault();
    let newEntry = {
        calorie: calorieField.value,
        note: notesField.value
    }
    createEntry(newEntry);
});

// CREATE (cont'd)
function createEntry(entry) {
    let li = document.createElement('li')
    li.id = 'li' + entry.id;
    li.className = "calories-list-item";
    li.innerHTML = `
    <div class="uk-grid">
            <div class="uk-width-1-6">
              <strong id="${entry.id + 'calorie'}" >${entry.calorie}</strong>
              <span>kcal</span>
            </div>
            <div class="uk-width-4-5">
              <em id="${entry.id + 'note'}" class="uk-text-meta">${entry.note}</em>
            </div>
          </div>
          <div class="list-item-menu">
            <a class="edit-button" onclick='openEdit(${entry.id}, ${entry.calorie}, "${entry.note}")' uk-icon="icon: pencil" uk-toggle="target: #edit-form-container"></a>
            <a class="delete-button" onclick="deleteEntry(${entry.id})" uk-icon="icon: trash"></a>
          </div>
`;
    calorieList.append(li)
    progressBar.value += entry.calorie
};


// READ
fetch('http://localhost:3000/api/v1/calorie_entries').then(res => res.json())
    .then(entries => entries.map(entry => createEntry(entry)));

// UPDATE
function openEdit(id, calories, notes){
    editCalories.value = calories;
    editNotes.value = notes;
    document.getElementById('updateEntry').addEventListener('click', () => {
        event.preventDefault()
        editEntry(id, editCalories.value, editNotes.value)
    });
}

// UPDATE (cont'd)
function editEntry(id, calorie, note){
    fetch("http://localhost:3000/api/v1/calorie_entries/" + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ api_v1_calorie_entry: { calorie, note } })
    }).then(res => res.json())
    .then(json => {
        document.getElementById(id + 'calorie').innerHTML = json.calorie
        document.getElementById(id + 'note').innerHTML = json.note
    });
}

// DELETE
function deleteEntry(id) {
    fetch('http://localhost:3000/api/v1/calorie_entries/' + id, {
        method: 'delete'
    }).then(resp => console.log(resp.json()))
        .then(result => {
            document.getElementById("li" + id).remove();
        })
}

// endregion - CRUD

//beginregion - BMR
//

