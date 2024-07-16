<?php

namespace application\models;

use application\core\Model;
use LDAP\Result;

class Main extends Model {


    public function checkPhone($phone)
    {

        $res = $this->db->row("SELECT * FROM advertising WHERE phone = :phone", ['phone' => $phone]);

        if ( ! empty($res)) {
            return false;
        } else {
            return true;
        }
    }

    public function createUser($name, $phone, $mail, $tarif='', $acontacts='', $newsletter=0) {

        $result = $this->db->query( "INSERT INTO advertising ( name, phone, mail, tarif, acontacts, newsletter) VALUES (:name, :phone, :mail, :tarif, :acontacts, :newsletter)",
            [
                'name' => $name,
                'phone' => $phone,
                'mail' => $mail,
                'tarif' => $tarif,
                'acontacts'=> $acontacts,
                'newsletter' => $newsletter
            ]
        );
        return $result;
    }
   public function getAllChat()
   
    {
        $this->setDB();
        $result = $this->db->row('SELECT chat FROM ps_bot_users');
        return $result; 
    }

}