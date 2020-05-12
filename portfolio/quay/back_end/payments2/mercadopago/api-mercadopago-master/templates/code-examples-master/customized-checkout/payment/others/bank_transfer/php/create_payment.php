<?php
require_once ('mercadopago.php');

$mp = new MP('ACCESS_TOKEN');

$payment_data = array(
	"transaction_amount" => 100,
	"description" => "Title of what you are paying for",
	"payer" => array (
		"email" => "test_user_19653727@testuser.com",
		"identification" => array(
			"type" => "IDENTIFICATION_TYPE_ID",
			"number" => "12345678"
		)
	),
	"payment_method_id" => "webpay",
	"transaction_details" => array(
		"financial_institution" => 1234
	),
	"additional_info" => array(
		"ip_address" => "127.0.0.1"
	),
	"callback_url" => "http://www.your-site.com"
);

$payment = $mp->post("/v1/payments", $payment_data);
