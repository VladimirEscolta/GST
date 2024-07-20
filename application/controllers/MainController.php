<?php

namespace application\controllers;

use application\core\Controller;

class MainController extends Controller
{
    public function mainAction()
    {
        if (!empty($_POST) && !empty($_POST['phone'])) {

            if (mb_substr(trim($_POST['phone']), 0, 5) != '+7 (9') {
                exit;
            }

            if (!$this->model->checkPhone($_POST['phone'])) {
                $this->view->message('application-failed', 'Данный номер телефона уже зарегистрирован');
            }

            if (trim($_POST['mail']) == "testing@example.com") {
                exit;
            }

            $name = $_POST['name'];
            $phone = $_POST['phone'];
            $mail = $_POST['mail'];

//            $botToken = "5750194286:AAEtqqOCLw9ea7rJoafMXHNE64Z4exjuZeg";
//            $website = "https://api.telegram.org/bot" . $botToken;
//
//            $telegramMessage = " <b>yourich.ru</b>\n";
//            $telegramMessage .= " <b>Заявка на регистрацию!</b>\n";
//            $telegramMessage .= "Пользователь: " . $name . "\n";
//            $telegramMessage .= "Телефон: " . $phone . "\n";
//            $telegramMessage .= "E-mail: " . $mail . "\n";
//
//            $telegramUsers = [
//                5483633902,        //Егор
//                587589814,        //Александр
//                1000421084,        //Леонид
//                819836762,        //Женя
//                618716528,        //Олег
//            ];
//            foreach ($telegramUsers as $chatId) {
//                $params = [
//                    'chat_id' => $chatId,
//                    'parse_mode' => 'HTML',
//                    'text' => $telegramMessage,
//                ];
//                $ch = curl_init($website . '/sendMessage');
//                curl_setopt($ch, CURLOPT_HEADER, false);
//                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//                curl_setopt($ch, CURLOPT_POST, 1);
//                curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
//                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//                $result = curl_exec($ch);
//                curl_close($ch);
//            }

            $result = $this->model->createUser($name, $phone, $mail);
            $this->view->message('application-success', 'Ваша заявка успешно зарегистрирована!');

        }

        $vars = [
            'metaTitle' => "YouRich – Продвижение на маркетплейсах с автобиддером",
            'metaDescription' => "Сервис автоматического управления ставками в рекламных кампаниях Ozon Seller. Исключите постоянную корректировку ставок и переходите на управление биддером, массовые действия и подробную аналитику вплоть до каждого товара в кампании.",
            'cssArr' => ['index', 'main', 'login'],
            'jsArr' => ['index', 'main'],
            // 'headerAnchors' => [['name' => 'Решения', 'anchor' => 'union-block' ],['name' => 'Платформа', 'anchor' => 'platform-block' ]],
        ];

        $this->view->render($vars);

    }

    public function callmeAction()
    {
        if (!empty($_POST) && !empty($_POST['phone'])) {


            $allChat = $this->model->getAllChat();
            foreach ($allChat as $keyChat => $valueChat) {

                // $mesg = '``` ' . $this->l('New order') . ' ``` ' . $delivery . '``` ' . $this->l('Products:') . ' ``` ' . $cart . '``` ' . $this->l('Total products (tax incl.):') . ' ' . $order->total_products_wt . ' ' . $currency->iso_code . ' ``` ' . '``` ' . $this->l('Carrier:') . ' ' . $carrier_name . ' ' . $order->total_shipping_tax_incl . ' ' . $currency->iso_code . ' ``` ' . '``` ' . $this->l('Payment:') . ' ' . $order->payment . ' ``` ' . '``` ' . $this->l('Total:') . ' ' . $order->total_paid_tax_incl . ' ' . $currency->iso_code . ' ``` ';
                $mesg = "Потециальный клиент требует консультацию, позвонить на его номер " . $_POST['phone'];
                //  $website = Configuration::get('TELEGRAM_WEBSITE') . Configuration::get('TELEGRAM_KEY');
                //button name

                $icall = "Я звоню!";


                $icall_but = array("text" => $icall, "callback_data" => '/icall');

                $inline_keyboard = [[$icall_but]];
                $keyboard = array("keyboard" => $inline_keyboard, 'resize_keyboard' => true, 'one_time_keyboard' => true);
                $replyMarkup = json_encode($keyboard);

                file_get_contents('https://api.telegram.org/bot5564246104:AAHnlEjuytAoT-xj3k1Lcp9wTmEGEx7MF5Q' . "/sendmessage?parse_mode=Markdown&chat_id=" . $valueChat['chat'] . "&text=" . $mesg . "&reply_markup=" . $replyMarkup);
            }

            $this->view->message('sendok', '');
        }

    }

}