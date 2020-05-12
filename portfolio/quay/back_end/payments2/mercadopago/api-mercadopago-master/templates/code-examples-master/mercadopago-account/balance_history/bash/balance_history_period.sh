curl -G -X GET \
-H "accept: application/json" \
"https://api.mercadopago.com/v1/balance/history" \
-d "access_token=ACCESS_TOKEN" \
-d "range=date_created" \
-d "begin_date=2012-10-21T00:00:00Z" \
-d "end_date=2012-10-25T24:00:00Z"