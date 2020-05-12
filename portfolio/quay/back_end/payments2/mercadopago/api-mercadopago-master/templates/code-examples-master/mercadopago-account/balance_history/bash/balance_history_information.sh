curl -G -X GET \
-H "accept: application/json" \
"https://api.mercadopago.com/v1/balance/history" \
-d "access_token=ACCESS_TOKEN" \
-d "id=balance_history_id"