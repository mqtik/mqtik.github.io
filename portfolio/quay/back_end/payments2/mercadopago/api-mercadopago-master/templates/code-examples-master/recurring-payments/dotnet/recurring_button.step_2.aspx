<%@ Page Language="c#" %>
<%@ Import Namespace="mercadopago" %>
<%@ Import Namespace="System.Collections" %>

<%
	MP mp = new MP("CLIENT_ID", "CLIENT_SECRET");
	
	String preapprovalData = "{"+
		"\"payer_email\": \"my_customer@my-site.com\","+
		"\"back_url\": \"http://www.my-site.com\","+
		"\"reason\": \"Monthly subscription to premium package\","+
		"\"external_reference\": \"OP-1234\","+
		"\"auto_recurring\": {"+
			"\"frequency\": 1,"+
			"\"frequency_type\": \"months\","+
			"\"transaction_amount\": 60,"+
			"\"currency_id\": \"CURRENCY_ID\","+
			"\"start_date\": \"2014-12-10T14:58:11.778-03:00\","+
			"\"end_date\": \"2015-06-10T14:58:11.778-03:00\""+
		"}"+
	"}";

	Hashtable preapproval = mp.createPreapprovalPayment(preapprovalData);
%>

<!DOCTYPE html>
<html>
	<head>
		<title>Subscribe</title>
	</head>
	<body>
		<a href="subscription_link">Subscribe</a>
	</body>
</html>