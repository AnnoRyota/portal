(function() {
  let menuSwitch = document.querySelector("#menu-switch"),
    sidebar = document.querySelector("#sidebar"),
    main = document.querySelector("#main");

  function toggleSidebar() {
    let classesToApplyForSidebar = {
        active: [],
        inactive: ["sidebar-inactive"]
      },
      classesToApplyForMain = {
        active: ["md:pl-[224px]"],
        inactive: []
      },
      classesToApplyForMenuButton = {
        active: ["fa-caret-left"],
        inactive: ["fa-bars"]
      };

    let isMenuActive = menuSwitch.getAttribute("data-menu-active") === "true";

    if (isMenuActive) {
      menuSwitch.setAttribute("data-menu-active", null);

      menuSwitch.children[0].classList.remove(
        ...classesToApplyForMenuButton.active
      );
      menuSwitch.children[0].classList.add(
        ...classesToApplyForMenuButton.inactive
      );

      sidebar.classList.remove(...classesToApplyForSidebar.active);
      sidebar.classList.add(...classesToApplyForSidebar.inactive);

      main.classList.remove(...classesToApplyForMain.active);
      main.classList.add(...classesToApplyForMain.inactive);
    } else {
      menuSwitch.setAttribute("data-menu-active", true);

      menuSwitch.children[0].classList.add(
        ...classesToApplyForMenuButton.active
      );
      menuSwitch.children[0].classList.remove(
        ...classesToApplyForMenuButton.inactive
      );

      sidebar.classList.add(...classesToApplyForSidebar.active);
      sidebar.classList.remove(...classesToApplyForSidebar.inactive);

      main.classList.add(...classesToApplyForMain.active);
      main.classList.remove(...classesToApplyForMain.inactive);
    }
  }

  document.querySelector("#menu-switch").addEventListener("click", e => {
    e.preventdefault;
    toggleSidebar();
  });

  toggleSidebar();
  setTimeout(() => {
    sidebar.classList.add("slow-moves");
    main.classList.add("slow-moves");
  }, 300);
})();
