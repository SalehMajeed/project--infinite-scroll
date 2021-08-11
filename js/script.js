window.addEventListener('DOMContentLoaded', (event) => {
  const flex_container = document.getElementsByClassName('flex-container')[0];
  const number_of_img = 4;

  function create_list() {
    const li = document.createElement('li');
    li.className = 'flex-item';
    const img = new Image();
    img.src = '#';
    img.alt = 'Unknown source';

    li.append(img);
    return li;
  }

  function add_list(total_list) {
    const fragment = new DocumentFragment();
    for (let i = 0; i < total_list; i++) {
      fragment.append(create_list());
    }
    flex_container.append(fragment);
  }

  add_list(number_of_img);

  while (this.pageYOffset >= document.body.offsetHeight - window.innerHeight) {
    add_list(number_of_img);
  }

  window.addEventListener('scroll', (event) => {
    const total_height = document.body.offsetHeight - window.innerHeight;
    const current_position = this.pageYOffset; //pageYoffset returns current position of scroll vertically.

    if (current_position > total_height) {
      add_list(number_of_img);
    }
  });
});
