curl -G -X GET \
-H "accept: application/json" \
"https://api.mercadopago.com/v1/balance/history" \
-d "access_token=ACCESS_TOKEN" \
-d "range=date_created" \
-d "begin_date=NOW-1MINUTES" \
-d "end_date=NOW" \
-d "offset=0" \
-d "sort=date_created" \
-d "limit=10"