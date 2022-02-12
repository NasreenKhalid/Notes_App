
const notesEl=document.querySelector('.notes')

const addBtn = document.querySelector('.add')

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

addBtn.addEventListener('click',() => {
   addNewNote(); 
})

function addNewNote(text=''){
    const note = document.createElement('div')
    note.classList.add('notes')

    note.innerHTML= `
    
<div class="notes">
<div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash"></i></button>
</div>

<div class="main">
   
  <textarea id="textarea"></textarea>
 
</div>


</div>


<div id="content"></div>
       `;

const editBtn = note.querySelector('.edit')
const delBtn = note.querySelector('.delete')
const main = note.querySelector('.main')
const textArea= note.querySelector('textarea');

textArea.value = text;
main.innerHTML=marked.parse(text)

editBtn.addEventListener('click', ()=>{
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
    })


    textArea.addEventListener('input',(e)=>{
        e.preventDefault();
        // const { value } = e.target;
    const output=(marked.parse(e.target.value))
    console.log(output)
    
    document.getElementById('content').innerHTML = output
updateLS()

    })

    delBtn.addEventListener('click',()=>{
        note.remove();
    })

    document.body.appendChild(note)
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach(note=>{
        notes.push(note.value)
    });
    localStorage.setItem('notes',JSON.stringify(notes))
}







