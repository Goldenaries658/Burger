$(() => {
  $('.eat-burger, .restock-burger').on('click', (e) => {
    e.preventDefault();
    // Creating an object that flips the devoured boolean in sql#
    console.log($(e.target).attr('data-devoured'));

    const isDevoured = $(e.target).attr('data-devoured') == 'true' ? 0 : 1;
    console.log(isDevoured);

    const devouredObj = { devoured: isDevoured };
    const id = $(e.target).attr('data-id');

    $.ajax(`api/burgers/${id}`, {
      type: 'PUT',
      data: devouredObj,
    }).then(() => {
      console.log(`${isDevoured ? 'Ate' : 'Restocked'} Burger id:${id}`);
      location.reload();
    });
  });

  $('#add-burger').on('click', (e) => {
    e.preventDefault;
    const burgerName = $('#burger-name').val();
    if (burgerName === '') {
      alert(
`Such wisdom oh nameless one.
      
Enter a burger.`
);
    } else {
      $.ajax(`api/burgers`, {
        type: 'POST',
        data: { name: burgerName },
      }).then(() => {
        console.log(`Added ${burgerName}`);
        location.reload();
      });
    }
  });
});
