<!doctype html>
<html lang="ru">

<head>

<!--    <meta name="yandex-verification" content="3268cb33630125ad"/>-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="GST">

    <link href="../../../public/styles/output.css" rel="stylesheet">

    <link rel="icon" href="/public/images/r_violet_120.png">
    <title><?php echo $metaTitle; ?></title>
    <meta name="description" content="<?php echo $metaDescription; ?>">

    <?php if (isset($metaImg)) : ?>
        <meta property="og:image" content="<?php echo $metaImg; ?>"/>
    <?php else : ?>
        <meta property="og:image" content="https://yourich.ru/public/images/logo.jpg"/>
    <?php endif; ?>

    <!-- add global css -->
<!--    <link rel="stylesheet" href="/public/assets/dist/css/bootstrap.min.css?52556">-->
    <!-- <link rel="stylesheet" href="/public/assets/dist/css/bootstrap.rtl.min.css"> -->
    <!-- <link rel="stylesheet" href="/public/assets/dist/css/font-awesome.min.css"> -->
    <!-- <link rel="stylesheet" href="https://unpkg.com/swiper@8.2.3/swiper-bundle.css"> -->

    <!-- add custom css -->
    <?php if (isset($cssArr)) : ?>
        <?php foreach ($cssArr as $css) { ?>
            <link rel="stylesheet" href="/public/styles/<?php
            if (!is_array($css)) :
                echo $css;
            else :
                echo $css['name'];
            endif;
            ?>.css?v1.121565369" <?php if (isset($css['attribute'])) :
                foreach ($css['attribute'] as $attr => $attrVal) {
                    echo $attr; ?>="<?php echo $attrVal; ?>" <?php }
            endif; ?>>
        <?php }
    endif; ?>

    <!-- add global js -->
    <script src="/public/assets/dist/js/anime.js"></script>
<!--    <script src="/public/assets/dist/js/bootstrap.bundle.min.js"></script>-->
    <script src="/public/assets/dist/js/jquery.js"></script>
    <script src="/public/assets/dist/js/jquery-csv.js"></script>
    <script src="/public/scripts/form.js"></script>

</head>

<body>

<!-- Block for modal (оповещения) -->
<!--<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">-->
<!--    <div class="modal-dialog">-->
<!--        <div class="modal-content">-->
<!--            <div class="modal-body">-->
<!--                <p class="text-center">Заполнены не все обязательные поля</p>-->
<!--            </div>-->
<!--            <div class="modal-footer justify-content-center">-->
<!--                <button type="button" class="btn btn-primary shadow-none px-5" data-bs-dismiss="modal">Хорошо</button>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->

<header id="headerHome" class="w-full">

    <div class="data text-base font-medium mx-auto my-4 items-center justify-between flex w-11/12">
        <div class="company flex items-center">
            <svg width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999999 34.5369C0.447714 34.5369 0 34.0892 0 33.5369V1.46387C0 0.911582 0.447715 0.463867 1 0.463867H59C59.5523 0.463867 60 0.911582 60 1.46387V33.5369C60 34.0892 59.5523 34.5369 59 34.5369H0.999999Z" fill="#0F86D9"/>
                <path d="M21.4657 10.905C21.4657 11.4573 21.018 11.905 20.4657 11.905H16.4063C15.854 11.905 15.4063 12.3527 15.4063 12.905V24.9356C15.4063 25.4879 14.9586 25.9356 14.4063 25.9356H13C12.4477 25.9356 12 25.4879 12 24.9356V10.0664C12 9.51412 12.4477 9.06641 13 9.06641H20.4657C21.018 9.06641 21.4657 9.51412 21.4657 10.0664V10.905Z" fill="white"/>
                <path d="M33.7225 20.3157C34.2922 20.3157 34.7537 20.7924 34.6707 21.3559C34.4621 22.7725 33.9538 23.8817 33.1457 24.6836C32.1493 25.6722 30.7435 26.1666 28.9284 26.1666C27.0205 26.1666 25.5588 25.539 24.5431 24.2839C23.5274 23.0287 23.0195 21.2387 23.0195 18.9138V16.0752C23.0195 13.758 23.5448 11.9718 24.5952 10.7167C25.6457 9.46156 27.1055 8.83398 28.9747 8.83398C30.813 8.83398 32.2091 9.34763 33.163 10.3749C33.9329 11.204 34.4348 12.3248 34.6689 13.7374C34.7636 14.3087 34.2994 14.8008 33.7203 14.8008H32.3474C31.8052 14.8008 31.372 14.3669 31.3039 13.829C31.2182 13.1517 31.0578 12.6549 30.8227 12.3387C30.4867 11.8869 29.8707 11.661 28.9747 11.661C28.0633 11.661 27.4183 11.9796 27.0399 12.6168C26.6614 13.254 26.4606 14.3026 26.4374 15.7624V18.9485C26.4374 20.6246 26.6247 21.7755 26.9993 22.4011C27.3739 23.0268 28.0169 23.3396 28.9284 23.3396C29.8244 23.3396 30.4423 23.1214 30.7821 22.685C31.0172 22.3831 31.1821 21.9121 31.2768 21.2719C31.3552 20.7411 31.7852 20.3157 32.3217 20.3157H33.7225Z" fill="white"/>
                <path d="M48.0027 10.905C48.0027 11.4573 47.555 11.905 47.0027 11.905H44.8318C44.2795 11.905 43.8318 12.3527 43.8318 12.905V24.9356C43.8318 25.4879 43.3841 25.9356 42.8318 25.9356H41.4139C40.8616 25.9356 40.4139 25.4879 40.4139 24.9356V12.905C40.4139 12.3527 39.9662 11.905 39.4139 11.905H37.3125C36.7602 11.905 36.3125 11.4573 36.3125 10.905V10.0664C36.3125 9.51412 36.7602 9.06641 37.3125 9.06641H47.0027C47.555 9.06641 48.0027 9.51412 48.0027 10.0664V10.905Z" fill="white"/>
            </svg>
            <p class="text ps-4 hidden lg:flex">Глобальные сетевые технологии</p>
        </div>
        <div class="menu flex">
            <a class="mr-4 xl:mr-10" href="/about">О компании</a>
            <div class="flex mr-4 xl:mr-10 items-center cursor-pointer">
                <a class="mr-2" href="/products" id="scroll_to_tariff">Услуги и продукты</a>
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.4026 5.28896C4.20086 5.55663 3.79897 5.55663 3.59724 5.28896L0.851478 1.64587C0.601055 1.31361 0.838091 0.838131 1.25416 0.838131L6.74567 0.838131C7.16174 0.838131 7.39878 1.3136 7.14835 1.64587L4.4026 5.28896Z"
                          fill="#0F86D9"/>
                </svg>
            </div>
            <a class="" href="/contacts" target="_blank">Контакты</a>

        </div>
        <div class="buttons">
            <div class="buttonpromo">
                <a href="https://mp.yourich.ru/login" target="_self">
                    Связаться с нами
                </a>
            </div>
        </div>
    </div>
    <div class="data_mobile hidden">
        <div class="header">
            <a href="/" class="picture">
                <img src="/public/images/logo_h50.png" width="76px" alt="MDB Logo" loading="lazy">
            </a>
            <div class="content d-flex align-items-center">
                <div class="buttonpromo" style="width: 106px; height: 34px;">
                    <a href="https://mp.yourich.ru/register" target="_self" style="font-size: 14px; font-weight: 500; ">
                        Регистрация
                    </a>
                </div>
                <svg class="mobile_menu_click_open" role="button" width="40" height="40" viewBox="0 0 40 40" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="white"/>
                    <line x1="11.7461" y1="13.8477" x2="28.1394" y2="13.8477" stroke="#272A5E" stroke-width="2"
                          stroke-linecap="round"/>
                    <line x1="11.7461" y1="18.9446" x2="28.1394" y2="18.9446" stroke="#272A5E" stroke-width="2"
                          stroke-linecap="round"/>
                    <line x1="11.7461" y1="24.0415" x2="28.1394" y2="24.0415" stroke="#272A5E" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
                <svg class="mobile_menu_click_close hide" role="button" width="40" height="40" viewBox="0 0 40 40"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="white"/>
                    <line x1="13.5195" y1="25.6298" x2="25.7421" y2="13.4073" stroke="#272A5E" stroke-width="1.10803"
                          stroke-linecap="round"/>
                    <line x1="14.303" y1="13.4072" x2="26.5256" y2="25.6298" stroke="#272A5E" stroke-width="1.10803"
                          stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        <div class="menu_mobile hide">
            <!--            <a href="/wb-analytics" class="out_analytic d-flex align-items-center">-->
            <!--                <p class="m-0 pe-2">Внешняя аналитика</p>-->
            <!--                <img src="/public/images/logo_wb.svg" alt="" width="16" height="16" class="">-->
            <!--            </a>-->
            <a href="/#tariff">Тарифы</a>
            <!--            <a href="/">Агентствам</a>-->
            <a href="#footerhome">О компании</a>
            <hr>
            <a href="https://wiki.yourich.ru/" target="_blank" class="d-flex justify-content-between">
                <p class="m-0">База знаний</p>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0811 0.158936L14.8386 0.916971L6.80828 8.94733L6.05078 8.18983L14.0811 0.158936Z"
                          fill="#BBC1C7"/>
                    <path d="M15 5.35714H13.9286V1.07143H9.64286V0H15V5.35714ZM12.3214 15H1.60714C0.696429 15 0 14.3036 0 13.3929V2.67857C0 1.76786 0.696429 1.07143 1.60714 1.07143H7.5V2.14286H1.60714C1.28571 2.14286 1.07143 2.35714 1.07143 2.67857V13.3929C1.07143 13.7143 1.28571 13.9286 1.60714 13.9286H12.3214C12.6429 13.9286 12.8571 13.7143 12.8571 13.3929V7.5H13.9286V13.3929C13.9286 14.3036 13.2321 15 12.3214 15Z"
                          fill="#BBC1C7"/>
                </svg>
            </a>
            <a href="https://mp.yourich.ru/login" target="_blank" class="d-flex justify-content-between">
                <p class="m-0">Войти</p>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0811 0.158936L14.8386 0.916971L6.80828 8.94733L6.05078 8.18983L14.0811 0.158936Z"
                          fill="#BBC1C7"/>
                    <path d="M15 5.35714H13.9286V1.07143H9.64286V0H15V5.35714ZM12.3214 15H1.60714C0.696429 15 0 14.3036 0 13.3929V2.67857C0 1.76786 0.696429 1.07143 1.60714 1.07143H7.5V2.14286H1.60714C1.28571 2.14286 1.07143 2.35714 1.07143 2.67857V13.3929C1.07143 13.7143 1.28571 13.9286 1.60714 13.9286H12.3214C12.6429 13.9286 12.8571 13.7143 12.8571 13.3929V7.5H13.9286V13.3929C13.9286 14.3036 13.2321 15 12.3214 15Z"
                          fill="#BBC1C7"/>
                </svg>
            </a>
            <hr>
            <div class="info_mobile d-flex align-items-end">
                <a class="tel m-0 pb-1 pe-2 align-items-end text-decoration-none" href="tel:+78005502533">
                    <nobr>8 800 550-25-33</nobr>
                </a>
                <p class="time m-0">пн-пт 07:00-15:30 (мск)</p>
            </div>
        </div>
    </div>
</header>

<!--<div class="mt-5">-->
<!---->
<!--    <main>-->
<!--        --><?php //echo $content; ?>
<!--    </main>-->
<!---->
<!--</div>-->

<footer id="footerHome">

    <div class="block mx-auto px-2 px-lg-0">
        <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=150708584688" width="100%" height="500" frameborder="0"></iframe>
    </div>


    <div class="block_form">
        <div class="content d-flex flex-row">
            <div class="one_column d-flex flex-column w-50">
                <div class="d-flex header">Начните больше зарабатывать уже сегодня</div>
                <div class="d-flex text">Приглашаем протестировать сервис – бесплатно на 5 дней. Вы сможете поднять
                    товары в
                    выдаче,
                    улучшить показатели, изучить нишу и конкурентов.
                </div>
            </div>
            <div class="two_column d-flex flex-column w-50">

                <form action='/' method='post' enctype='multipart/form-data' class="inputs">
                    <div class="d-flex flex-column mb-3">
                        <input class="input_name form-control" type="text" name='name' placeholder="Имя*"
                               id="input_name" required>
                    </div>
                    <div class="d-grid alt" style="grid-template-columns: 1fr 1fr; column-gap: 14px">
                        <input class="input_phone form-control w-100" type="tel" name='phone' placeholder="Телефон*"
                               id="input_phone" required>
                        <input class="form-control w-100" type="email" name='mail' placeholder="Электронная почта"
                               id="input_mail">
                    </div>
                    <button type="submit" class="buttonpromo check-submit my-4" id="submit">
                        Отправить
                    </button>
                </form>
                <p>Нажимая на кнопку, я соглашаюсь на обработку
                    <a href="https://yourich.ru/politics/personal-data" target="_blank">персональных данных</a> и
                    <a href="https://yourich.ru/politics/offer" target="_blank">с правилами пользования сервисом</a>
                </p>
            </div>
        </div>
    </div>
    <div class="contacts">
        <div class="column">
            <div class="level1">
                <div class="tel">
                    <a class="m-0 text-decoration-none" href="tel:+78005502533">
                        <nobr class="pe-2">8 800 550-25-33</nobr>
                    </a>
                    <span class="time m-0">пн-пт 07:00-15:30 (мск)</span>
                </div>
            </div>
            <div class="level2">
                <div class="image">
                    <img src="/public/images/image_footer.png" alt="">
                    <p>Есть вопрос?</p>
                </div>
                <p>Напишите
                    <a class="" href="https://t.me/YouRich_ecom" target="_blank">Егору Давыдову</a>
                    – ответственному за сопровождение клиентов
                </p>
            </div>
        </div>
        <div class="column">
            <div class="level1 alt">
                <p class="text">г. Пермь, ул. Хрустальная, д.7, офис 303</p>
                <p class="text alt hide">
                    <a href="mailto:info@yourich.ru">info@yourich.ru</a>
                </p>
                <div class="icons">
                    <div class="ico">
                        <a class="text-decoration-none" href="https://vk.com/yourich_ecommerce" target="_blank">
                            <img src="/public/images/footer/icons_vk.png" alt="">
                        </a>
                    </div>
                    <div class="ico">
                        <a class="text-decoration-none" href="https://www.youtube.com/channel/UC0zQzQHVm4uIlHC9blcvvEA"
                           target="_blank">
                            <img src="/public/images/footer/icons_utube.png" alt="">
                        </a>
                    </div>
                    <div class="ico">
                        <a class="text-decoration-none" href="https://t.me/yourich_ecommerce" target="_blank">
                            <img src="/public/images/footer/icons_telega.png" alt="">
                        </a>
                    </div>
                    <div class="ico">
                        <a class="text-decoration-none" href="https://rutube.ru/channel/35955406/" target="_blank">
                            <img src="/public/images/footer/icons_rutube.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="level2 alt">
                <a href="mailto:info@yourich.ru">info@yourich.ru</a>
            </div>
        </div>
    </div>
    <hr>
    <div class="info">
        <div class="column">
            <div class="level1">
                <a class="text-decoration-none me-2" href="https://yourich.ru/politics/personal-data" target="_blank">Политика
                    конфиденциальности</a>
                <a class="text-decoration-none me-2" href="https://yourich.ru/politics/offer" target="_blank">Публичная
                    оферта</a>
                <a class="text-decoration-none" href="https://yourich.ru/politics/termsuse" target="_blank">Пользовательское
                    соглашение</a>
            </div>
            <div class="level2">
                <p>
                    Мы используем
                    <a class="" href="https://yourich.ru/politics/agreement-cookie" target="_blank">файлы
                        cookie</a>
                    для персонализации сервисов и повышения удобства пользования сайтом. Если вы не согласны на их
                    использование, поменяйте настройки браузера.
                </p>
            </div>
        </div>
        <div class="column">
            <div class="level1 alt">
                <img src="/public/images/logo_h50.png" height="42px" alt="MDB Logo" loading="lazy">
                <p class="ms-2">© 2021 – 2024 ООО «ЮРИЧ ЭКОМ». Все права защищены</p>
            </div>
        </div>
    </div>
</footer>

<!-- add custom js -->
<?php if (isset($jsArr)) : ?>
    <?php foreach ($jsArr as $js) { ?>
        <script src="/public/scripts/<?php
        if (!is_array($js)) :
            echo $js;
        else :
            echo $js['name'];
        endif;
        ?>.js?v1.212265145121"></script>
    <?php }
endif; ?>

<!-- Add popover Всплывающие окна -->
<!--<script>-->
<!--  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))-->
<!--  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {-->
<!--    return new bootstrap.Popover(popoverTriggerEl)-->
<!--  })-->
<!--</script>-->


</body>

</html>