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
                <path d="M0.999999 34.5369C0.447714 34.5369 0 34.0892 0 33.5369V1.46387C0 0.911582 0.447715 0.463867 1 0.463867H59C59.5523 0.463867 60 0.911582 60 1.46387V33.5369C60 34.0892 59.5523 34.5369 59 34.5369H0.999999Z"
                      fill="#0F86D9"/>
                <path d="M21.4657 10.905C21.4657 11.4573 21.018 11.905 20.4657 11.905H16.4063C15.854 11.905 15.4063 12.3527 15.4063 12.905V24.9356C15.4063 25.4879 14.9586 25.9356 14.4063 25.9356H13C12.4477 25.9356 12 25.4879 12 24.9356V10.0664C12 9.51412 12.4477 9.06641 13 9.06641H20.4657C21.018 9.06641 21.4657 9.51412 21.4657 10.0664V10.905Z"
                      fill="white"/>
                <path d="M33.7225 20.3157C34.2922 20.3157 34.7537 20.7924 34.6707 21.3559C34.4621 22.7725 33.9538 23.8817 33.1457 24.6836C32.1493 25.6722 30.7435 26.1666 28.9284 26.1666C27.0205 26.1666 25.5588 25.539 24.5431 24.2839C23.5274 23.0287 23.0195 21.2387 23.0195 18.9138V16.0752C23.0195 13.758 23.5448 11.9718 24.5952 10.7167C25.6457 9.46156 27.1055 8.83398 28.9747 8.83398C30.813 8.83398 32.2091 9.34763 33.163 10.3749C33.9329 11.204 34.4348 12.3248 34.6689 13.7374C34.7636 14.3087 34.2994 14.8008 33.7203 14.8008H32.3474C31.8052 14.8008 31.372 14.3669 31.3039 13.829C31.2182 13.1517 31.0578 12.6549 30.8227 12.3387C30.4867 11.8869 29.8707 11.661 28.9747 11.661C28.0633 11.661 27.4183 11.9796 27.0399 12.6168C26.6614 13.254 26.4606 14.3026 26.4374 15.7624V18.9485C26.4374 20.6246 26.6247 21.7755 26.9993 22.4011C27.3739 23.0268 28.0169 23.3396 28.9284 23.3396C29.8244 23.3396 30.4423 23.1214 30.7821 22.685C31.0172 22.3831 31.1821 21.9121 31.2768 21.2719C31.3552 20.7411 31.7852 20.3157 32.3217 20.3157H33.7225Z"
                      fill="white"/>
                <path d="M48.0027 10.905C48.0027 11.4573 47.555 11.905 47.0027 11.905H44.8318C44.2795 11.905 43.8318 12.3527 43.8318 12.905V24.9356C43.8318 25.4879 43.3841 25.9356 42.8318 25.9356H41.4139C40.8616 25.9356 40.4139 25.4879 40.4139 24.9356V12.905C40.4139 12.3527 39.9662 11.905 39.4139 11.905H37.3125C36.7602 11.905 36.3125 11.4573 36.3125 10.905V10.0664C36.3125 9.51412 36.7602 9.06641 37.3125 9.06641H47.0027C47.555 9.06641 48.0027 9.51412 48.0027 10.0664V10.905Z"
                      fill="white"/>
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


    <!--    <div class="data_mobile hidden">-->
    <!--        <div class="header">-->
    <!--            <a href="/" class="picture">-->
    <!--                <img src="/public/images/logo_h50.png" width="76px" alt="MDB Logo" loading="lazy">-->
    <!--            </a>-->
    <!--            <div class="content d-flex align-items-center">-->
    <!--                <div class="buttonpromo" style="width: 106px; height: 34px;">-->
    <!--                    <a href="https://mp.yourich.ru/register" target="_self" style="font-size: 14px; font-weight: 500; ">-->
    <!--                        Регистрация-->
    <!--                    </a>-->
    <!--                </div>-->
    <!--                <svg class="mobile_menu_click_open" role="button" width="40" height="40" viewBox="0 0 40 40" fill="none"-->
    <!--                     xmlns="http://www.w3.org/2000/svg">-->
    <!--                    <rect width="40" height="40" fill="white"/>-->
    <!--                    <line x1="11.7461" y1="13.8477" x2="28.1394" y2="13.8477" stroke="#272A5E" stroke-width="2"-->
    <!--                          stroke-linecap="round"/>-->
    <!--                    <line x1="11.7461" y1="18.9446" x2="28.1394" y2="18.9446" stroke="#272A5E" stroke-width="2"-->
    <!--                          stroke-linecap="round"/>-->
    <!--                    <line x1="11.7461" y1="24.0415" x2="28.1394" y2="24.0415" stroke="#272A5E" stroke-width="2"-->
    <!--                          stroke-linecap="round"/>-->
    <!--                </svg>-->
    <!--                <svg class="mobile_menu_click_close hide" role="button" width="40" height="40" viewBox="0 0 40 40"-->
    <!--                     fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                    <rect width="40" height="40" fill="white"/>-->
    <!--                    <line x1="13.5195" y1="25.6298" x2="25.7421" y2="13.4073" stroke="#272A5E" stroke-width="1.10803"-->
    <!--                          stroke-linecap="round"/>-->
    <!--                    <line x1="14.303" y1="13.4072" x2="26.5256" y2="25.6298" stroke="#272A5E" stroke-width="1.10803"-->
    <!--                          stroke-linecap="round"/>-->
    <!--                </svg>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        <div class="menu_mobile hide">-->
    <!--            <a href="/#tariff">Тарифы</a>-->
    <!--            <a href="#footerhome">О компании</a>-->
    <!--            <hr>-->
    <!--            <a href="https://wiki.yourich.ru/" target="_blank" class="d-flex justify-content-between">-->
    <!--                <p class="m-0">База знаний</p>-->
    <!--                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                    <path d="M14.0811 0.158936L14.8386 0.916971L6.80828 8.94733L6.05078 8.18983L14.0811 0.158936Z"-->
    <!--                          fill="#BBC1C7"/>-->
    <!--                    <path d="M15 5.35714H13.9286V1.07143H9.64286V0H15V5.35714ZM12.3214 15H1.60714C0.696429 15 0 14.3036 0 13.3929V2.67857C0 1.76786 0.696429 1.07143 1.60714 1.07143H7.5V2.14286H1.60714C1.28571 2.14286 1.07143 2.35714 1.07143 2.67857V13.3929C1.07143 13.7143 1.28571 13.9286 1.60714 13.9286H12.3214C12.6429 13.9286 12.8571 13.7143 12.8571 13.3929V7.5H13.9286V13.3929C13.9286 14.3036 13.2321 15 12.3214 15Z"-->
    <!--                          fill="#BBC1C7"/>-->
    <!--                </svg>-->
    <!--            </a>-->
    <!--            <a href="https://mp.yourich.ru/login" target="_blank" class="d-flex justify-content-between">-->
    <!--                <p class="m-0">Войти</p>-->
    <!--                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--                    <path d="M14.0811 0.158936L14.8386 0.916971L6.80828 8.94733L6.05078 8.18983L14.0811 0.158936Z"-->
    <!--                          fill="#BBC1C7"/>-->
    <!--                    <path d="M15 5.35714H13.9286V1.07143H9.64286V0H15V5.35714ZM12.3214 15H1.60714C0.696429 15 0 14.3036 0 13.3929V2.67857C0 1.76786 0.696429 1.07143 1.60714 1.07143H7.5V2.14286H1.60714C1.28571 2.14286 1.07143 2.35714 1.07143 2.67857V13.3929C1.07143 13.7143 1.28571 13.9286 1.60714 13.9286H12.3214C12.6429 13.9286 12.8571 13.7143 12.8571 13.3929V7.5H13.9286V13.3929C13.9286 14.3036 13.2321 15 12.3214 15Z"-->
    <!--                          fill="#BBC1C7"/>-->
    <!--                </svg>-->
    <!--            </a>-->
    <!--            <hr>-->
    <!--            <div class="info_mobile d-flex align-items-end">-->
    <!--                <a class="tel m-0 pb-1 pe-2 align-items-end text-decoration-none" href="tel:+78005502533">-->
    <!--                    <nobr>8 800 550-25-33</nobr>-->
    <!--                </a>-->
    <!--                <p class="time m-0">пн-пт 07:00-15:30 (мск)</p>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->


</header>

<!--<div class="mt-5">-->
<!---->
<!--    <main>-->
<!--        --><?php //echo $content; ?>
<!--    </main>-->
<!---->
<!--</div>-->

<footer id="footerHome" class="w-full">
    <div class="level_1 bg-white">
        <div class="block_map w-11/12 mx-auto my-24">
            <div class="flex flex-col">
                <p class="text-5xl font-bold">Свяжитесь с нами</p>
                <p class="mt-5">Мы поможем вам с потребностями в системной интеграции.</p>
            </div>
            <div class="flex mt-20">
                <div class="flex flex-col w-[400px]">
                    <div class="">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6665 5.53845H5.33317C3.8625 5.53845 2.6665 6.73445 2.6665 8.20512V24.2051C2.6665 25.6758 3.8625 26.8718 5.33317 26.8718H26.6665C28.1372 26.8718 29.3332 25.6758 29.3332 24.2051V8.20512C29.3332 6.73445 28.1372 5.53845 26.6665 5.53845ZM26.6665 8.20512V8.88645L15.9998 17.1838L5.33317 8.88779V8.20512H26.6665ZM5.33317 24.2051V12.2638L15.1812 19.9238C15.4146 20.1072 15.7029 20.2069 15.9998 20.2069C16.2967 20.2069 16.585 20.1072 16.8185 19.9238L26.6665 12.2638L26.6692 24.2051H5.33317Z"
                                  fill="#0F86D9"/>
                        </svg>
                        <p class="font-bold mt-5">Электронная почта</p>
                        <p class="text-base mt-3">Связаться по E-mail</p>
                        <p class="text-base mt-3"><a href="hello@hello.ru">hello@hello.ru</a></p>
                    </div>
                    <div class="mt-6">
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6095 14.5957C19.4857 14.4718 19.3388 14.3735 19.177 14.3064C19.0153 14.2393 18.8419 14.2048 18.6668 14.2048C18.4917 14.2048 18.3183 14.2393 18.1565 14.3064C17.9948 14.3735 17.8478 14.4718 17.7241 14.5957L15.5988 16.7211C14.6135 16.4277 12.7748 15.7611 11.6095 14.5957C10.4441 13.4304 9.77745 11.5917 9.48412 10.6064L11.6095 8.48106C11.7334 8.35734 11.8317 8.21041 11.8988 8.04865C11.9659 7.8869 12.0004 7.71351 12.0004 7.53839C12.0004 7.36328 11.9659 7.18989 11.8988 7.02814C11.8317 6.86638 11.7334 6.71945 11.6095 6.59573L6.27612 1.26239C6.1524 1.13847 6.00546 1.04015 5.84371 0.973069C5.68196 0.905988 5.50856 0.87146 5.33345 0.87146C5.15834 0.87146 4.98495 0.905988 4.82319 0.973069C4.66144 1.04015 4.5145 1.13847 4.39079 1.26239L0.774786 4.87839C0.26812 5.38506 -0.0172139 6.08106 -0.00654721 6.79173C0.0241195 8.69039 0.526786 15.2851 5.72412 20.4824C10.9215 25.6797 17.5161 26.1811 19.4161 26.2131H19.4535C20.1575 26.2131 20.8228 25.9357 21.3268 25.4317L24.9428 21.8157C25.0667 21.692 25.165 21.5451 25.2321 21.3833C25.2992 21.2216 25.3337 21.0482 25.3337 20.8731C25.3337 20.6979 25.2992 20.5246 25.2321 20.3628C25.165 20.201 25.0667 20.0541 24.9428 19.9304L19.6095 14.5957ZM19.4401 23.5451C17.7761 23.5171 12.0828 23.0704 7.60945 18.5957C3.12145 14.1077 2.68679 8.39439 2.66012 6.76373L5.33345 4.09039L8.78145 7.53839L7.05745 9.26239C6.90073 9.41899 6.78551 9.61218 6.72219 9.82448C6.65887 10.0368 6.64945 10.2615 6.69479 10.4784C6.72679 10.6317 7.50945 14.2677 9.72278 16.4811C11.9361 18.6944 15.5721 19.4771 15.7255 19.5091C15.9422 19.5557 16.1672 19.547 16.3796 19.4839C16.5921 19.4207 16.7853 19.3051 16.9415 19.1477L18.6668 17.4237L22.1148 20.8717L19.4401 23.5451Z"
                                  fill="#0F86D9"/>
                        </svg>
                        <p class="font-bold mt-5">Телефон</p>
                        <p class="text-base mt-3">Позвоните нам</p>
                        <p class="text-base mt-3"><a href="tel:+78005502533">
                                <nobr>8 800 550-25-33</nobr>
                            </a></p>
                    </div>
                    <div class="mt-6">
                        <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0002 16.8718C13.9416 16.8718 16.3336 14.4798 16.3336 11.5384C16.3336 8.5971 13.9416 6.2051 11.0002 6.2051C8.05891 6.2051 5.66691 8.5971 5.66691 11.5384C5.66691 14.4798 8.05891 16.8718 11.0002 16.8718ZM11.0002 8.87177C12.4709 8.87177 13.6669 10.0678 13.6669 11.5384C13.6669 13.0091 12.4709 14.2051 11.0002 14.2051C9.52958 14.2051 8.33358 13.0091 8.33358 11.5384C8.33358 10.0678 9.52958 8.87177 11.0002 8.87177ZM10.2269 27.2904C10.4526 27.4516 10.723 27.5382 11.0003 27.5382C11.2776 27.5382 11.5479 27.4516 11.7736 27.2904C12.1789 27.0038 21.7056 20.1251 21.6669 11.5384C21.6669 5.6571 16.8816 0.871765 11.0003 0.871765C5.11895 0.871765 0.333613 5.6571 0.333613 11.5318C0.294947 20.1251 9.82161 27.0038 10.2269 27.2904ZM11.0003 3.53843C15.4123 3.53843 19.0003 7.12643 19.0003 11.5451C19.0283 17.4624 13.1496 22.7758 11.0003 24.5184C8.85228 22.7744 2.97228 17.4598 3.00028 11.5384C3.00028 7.12643 6.58828 3.53843 11.0003 3.53843Z"
                                  fill="#0F86D9"/>
                            <path d="M11.0002 16.8718C13.9416 16.8718 16.3336 14.4798 16.3336 11.5384C16.3336 8.5971 13.9416 6.2051 11.0002 6.2051C8.05891 6.2051 5.66691 8.5971 5.66691 11.5384C5.66691 14.4798 8.05891 16.8718 11.0002 16.8718ZM11.0002 8.87177C12.4709 8.87177 13.6669 10.0678 13.6669 11.5384C13.6669 13.0091 12.4709 14.2051 11.0002 14.2051C9.52958 14.2051 8.33358 13.0091 8.33358 11.5384C8.33358 10.0678 9.52958 8.87177 11.0002 8.87177ZM10.2269 27.2904C10.4526 27.4516 10.723 27.5382 11.0003 27.5382C11.2776 27.5382 11.5479 27.4516 11.7736 27.2904C12.1789 27.0038 21.7056 20.1251 21.6669 11.5384C21.6669 5.6571 16.8816 0.871765 11.0003 0.871765C5.11895 0.871765 0.333613 5.6571 0.333613 11.5318C0.294947 20.1251 9.82161 27.0038 10.2269 27.2904ZM11.0003 3.53843C15.4123 3.53843 19.0003 7.12643 19.0003 11.5451C19.0283 17.4624 13.1496 22.7758 11.0003 24.5184C8.85228 22.7744 2.97228 17.4598 3.00028 11.5384C3.00028 7.12643 6.58828 3.53843 11.0003 3.53843Z"
                                  fill="#0F86D9"/>
                        </svg>
                        <p class="font-bold mt-5">Офис</p>
                        <p class="text-base mt-3">190000 Санкт-Петербург ул Примерная д 17</p>
                    </div>
                </div>
                <div class="flex map">
                    <iframe class="rounded-2xl" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=150708584688"
                            width="100%" height="500"
                            frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    <div class="level_2">
        <div class="block_info text-white mx-auto w-11/12">
            <div class="flex text-base mt-24">
                <div class="flex w-1/5">
                    <svg width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999999 34.5369C0.447714 34.5369 0 34.0892 0 33.5369V1.46387C0 0.911582 0.447715 0.463867 1 0.463867H59C59.5523 0.463867 60 0.911582 60 1.46387V33.5369C60 34.0892 59.5523 34.5369 59 34.5369H0.999999Z"
                              fill="#0F86D9"/>
                        <path d="M21.4657 10.905C21.4657 11.4573 21.018 11.905 20.4657 11.905H16.4063C15.854 11.905 15.4063 12.3527 15.4063 12.905V24.9356C15.4063 25.4879 14.9586 25.9356 14.4063 25.9356H13C12.4477 25.9356 12 25.4879 12 24.9356V10.0664C12 9.51412 12.4477 9.06641 13 9.06641H20.4657C21.018 9.06641 21.4657 9.51412 21.4657 10.0664V10.905Z"
                              fill="white"/>
                        <path d="M33.7225 20.3157C34.2922 20.3157 34.7537 20.7924 34.6707 21.3559C34.4621 22.7725 33.9538 23.8817 33.1457 24.6836C32.1493 25.6722 30.7435 26.1666 28.9284 26.1666C27.0205 26.1666 25.5588 25.539 24.5431 24.2839C23.5274 23.0287 23.0195 21.2387 23.0195 18.9138V16.0752C23.0195 13.758 23.5448 11.9718 24.5952 10.7167C25.6457 9.46156 27.1055 8.83398 28.9747 8.83398C30.813 8.83398 32.2091 9.34763 33.163 10.3749C33.9329 11.204 34.4348 12.3248 34.6689 13.7374C34.7636 14.3087 34.2994 14.8008 33.7203 14.8008H32.3474C31.8052 14.8008 31.372 14.3669 31.3039 13.829C31.2182 13.1517 31.0578 12.6549 30.8227 12.3387C30.4867 11.8869 29.8707 11.661 28.9747 11.661C28.0633 11.661 27.4183 11.9796 27.0399 12.6168C26.6614 13.254 26.4606 14.3026 26.4374 15.7624V18.9485C26.4374 20.6246 26.6247 21.7755 26.9993 22.4011C27.3739 23.0268 28.0169 23.3396 28.9284 23.3396C29.8244 23.3396 30.4423 23.1214 30.7821 22.685C31.0172 22.3831 31.1821 21.9121 31.2768 21.2719C31.3552 20.7411 31.7852 20.3157 32.3217 20.3157H33.7225Z"
                              fill="white"/>
                        <path d="M48.0027 10.905C48.0027 11.4573 47.555 11.905 47.0027 11.905H44.8318C44.2795 11.905 43.8318 12.3527 43.8318 12.905V24.9356C43.8318 25.4879 43.3841 25.9356 42.8318 25.9356H41.4139C40.8616 25.9356 40.4139 25.4879 40.4139 24.9356V12.905C40.4139 12.3527 39.9662 11.905 39.4139 11.905H37.3125C36.7602 11.905 36.3125 11.4573 36.3125 10.905V10.0664C36.3125 9.51412 36.7602 9.06641 37.3125 9.06641H47.0027C47.555 9.06641 48.0027 9.51412 48.0027 10.0664V10.905Z"
                              fill="white"/>
                    </svg>
                    <p class="text-sm ps-4 w-40">Глобальные сетевые технологии</p>
                </div>
                <div class="flex flex-col w-2/5">
                    <a class="" href="/about">О компании</a>
                    <a class="mt-5" href="/products" target="_blank">Услуги и продукты</a>
                    <a class="mt-5" href="/contacts" target="_blank">Контакты</a>
                </div>
                <div class="flex flex-col w-2/5">
                    <div>Подписка</div>
                    <div class="mt-5">Будьте в курсе наших последних новостей</div>
                    <div class="flex mt-5">
                        <form action='/' method='post' enctype='multipart/form-data' class="inputs">
                            <div class="">
                                <input class="form-control buttonpromo mr-4" type="email" name='mail'
                                       placeholder="Ваш email"
                                       id="input_mail">
                                <button type="submit" class="buttonpromo " id="submit">
                                    Подписаться
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="mt-5 text-xs" style="color: #FFFFFF99">Подписываясь, вы соглашаетесь с нашей Политикой
                        конфиденциальности и соглашаетесь на электронную рассылку.
                    </div>
                </div>
            </div>
            <hr class="mt-40">
            <div class="flex justify-between my-10">
                <div class="flex text-sm">
                    <p class="mr-4">© 2024 ООО Глобальные сетевые Технологии </p>
                    <a class="mr-4" href="/">Политика конфиденциальности</a>
                    <a class="mr-4" href="/">Условия использования</a>
                    <a class="" href="/">Настройки Cookie</a>
                </div>
                <div class="flex">
                    <svg class="mr-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.5 3.44775C3.67157 3.44775 3 4.11932 3 4.94775V19.9478C3 20.7762 3.67157 21.4478 4.5 21.4478H19.5C20.3284 21.4478 21 20.7762 21 19.9478V4.94775C21 4.11932 20.3284 3.44775 19.5 3.44775H4.5ZM8.52076 7.45047C8.52639 8.40672 7.81061 8.99594 6.96123 8.99172C6.16107 8.9875 5.46357 8.35047 5.46779 7.45188C5.47201 6.60672 6.13998 5.9275 7.00764 5.94719C7.88795 5.96688 8.52639 6.61235 8.52076 7.45047ZM12.2797 10.2095H9.75971H9.7583V18.7694H12.4217V18.5697C12.4217 18.1898 12.4214 17.8098 12.4211 17.4297C12.4203 16.4159 12.4194 15.401 12.4246 14.3875C12.426 14.1414 12.4372 13.8855 12.5005 13.6506C12.7381 12.7731 13.5271 12.2064 14.4074 12.3457C14.9727 12.4342 15.3467 12.7619 15.5042 13.2949C15.6013 13.6281 15.6449 13.9867 15.6491 14.3341C15.6605 15.3817 15.6589 16.4293 15.6573 17.477C15.6567 17.8468 15.6561 18.2168 15.6561 18.5866V18.768H18.328V18.5627C18.328 18.1107 18.3278 17.6588 18.3275 17.2069C18.327 16.0774 18.3264 14.9479 18.3294 13.818C18.3308 13.3075 18.276 12.8041 18.1508 12.3105C17.9638 11.5764 17.5771 10.9689 16.9485 10.5302C16.5027 10.2179 16.0133 10.0169 15.4663 9.99435C15.404 9.99176 15.3412 9.98837 15.2781 9.98496C14.9984 9.96984 14.7141 9.95448 14.4467 10.0084C13.6817 10.1617 13.0096 10.5119 12.5019 11.1292C12.4429 11.2 12.3852 11.2719 12.2991 11.3792L12.2797 11.4035V10.2095ZM5.68164 18.7722H8.33242V10.2151H5.68164V18.7722Z"
                              fill="white"/>
                    </svg>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5928 7.40809C21.4789 6.98549 21.2563 6.60009 20.9472 6.29025C20.6381 5.98042 20.2532 5.75695 19.8308 5.64209C18.2648 5.21209 11.9998 5.20509 11.9998 5.20509C11.9998 5.20509 5.73584 5.19809 4.16884 5.60909C3.74677 5.72923 3.36266 5.95586 3.05341 6.26722C2.74415 6.57858 2.52013 6.96421 2.40284 7.38709C1.98984 8.95309 1.98584 12.2011 1.98584 12.2011C1.98584 12.2011 1.98184 15.4651 2.39184 17.0151C2.62184 17.8721 3.29684 18.5491 4.15484 18.7801C5.73684 19.2101 11.9848 19.2171 11.9848 19.2171C11.9848 19.2171 18.2498 19.2241 19.8158 18.8141C20.2383 18.6994 20.6236 18.4765 20.9335 18.1673C21.2434 17.8581 21.4672 17.4733 21.5828 17.0511C21.9968 15.4861 21.9998 12.2391 21.9998 12.2391C21.9998 12.2391 22.0198 8.97409 21.5928 7.40809ZM9.99584 15.2101L10.0008 9.21009L15.2078 12.2151L9.99584 15.2101Z"
                              fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
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