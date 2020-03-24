const doubleArrayValues = (arr) => arr.map((v) => v * 2);

jQuery(function () {
  const $body = $(document.body);
  const array = [1, 2, 3];

  $body.text(doubleArrayValues(array).join(', '));
});
