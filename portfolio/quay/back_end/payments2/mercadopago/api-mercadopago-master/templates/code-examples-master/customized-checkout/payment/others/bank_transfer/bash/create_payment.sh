curl -X POST \
	-H 'accept: application/json' \
	-H 'content-type: application/json' \
	'https://api.mercadopago.com/v1/payments?access_token=ACCESS_TOKEN' \
	-d '{
		"transaction_amount": 100,
		"description": "Title of what you are paying for",
		"payer": {
			"email": "test_user_19653727@testuser.com",
			"identification":{
				"type": "IDENTIFICATION_TYPE_ID",
				"number": "12345678"
			},
			"entity_type": "individual"
		},
		"payment_method_id": "webpay",
		"transaction_details": {
			"financial_institution": 1234
		},
		"additional_info": {
			"ip_address": "127.0.0.1"
		},
		"callback_url": "http://www.your-site.com"
	}'
