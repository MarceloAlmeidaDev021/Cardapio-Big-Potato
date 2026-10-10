    "use strict";

    const elements = {
      categories: document.getElementById("categories"),
      subcategories: document.getElementById("subcategories"),
      title: document.getElementById("categoryTitle"),
      description: document.getElementById("categoryDescription"),
      count: document.getElementById("itemCount"),
      products: document.getElementById("products"),
      search: document.getElementById("search"),
      clearSearch: document.getElementById("clearSearch"),
      modal: document.getElementById("modalRoot")
    };

    const state = {
      category: "batatas",
      subcategory: "Todos",
      search: ""
    };

    let previousFocus = null;
    let savedScrollY = 0;

    const currency = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    function normalize(text) {
      return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    }

    function getCategory(id) {
      return categories.find(category => category.id === id);
    }

    function getCategoryMark(id) {
      return { batatas: "BP", grandes: "23", pequenos: "16", doces: "Doce", pratos: "Big", porcoes: "Big", sucos: "Suco", alcool: "Bar" }[id];
    }

    function getSubcategories() {
      if (state.category === "alcool") {
        return ["Todos", "Chopps", "Drinks", "Doses", "Batidas"];
      }

      if (state.category === "grandes") {
        return [
          "Todos",
          "Carne e calabresa",
          "Palmito e brócolis",
          "Frango",
          "Camarão e atum",
          "Queijos"
        ];
      }

      if (state.category === "doces") {
        return ["Todos", "Pastéis doces", "Mini churros"];
      }

      return [];
    }

    function matchesSubcategory(product) {
      if (state.subcategory === "Todos") return true;

      if (state.category === "doces") {
        if (state.subcategory === "Mini churros") {
          return product.group === "Mini churros";
        }

        return product.group !== "Mini churros";
      }

      return product.group === state.subcategory;
    }

    function renderCategories() {
      elements.categories.replaceChildren();

      [{ id: "todos", name: "Todos" }, ...categories].forEach(category => {
        const button = document.createElement("button");
        button.type = "button";
        button.className =
          "tab" + (state.category === category.id ? " active" : "");
        button.textContent = category.name;

        button.setAttribute(
          "aria-pressed",
          String(state.category === category.id)
        );

        button.addEventListener("click", () => {
          state.category = category.id;
          state.subcategory = "Todos";
          render();
        });

        elements.categories.appendChild(button);
      });
    }

    function renderSubcategories() {
      elements.subcategories.replaceChildren();

      const groups = getSubcategories();
      elements.subcategories.hidden = groups.length === 0;

      groups.forEach(group => {
        const button = document.createElement("button");
        button.type = "button";
        button.className =
          "tab" + (state.subcategory === group ? " active" : "");
        button.textContent = group;

        button.setAttribute(
          "aria-pressed",
          String(state.subcategory === group)
        );

        button.addEventListener("click", () => {
          state.subcategory = group;
          render();
        });

        elements.subcategories.appendChild(button);
      });
    }

    function createProductCard(product) {
      const category = getCategory(product.category);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "product-card";
      button.setAttribute("aria-label", `Abrir ${product.name}`);

      const image = document.createElement("div");
      image.className = "product-image";

      const icon = document.createElement("span");
      icon.className = "product-placeholder";
      icon.textContent = getCategoryMark(product.category);
      icon.setAttribute("aria-hidden", "true");

      const categoryLabel = document.createElement("span");
      categoryLabel.className = "product-category";
      categoryLabel.textContent = product.group || category.name;

      const imagePath = productImages[product.category]?.[product.name];
      if (imagePath) {
        const photo = document.createElement("img");
        photo.className = "product-photo";
        photo.alt = product.name;
        photo.loading = "lazy";
        photo.decoding = "async";
        photo.addEventListener("error", () => {
          photo.remove();
          image.prepend(icon);
        }, { once: true });
        photo.src = encodeURI(imagePath);
        image.append(photo, categoryLabel);
      } else {
        image.append(icon, categoryLabel);
      }

      const body = document.createElement("div");
      body.className = "product-body";

      const title = document.createElement("h3");
      title.textContent = product.name;

      const description = document.createElement("p");
      description.textContent = product.description;

      const bottom = document.createElement("div");
      bottom.className = "product-bottom";

      const price = document.createElement("strong");
      price.className = "price";
      price.textContent = currency.format(product.price);

      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "↗";
      arrow.setAttribute("aria-hidden", "true");

      bottom.append(price, arrow);
      body.append(title, description, bottom);
      button.append(image, body);

      button.addEventListener("click", () => openProduct(product));

      return button;
    }

    function renderProducts() {
      const query = normalize(state.search.trim());
      elements.clearSearch.hidden = state.search.length === 0;
      const filtered = products.filter(product => {
        if (state.category !== "todos" && product.category !== state.category) return false;
        if (!matchesSubcategory(product)) return false;

        const searchable = normalize(
          product.name + " " + product.description
        );

        return searchable.includes(query);
      });

      elements.count.textContent = `${filtered.length} itens`;
      elements.products.replaceChildren();

      if (filtered.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "Nenhum produto encontrado.";
        elements.products.appendChild(empty);
        return;
      }

      const fragment = document.createDocumentFragment();

      filtered.forEach(product => {
        fragment.appendChild(createProductCard(product));
      });

      elements.products.appendChild(fragment);
    }

    function render() {
      const category = getCategory(state.category);

      elements.title.textContent = category ? category.name : "Todos os produtos";

      elements.description.textContent =
        state.category === "doces"
          ? "Pastéis doces de 16 cm e mini churros. Toque para visualizar."
          : "Toque em qualquer produto para visualizar.";

      renderCategories();
      renderSubcategories();
      renderProducts();
    }

    function openProduct(product) {
      const category = getCategory(product.category);
      if (elements.modal.firstChild) return;
      previousFocus = document.activeElement;
      savedScrollY = window.scrollY;

      const overlay = document.createElement("div");
      overlay.className = "modal-overlay";

      const panel = document.createElement("section");
      panel.className = "modal-panel";
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "true");
      panel.setAttribute("aria-labelledby", "modalTitle");

      const image = document.createElement("div");
      image.className = "modal-image";
      const imagePath = productImages[product.category]?.[product.name];
      if (imagePath) {
        const photo = document.createElement("img");
        photo.className = "modal-product-photo";
        photo.alt = product.name;
        photo.decoding = "async";
        photo.addEventListener("error", () => {
          photo.remove();
          image.textContent = getCategoryMark(product.category);
        }, { once: true });
        photo.src = encodeURI(imagePath);
        image.appendChild(photo);
      } else {
        image.textContent = getCategoryMark(product.category);
      }

      const close = document.createElement("button");
      close.type = "button";
      close.className = "modal-close";
      close.textContent = "×";
      close.setAttribute("aria-label", "Fechar detalhes");
      close.addEventListener("click", closeProduct);

      panel.appendChild(close);

      const body = document.createElement("div");
      body.className = "modal-body";

      const label = document.createElement("div");
      label.className = "section-eyebrow";
      label.textContent = category.name;

      const title = document.createElement("h2");
      title.id = "modalTitle";
      title.textContent = product.name;

      const description = document.createElement("p");
      description.textContent = product.description;

      const divider = document.createElement("div");
      divider.className = "modal-divider";

      const priceRow = document.createElement("div");
      priceRow.className = "modal-price-row";

      const priceLabel = document.createElement("small");
      priceLabel.textContent = "Valor do produto";

      const price = document.createElement("strong");
      price.className = "price";
      price.textContent = currency.format(product.price);

      priceRow.append(priceLabel, price);

      const back = document.createElement("button");
      back.type = "button";
      back.className = "modal-back";
      back.textContent = "Voltar ao cardápio";
      back.addEventListener("click", closeProduct);

      body.append(label, title, description, divider, priceRow, back);
      panel.append(image, body);
      overlay.appendChild(panel);

      overlay.addEventListener("click", event => {
        if (event.target === overlay) closeProduct();
      });

      elements.modal.replaceChildren(overlay);
      document.body.style.top = `-${savedScrollY}px`;
      document.body.classList.add("modal-open");
      document.querySelector("header").inert = true;
      document.querySelector("nav").inert = true;
      document.querySelector("main").inert = true;
      document.querySelector("footer").inert = true;
      close.focus({ preventScroll: true });
    }

    function closeProduct() {
      if (!elements.modal.firstChild) return;
      elements.modal.replaceChildren();
      document.body.classList.remove("modal-open");
      document.body.style.top = "";
      document.querySelector("header").inert = false;
      document.querySelector("nav").inert = false;
      document.querySelector("main").inert = false;
      document.querySelector("footer").inert = false;
      window.scrollTo({ top: savedScrollY, behavior: "instant" });

      if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }

      previousFocus = null;
    }

    elements.search.addEventListener("input", event => {
      state.search = event.target.value;
      renderProducts();
    });

    elements.clearSearch.addEventListener("click", () => {
      state.search = "";
      elements.search.value = "";
      renderProducts();
      elements.search.focus();
    });

    document.addEventListener("keydown", event => {
      if (!elements.modal.firstChild) return;

      if (event.key === "Escape") {
        closeProduct();
        return;
      }

      if (event.key === "Tab") {
        const focusable = [
          ...elements.modal.querySelectorAll("button, a[href]")
        ].filter(element => !element.disabled);

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    render();
