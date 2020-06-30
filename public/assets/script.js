$(() => {
  // Eating and restocking burgers
  $('.eat-burger, .restock-burger').on('click', async (e) => {
    e.preventDefault();
    // Creating an object that flips the devoured boolean in sql
    const isDevoured = $(e.target).attr('data-devoured') == 'true' ? 0 : 1;
    const devouredObj = { devoured: isDevoured };
    const id = $(e.target).attr('data-id');

    try {
      await $.ajax(`api/burgers/${id}`, {
        type: 'PUT',
        data: devouredObj,
      });
      location.reload();
    } catch (err) {
      console.error(`ERROR - script.js - $.ajax 'PUT': ${err}`);
    }
  });
  // Adding burgers
  $('#add-burger').on('click', (e) => {
    e.preventDefault;
    addBurger();
  });

  $('#burger-name').on('keypress', (e) => {
    if (e.which == 13) addBurger();
  });
});

const addBurger = async () => {
  const burgerName = $('#burger-name').val();
  if (burgerName === '') {
    alert(
      `Such wisdom oh nameless one.
      
Enter a burger.`
    );
  } else {
    try {
      $.ajax(`api/burgers`, {
        type: 'POST',
        data: { name: burgerName },
      });
      location.reload();
    } catch (err) {
      console.error(`ERROR - script.js - $.ajax 'POST': ${err}`);
    }
  }
};
