<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.mercadopago.MP"%>
<%@page import="org.codehaus.jettison.json.JSONObject"%>

<%
	MP mp = new MP("CLIENT_ID", "CLIENT_SECRET");

	String preapprovalData = "{"+
		"'payer_email': 'my_customer@my-site.com',"+
		"'back_url': 'http://www.my-site.com',"+
		"'reason': 'Monthly subscription to premium package',"+
		"'external_reference': 'OP-1234',"+
		"'auto_recurring': {"+
			"'frequency': 1,"+
			"'frequency_type': 'months',"+
			"'transaction_amount': 60,"+
			"'currency_id': 'CURRENCY_ID',"+
			"'start_date': '2014-12-10T14:58:11.778-03:00',"+
			"'end_date': '2015-06-10T14:58:11.778-03:00'"+
		"}"+
	"}";

	JSONObject preapproval = mp.createPreapprovalPayment(preapprovalData);

	String initPoint = preapproval.getJSONObject("response").getString("init_point");
%>

<!DOCTYPE html>
<html>
	<head>
		<title>Subscribe</title>
	</head>
	<body>
		<a href="<%= initPoint %>" name="MP-Checkout" class="blue-rn-m">Subscribe</a>
		<script type="text/javascript" src="https://www.mercadopago.com/org-img/jsapi/mptools/buttons/render.js"></script>
	</body>
</html>
