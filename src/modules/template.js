var App = App || {};

App.Template = {

    MenuBar: ' \
      <nav class="top-bar" data-topbar> \
        <ul class="title-area"> \
          <li class="name"> \
            <h1><a href="#">gradebook</a></h1> \
          </li> \
          <li class="toggle-topbar menu-icon"><a href="#">Menu</a></li> \
        </ul> \
        <section class="top-bar-section"> \
          <!-- Right Nav Section --> \
          <ul class="right"> \
            <li class="active"><a href="#">Right Button Active</a></li> \
            <li class="has-dropdown"> \
              <a href="#">add...</a> \
              <ul class="dropdown"> \
                <li><a href="#">First link in dropdown</a></li> \
              </ul> \
            </li> \
          </ul> \
        </section> \
      </nav> \
    ',

    ContentGrid: ' \
      <div class="row"> \
        <div class="large-2 columns"></div> \
        <div class="large-10 columns"></div> \
      </div> \
    '

}
