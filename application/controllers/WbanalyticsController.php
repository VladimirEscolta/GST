<?php

namespace application\controllers;

use application\core\Controller;

class WbanalyticsController extends Controller
{

    public function wbanalyticsAction() {

        $vars = [
            'metaTitle' => "Внешняя аналитика Wildberries",
            'metaDescription' => "YouRich — единая платформа для всех каналов интернет-продаж: создайте интернет-магазин, продавайте и продвигайте товары через маркетплейсы, соцсети, мессенджеры и рекламные сервисы.",
            'cssArr'  => ['index', 'wbanalytics'],
            'jsArr' => ['index', 'wbanalytics'],
        ];

        $this->view->render($vars);

    }

}