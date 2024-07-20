<?php

namespace application\controllers;

use application\core\Controller;

class CompanyController extends Controller
{

    public function companyAction() {

        $vars = [
            'metaTitle' => "Аксиома",
            'metaDescription' => "YouRich — единая платформа для всех каналов интернет-продаж: создайте интернет-магазин, продавайте и продвигайте товары через маркетплейсы, соцсети, мессенджеры и рекламные сервисы.",
            'cssArr'  => ['index', 'company'],
            'jsArr' => ['index', 'company'],
        ];

        $this->view->render($vars);

    }

}