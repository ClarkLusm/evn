function goZone(index) {
  if (index == 1) {
    window.location.href = "zone.html";
  }
  else if (index == 2) {
    window.location.href = "zone-hanoi.html";
  }
}
$('select.selectpicker').selectpicker({
  maxOptions: 3
});
$('.selectpicker').on('change', function (e, clickedIndex, isSelected, previousValue) {
  const values = $(this).val();
  if (values.length > 1) {
    if ($(this).hasClass('province')) {
      $('.district').attr('disabled', true);
      $('.ward').attr('disabled', true);
    }
    if ($(this).hasClass('district')) {
      $('.ward').attr('disabled', true);
    }
  } else {
    if ($(this).hasClass('province')) {
      $('.district').removeAttr('disabled');
      $('.ward').removeAttr('disabled');
    }
    if ($(this).hasClass('district')) {
      $('.ward').removeAttr('disabled');
    }
  }
  toggleOption(this, values);
  $('.selectpicker').selectpicker('refresh');
});


function toggleOption(self, selectedValues) {
  if (selectedValues.length >= 3) {
    $(self).find('option').each(function (_, item) {
      if (!selectedValues.includes($(item).val())) {
        $(item).attr('disabled', true);
      }
    });
  } else {
    $(self).find('option').each(function (_, item) {
      $(item).removeAttr('disabled');
    });
  }
}