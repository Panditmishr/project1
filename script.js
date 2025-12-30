const buttonCategory = document.querySelectorAll('.item');
const search = document.querySelector('#search');
const list_items = document.querySelector('#emoji-list');

const displayEmoji = (item) => {
    list_items.innerHTML = '';
item.forEach((emojis) => {
const div = document.createElement('div');
div.classList.add('emoji-container');
const span = document.createElement('span');
span.classList.add('emoji');
span.innerHTML = emojis.emoji;
div.appendChild(span);
list_items.appendChild(div);
})
}
const filterEmoji = (value) => {
let filterData;
if(value.toLowerCase() === 'all'){
    filterData = emojiList;
}
else {
    filterData = emojiList.filter((emoji) => {
       if(emoji.description.toLowerCase().includes(value.toLowerCase())){
           return true;
       }
       if(emoji.aliases.some(alias => alias.toLowerCase().includes(value.toLowerCase()))){
        return true;
       }
       if(emoji.tags.some(tags => tags.toLowerCase().includes(value.toLowerCase()))){
        return true;
       }
       return false;
    });
}
displayEmoji(filterData);
}


buttonCategory.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.innerText.toLowerCase();
       filterEmoji(category);
    })
   
})
search.addEventListener('input', (e) => {
    filterEmoji(e.target.value);
})
displayEmoji(emojiList);