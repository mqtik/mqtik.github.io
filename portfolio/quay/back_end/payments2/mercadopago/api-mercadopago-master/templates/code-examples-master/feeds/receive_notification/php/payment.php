<?php
require_once "mercadopago.php";

$mp = new MP("CLIENT_ID", "CLIENT_SECRET");

if (!isset($_GET["id"]) || !ctype_digit($_GET["id"])) {
	http_response_code(400);
	return;
}

$payment_info = $mp->get_payment_info($_GET["id"]);

if ($payment_info["status"] == 200) {
	print_r($payment_info["response"]);
}
?>