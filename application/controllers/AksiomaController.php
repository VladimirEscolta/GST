<?php

namespace application\controllers;

use application\core\Controller;

class AksiomaController extends Controller
{

    public function aksiomaAction() {

        $vars = [
            'metaTitle' => "Аксиома",
            'metaDescription' => "YouRich — единая платформа для всех каналов интернет-продаж: создайте интернет-магазин, продавайте и продвигайте товары через маркетплейсы, соцсети, мессенджеры и рекламные сервисы.",
            'cssArr'  => ['index', 'aksioma'],
            'jsArr' => ['index', 'aksioma'],
        ];

        $this->view->render($vars);

    }

}