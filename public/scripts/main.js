(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start':
      new Date().getTime(),
    event: 'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src =
    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-W7478ZW');

document.addEventListener("DOMContentLoaded", ready);

function ready() {

  //block_video
  let ozon = document.querySelector('#ozon');
  let ozon_text = document.querySelector('#ozon_text');
  let ozon_video = document.querySelector('#ozon_video');
  let ozon_video_mobile = document.querySelector('#ozon_video_mobile');
  let wb = document.querySelector('#wb');
  let wb_text = document.querySelector('#wb_text');
  let wb_video = document.querySelector('#wb_video');
  let wb_video_mobile = document.querySelector('#wb_video_mobile');

  wb.onclick = function () {
    wb.style = 'background: #8346FC; color: white; transition: background 0.2s linear, color 0.2s linear;';
    ozon.style = 'background: inherit; color: #272A5E; transition: background 0.2s linear, color 0.2s linear;';
    ozon_text.classList.add('hide');
    ozon_video.classList.add('hide');
    ozon_video_mobile.classList.add('hide');
    wb_text.classList.remove('hide');
    wb_video.classList.remove('hide');
    wb_video_mobile.classList.remove('hide');
  }
  ozon.onclick = function () {
    ozon.style = 'background: #8346FC; color: white; transition: background 0.2s linear, color 0.2s linear;';
    wb.style = 'background: inherit; color: #272A5E; transition: background 0.2s linear, color 0.2s linear;';
    ozon_text.classList.remove('hide');
    ozon_video.classList.remove('hide');
    ozon_video_mobile.classList.remove('hide');
    wb_text.classList.add('hide');
    wb_video.classList.add('hide');
    wb_video_mobile.classList.add('hide');
  }


  //block_tariff
  let toggle_button = document.querySelectorAll('.block_tariff .header .toggle .button');
  let tarif_name = document.querySelectorAll('.tarif .header .level1 .name');
  let tarif_price = document.querySelectorAll('.tarif .header .level2 .price');
  let discount = document.querySelectorAll('.tarif .header .level2 .discount');
  let price_sum = document.querySelectorAll('.tarif .header .level3 .sum');
  let period_sale = document.querySelectorAll('.tarif .header .level3 .text');

  let tarif_button = document.querySelectorAll('.tarif .buttoncompany a');

  tarifperiod = ['3 месяца', '6 месяцев', '1 год'];
  tarifname = ['Бизнес', 'Бизнес +', 'Корпорация', 'VIP'];
  priceset = [
    ['4 990', '8 690', '13 290', '29 990'],		//3 месяца
    ['4 490', '7 790', '11 990', '26 990'],	  //6 месяцев
    ['3 690', '6 490', '9 990', '22 490'],		//12 месяцев
  ];
  priceset_sum = [
    ['14 970', '26 070', '39 870', '89 970'],		//3 месяца
    ['26 940', '46 740', '71 940', '161 940'],	  //6 месяцев
    ['44 280', '77 880', '119 880', '269 880'],		//12 месяцев
  ];
  tarifdiscount = ['', '-10%', '-25%'];
  tarifperiod_sale = ['раз в 3 месяца', 'раз в полгода', 'в год'];

  function defaultvalue() {

    toggle_button.forEach((element, index) => {
      element.innerHTML = tarifperiod[index];
    });
    tarif_name.forEach((element, index) => {
      element.innerHTML = tarifname[index];
    });
    tarif_price.forEach((element, index) => {
      element.innerHTML = priceset[0][index];
    });
    discount.forEach((element) => {
      element.classList.add('hide');
    });
    price_sum.forEach((element, index) => {
      element.innerHTML = priceset_sum[0][index];
    });
    period_sale.forEach((element) => {
      element.innerHTML = tarifperiod_sale[0];
    });

    // tarif_button.forEach((element, index) => {
    //     element.href = '/appforads?tarif=' + tarifname[index] + ' ' + tarifperiod[0];
    // });

  }

  defaultvalue();

  toggle_button.forEach((element, i) => {
    element.addEventListener("click", function () {

      toggle_button.forEach(element => {
        element.style = 'background: inherit; color: #272A5E; transition: background 0.2s linear, color 0.2s linear;';
      });
      element.style = 'background: #8346FC; color: white; transition: background 0.2s linear, color 0.2s linear;';

      tarif_price.forEach((element, index) => {
        element.innerHTML = priceset[i][index];
      });

      discount.forEach((element) => {
        if (i > 0) {
          element.classList.remove('hide');
          element.innerHTML = tarifdiscount[i];
        }
        else element.classList.add('hide');
      });

      price_sum.forEach((element, index) => {
        element.innerHTML = priceset_sum[i][index];
        // if (i === 0) {
        //   element.innerHTML = priceset[0][index] * 3;
        // }
        // if (i === 1) {
        //   element.innerHTML = priceset[1][index] * 6;
        // }
        // if (i === 2) {
        //   element.innerHTML = priceset[2][index] * 12;
        // }
      });

      period_sale.forEach((element) => {
        element.innerHTML = tarifperiod_sale[i];
      });


      // tarif_sale.forEach((element, index) => {                                    //тарифы
      //     element.innerHTML = pricesetSale[i][index];
      // });

      // tarif_button.forEach((element, index) => {                                //изменение ссылки
      //     element.href = '/appforads?tarif=' + tarifname[index] + ' ' + tarifperiod[i];
      // });
      //
      // tarif_button[0].href = '/appforads?tarif=' + tarifname[0] + ' ' + tarifperiod[0];                             //исключение тариф Старт

    });
  });

  //block_reviews
  let reviews = document.querySelectorAll('.block_reviews .data .content .review');
  let prev_button = document.querySelector('.block_reviews .data .control .prev');
  let next_button = document.querySelector('.block_reviews .data .control .next');
  let current_page = document.querySelector('.block_reviews .data .page .current');
  let all_page = document.querySelector('.block_reviews .data .page .all');

  all_page.innerHTML = reviews.length
  prev_button.addEventListener('click', function () {
    let count = Number(current_page.innerHTML)
    if (count > 1) {
      current_page.innerHTML = count - 1
      reviews.forEach((element, index) => {
        if (index + 2 >= count) {
          element.classList.remove('hide');
        }
      });
    }
  })
  next_button.addEventListener('click', function () {
    let count = Number(current_page.innerHTML)
    if (count < Number(all_page.innerHTML)) {
      current_page.innerHTML = count + 1
      reviews.forEach((element, index) => {
        if (index < count) {
          element.classList.add('hide');
        }
      });
    }
  })











// Circle-progress block
//     let circles = document.querySelectorAll('.progress-ring__circle');
//
//     circles.forEach(element => {
//         let percent = +element.parentNode.parentNode.children[1].children[0].innerHTML;
//         let radius = element.r.baseVal.value;
//         let circumference = 2 * Math.PI * radius;
//
//         element.style.strokeDasharray = `${circumference} ${circumference}`;
//         element.style.strokeDashoffset = circumference;
//
//         let offset = circumference - percent / 100 * circumference;
//         element.style.strokeDashoffset = offset;
//     });


// Anchor for header Автоматические заголовки
//   let arrayAnchor = document.querySelector('.anchor-array');
//   let sizeAnchor = document.querySelector('.anchor-size');
//   let setAnchors = document.querySelectorAll('.anchor-for-header');
//
//   window.addEventListener("load", function () {
//     setAnchors.forEach(element => {
//       arrayAnchor.insertAdjacentHTML("beforeend",
//         `<li class= 'nav-item'>
//             <a class='nav-link anchors-link' href='#${element.id}'>${element.dataset.nameHeader}</a>
//         </li>`);
//
//       // Автоматическое увеличение padding-top конкретного блока на величину sticky-оглавления при клике
//       let anchorsLink = document.querySelectorAll('.anchors-link');
//       anchorsLink.forEach(element => {
//         let idLink = element.innerHTML;
//         element.addEventListener("click", function () {
//           setAnchors.forEach(element => {
//             if (idLink == element.dataset.nameHeader) {
//               element.style.paddingTop = sizeAnchor.offsetHeight + 'px';
//             }
//           });
//         });
//       });
//     });
//
//   });


//тарифы
//   let select = document.querySelector('select');
//
//   for (let index = 0; index < tarifname.length; index++) {
//     for (let i = 0; i < tarifperiod.length; i++) {
//
//       select.innerHTML += `<option value='${tarifname[index]} ${tarifperiod[i]}'>${tarifname[index]} ${tarifperiod[i]}</option>`;
//
//       // if (index == 0) {                                                          //исключение тариф Старт
//       //     select.innerHTML = `<option value='${tarifname[index]} 1 месяц'>${tarifname[index]} 1 месяц</option>`;
//       // } else {
//       //     select.innerHTML += `<option value='${tarifname[index]} ${tarifperiod[i]}'>${tarifname[index]} ${tarifperiod[i]}</option>`;
//       // }
//     }
//   }

//разбор url-строки
//   let params = window
//     .location
//     .search
//     .replace('?', '')
//     .split('&')
//     .reduce(
//       function (p, e) {
//         let a = e.split('=');
//         p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
//         return p;
//       },
//       {}
//     );

//выбор тарифа по get параметру
// console.log(select[1].value);
//   for (let i = 0; i < select.length; i++) {
//     if (select[i].value == params['tarif']) {
//       select[i].selected = true;
//       break;
//     }
//   }

}


// let easystartimg = document.querySelector('.easystartblock .content .image img');
// let easystarthover = document.querySelectorAll('.easystartblock .content .text .wrapper .numbers .num');
//
// easystarthover.forEach(element => {
//   element.addEventListener('mouseover', function () {
//     easystartimg.src = element.dataset.src;
//   })
// })
//
//
// let aut_camp = document.querySelector('#auto');
// let get_rep = document.querySelector('#report');
// let ctrl_exp = document.querySelector('#expenses');
// get_rep.onclick = function () {
//   document.querySelector('#get_rep').classList.remove('hide');
//   document.querySelector('#aut_camp').classList.add('hide');
//   document.querySelector('#ctrl_exp').classList.add('hide');
// }
// ctrl_exp.onclick = function () {
//   document.querySelector('#ctrl_exp').classList.remove('hide');
//   document.querySelector('#aut_camp').classList.add('hide');
//   document.querySelector('#get_rep').classList.add('hide');
// }
//
// aut_camp.onclick = function () {
//   document.querySelector('#aut_camp').classList.remove('hide');
//   document.querySelector('#ctrl_exp').classList.add('hide');
//   document.querySelector('#get_rep').classList.add('hide');
//
// }


// let toggle_button = document.querySelectorAll('.posibilityblock .toggle .button');
//
// toggle_button.forEach((element, i) => {                                       //нажатия на кнопку месяцы
//   element.addEventListener("click", function () {
//
//     toggle_button.forEach(element => {                                        //изменение фона
//       element.style = 'background: inherit; color: #272A5E; transition: background 0.2s linear, color 0.2s linear;';
//     });
//     element.style = 'background: #8346FC; color: white; transition: background 0.2s linear, color 0.2s linear;';
//   });
// });
//
//
// let toggle_button1 = document.querySelectorAll('.switcherblock .toggle .button');
//
// toggle_button1.forEach((element, i) => {                                       //нажатия на кнопку месяцы
//   element.addEventListener("click", function () {
//
//     toggle_button1.forEach(element => {                                        //изменение фона
//       element.style = 'border-bottom: inherit; color: #272A5E; font-weight: 500; transition: border-bottom 0.2s linear, color 0.2s linear;';
//     });
//     element.style = 'border-bottom: 2px solid #8346FC; color: #272A5E; font-weight: 700; font-size: 20; transition: border-bottom 0.2s linear, color 0.2s linear;';
//   });
// });
//
//
// // Для мобильной версии
//
// let toggle_button_mob = document.querySelectorAll('.switcherblockmob .toggle .button');
//
// toggle_button_mob.forEach((element, i) => {                                       //нажатия на кнопку месяцы
//   element.addEventListener("click", function () {
//
//     toggle_button_mob.forEach(element => {                                        //изменение фона
//       element.style = 'border-bottom: inherit; color: #272A5E; transition: border-bottom 0.2s linear, color 0.2s linear;';
//     });
//     element.style = 'border-bottom: 2px solid #8346FC; color: #272A5E; font-weight: 700; font-size: 20; transition: border-bottom 0.2s linear, color 0.2s linear;';
//   });
// });
//
//
// let auto = document.querySelector('.switcherblockmob .toggle #auto');
// let report = document.querySelector('.switcherblockmob .toggle #report');
// let expenses = document.querySelector('.switcherblockmob .toggle #expenses');
// let switch_img = document.querySelector('.switcherblockmob .switch_img_mob');
// let easy_img = document.querySelector('.switcherblockmob .easy_img_mob');
// let easy_img2 = document.querySelector('.switcherblockmob #easy_img2');
//
// report.onclick = function () {
//   document.querySelector('.switcherblockmob .toggle #auto .text .descr').classList.add('hide');
//   switch_img.classList.add('hide');
//   document.querySelector('.switcherblockmob .toggle #report .text .descr').classList.remove('hide');
//   easy_img.classList.remove('hide');
//   document.querySelector('.switcherblockmob .toggle #expenses .text .descr').classList.add('hide');
//   easy_img2.classList.add('hide');
// }
//
// expenses.onclick = function () {
//   document.querySelector('.switcherblockmob .toggle #auto .text .descr').classList.add('hide');
//   switch_img.classList.add('hide');
//   document.querySelector('.switcherblockmob .toggle #report .text .descr').classList.add('hide');
//   easy_img.classList.add('hide');
//   document.querySelector('.switcherblockmob .toggle #expenses .text .descr').classList.remove('hide');
//   easy_img2.classList.remove('hide');
// }
//
// auto.onclick = function () {
//   document.querySelector('.switcherblockmob .toggle #expenses .text .descr').classList.add('hide');
//   easy_img2.classList.add('hide');
//   document.querySelector('.switcherblockmob .toggle #report .text .descr').classList.add('hide');
//   easy_img.classList.add('hide');
//   document.querySelector('.switcherblockmob .toggle #auto .text .descr').classList.remove('hide');
//   switch_img.classList.remove('hide');
// }
//
//
// const gap = 16;
//
// const container = document.querySelector(".feedbackblock .container"),
//   block = document.querySelector(".feedbackblock .container .block"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");
//
// next.addEventListener("click", e => {
//   container.scrollBy(width + gap, 0);
//   if (container.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (block.scrollWidth - width - gap <= container.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", e => {
//   container.scrollBy(-(width + gap), 0);
//   if (container.scrollLeft - width - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!block.scrollWidth - width - gap <= container.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });
//
// let width = container.offsetWidth;
// window.addEventListener("resize", e => (width = container.offsetWidth));
//
//
// var scrollbox = new ScrollBox('.feedbackblock .container .mob');


