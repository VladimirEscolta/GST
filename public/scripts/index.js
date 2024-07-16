document.addEventListener("DOMContentLoaded", ready);

function ready() {

  // let scroll_to_tariff = document.querySelector('#scroll_to_tariff');
  //
  //   scroll_to_tariff.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     // let href = this.getAttribute('href').substring(1);
  //     let href = 'tariff';
  //     const scrollTarget = document.getElementById(href);
  //
  //     // const topOffset = document.querySelector('.scrollto').offsetHeight;
  //     const topOffset = 80
  //     // const topOffset = 0; // если не нужен отступ сверху
  //     const elementPosition = scrollTarget.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition - topOffset;
  //     console.log(offsetPosition)
  //
  //     window.scrollBy({
  //       top: offsetPosition,
  //       behavior: 'smooth'
  //     });
  //   });



//block_header
  let mobile_menu_click_open = document.querySelector('.mobile_menu_click_open');
  let mobile_menu_click_close = document.querySelector('.mobile_menu_click_close');
  let menu_mobile = document.querySelector('.data_mobile .menu_mobile');

  mobile_menu_click_open.onclick = function () {
    menu_mobile.classList.remove('hide')
    mobile_menu_click_close.classList.remove('hide')
    mobile_menu_click_open.classList.add('hide')
  }
  mobile_menu_click_close.onclick = function () {
    menu_mobile.classList.add('hide')
    mobile_menu_click_open.classList.remove('hide')
    mobile_menu_click_close.classList.add('hide')
  }

// Кнопка наверх - появление через заданное кол-во пикселей
  $(document).on("scroll", window, function () {
    if ($(window).scrollTop() > 1000) {
      $(".uphome").show();
    } else {
      $(".uphome").hide();
    }
  });

//маска ввода для телефона
  var nameInputs = document.querySelector('.input_name');
  var phoneInputs = document.querySelectorAll('.input_phone');

  nameInputs.addEventListener('input', () => { // добавляем обработчик события input
    const regExp = /[^а-яА-ЯёЁ\s]/g; // задаем регулярное выражение, которое не соответствует русским буквам и пробелам
    const firstChar = nameInputs.value.charAt(0); // получаем первый символ
    const isSpace = /\s/.test(firstChar); // проверяем, является ли первый символ пробелом
    if (isSpace) {
      nameInputs.value = nameInputs.value.trim(); // удаляем все пробелы в начале и в конце строки
    }
    nameInputs.value = nameInputs.value.replace(regExp, ''); // заменяем все символы, не соответствующие русским буквам и пробелам, на пустую строку
  });

  var getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  }

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9") inputNumbersValue = "8" + inputNumbersValue;
      var firstSymbols = (inputNumbersValue[0] == "8") ? "+7" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    }
    input.value = formattedInputValue;
  }
  var onPhoneKeyDown = function (e) {
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  }
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }

  submitbutton = document.querySelector('.check-submit');
  input_name = document.querySelector('#input_name');

  submitbutton.addEventListener('click', function (event) {

    phoneInputs[0].onfocus = function () {
      phoneInputs[0].classList.remove('error-input');
    }
    if (phoneInputs[0].value.length < 17) {
      phoneInputs[0].classList.add('error-input');
      event.preventDefault()
    }

    input_name.onfocus = function () {
      input_name.classList.remove('error-input');
    }
    if (input_name.value.length < 1) {
      input_name.classList.add('error-input');
    }

  })

  const input_phone = document.querySelector('#input_phone');
  const btn = document.getElementById('submit');

  btn.addEventListener('click', function () {
    if (input_name.value && input_phone.value) {
      const time = 5000;
      btn.innerHTML = "Отправляем...";
      setTimeout(function () {
        btn.disabled = true;}, time);
    }
  });


}