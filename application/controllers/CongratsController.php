<?php

namespace application\controllers;

use application\core\Controller;

class CongratsController extends Controller
{

    public function congratsAction() {

        $vars = [
            'metaTitle' => "Создайте бесплатно интернет-магазин с интегрированными маркетплейсами и продавайте онлайн через YouRich",
            'metaDescription' => "YouRich — единая платформа для всех каналов интернет-продаж: создайте интернет-магазин, продавайте и продвигайте товары через маркетплейсы, соцсети, мессенджеры и рекламные сервисы.",
            'cssArr'  => ['index', 'congrats'],
            'jsArr' => ['index', 'congrats'],
        ];

        $this->view->render($vars);

    }

}