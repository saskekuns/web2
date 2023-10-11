const form = document.querySelector(".form");
const submitButton = form.querySelector(".form__submit");

function sendRequest(e) {
  e.preventDefault();
  submitButton.disabled = true;

  const classroomInput = form.querySelector(".form__class");
  const temperatureInput = form.querySelector(".form__temp");

  const body = {
    class: classroomInput.value,
    temp: +temperatureInput.value,
  };

  fetchRequest("POST", tempURL, body)
    .then((response) => {
      submitButton.disabled = false;
    });
}

const tempURL = "http://194.67.93.117:80/temp";

function fetchRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
          .then((responseJSON) => {
            showToasts(200, responseJSON);
            form.reset();
            return responseJSON;
          });
      }
      return response.json()
        .then((error) => {
          const e = new Error("Something went wrong");
          e.data = error;
          showToasts(400, error);
          throw e;
        });
    })
    .catch((e) => {
      return e;
    });
}

form.addEventListener("submit", sendRequest);

const toasts = document.querySelector(".toasts");
const toastClose = document.querySelector(".toasts__close");

function showToasts(status, response) {
  toasts.classList.remove("toasts_hidden", "toasts_error");
  toasts.classList.add("toasts_active");

  if (status > 299) {
    toasts.classList.add("toasts_error");
  }

  const toastDiv = document.querySelector(".toasts__body");
  toastDiv.innerHTML = `
    <p class="toasts__title">${response.status}</p>
    <p class="toasts__desc">${response.message}</p>
  `;
  toasts.appendChild(toastDiv);
}

function hideToasts(e) {
  if (e.target.closest(".toasts__close")) {
    toasts.classList.remove("toasts_active");
    toasts.classList.add("toasts_hidden");
  }
}

toasts.addEventListener("click", hideToasts);

const gallery = document.querySelector(".gallery__list");
const imagesURL = "http://194.67.93.117:80/images";
const loadGif = document.querySelector(".gallery__loading");
const retryButton = document.querySelector(".gallery__button");

document.addEventListener("DOMContentLoaded", loadImages);
retryButton.addEventListener("click", loadImages);

function loadImages() {
  toasts.classList.remove("toasts_active");
  toasts.classList.add("toasts_hidden");

  getImages("GET", imagesURL)
    .then((response) => {
      loadGif.classList.add("gallery__loading_none");

      if (!Array.isArray(response)) return;

      if (response.length === 0) {
        gallery.innerHTML = "<p class='gallery__error'>Images are not found</p>";
        return;
      }

      gallery.innerHTML = "";
      toasts.classList.remove("toasts_active");
      toasts.classList.add("toasts_hidden");

      response.forEach((image) => {
        const imgContainer = document.createElement("li");
        imgContainer.classList.add("gallery__item", "col-3");

        const imgElem = document.createElement("img");
        const description = document.createElement("p");

        imgElem.classList.add("gallery__image");
        description.classList.add("gallery__item-desc");

        imgElem.src = image.url;
        imgElem.alt = image.alt;
        description.innerText = image.description;

        imgContainer.appendChild(imgElem);
        imgContainer.appendChild(description);
        gallery.appendChild(imgContainer);
      });
    });
}

function getImages(method, url) {
  loadGif.classList.remove("gallery__loading_none");

  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
          .then((responseJSON) => {
            return responseJSON;
          });
      }
      return response.json()
        .then((error) => {
          const e = new Error("Something went wrong");
          e.data = error;
          showToasts(500, error[0]);
          throw e;
        });
    })
    .catch((e) => {
      return e;
    });
}
