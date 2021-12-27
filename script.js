// renderShoppingList => "A shopping list should be rendered to the page"
// handleNewItemSubmit => "You should be able to add items to the list"
// handleItemCheckClicked => "You should be able to check items on the list"
// handleDeleteItemClicked() => "You should be able to delete items from the list"

function shoppingList() {
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      // create item to hold value of class "js-shopping-list-entry"
      let item = $('#shopping-list-entry').val()
      console.log(item)
  
      // if item value isn't empty, add item and its classes to shopping list
      if (item !== "") {
        $('.shopping-list').append(`<li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`)
        $('#shopping-list-entry').val("")
      }
    })
  
      // make check button, when clicked, adopt css stylings of line-through
  $('.shopping-list').on('click', '.shopping-item-toggle',function(event) {
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked')
  })
      // To make the delete button remove item when clicked
  $('.shopping-list').on('click','.shopping-item-delete', function(event) {
    $(this).closest('li').remove()
    })
  }
  
  
  
  shoppingList()