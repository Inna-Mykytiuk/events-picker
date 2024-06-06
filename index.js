document.addEventListener("DOMContentLoaded", () => {
  const dateFrom = document.querySelector('input[name="date_from"]');
  const datepickerFrom = new Datepicker(dateFrom, {
    clearButton: true,
  });

  const dateTo = document.querySelector('input[name="date_to"]');
  const datepickerTo = new Datepicker(dateTo, {
    clearButton: true,
  });


  const gridButton = document.getElementById("grid-btn");
  const rowButton = document.getElementById("row-btn");
  const gridIcon = document.querySelector(".icon-grid");
  const rowIcon = document.querySelector(".icon-list");
  const list = document.getElementById("list");

  gridButton.addEventListener("click", () => {
    gridIcon.classList.add("is-active");
    rowIcon.classList.remove("is-active");
    list.classList.add("is-grid");
  });

  rowButton.addEventListener("click", () => {
    rowIcon.classList.add("is-active");
    gridIcon.classList.remove("is-active");
    list.classList.remove("is-grid");
  });

});