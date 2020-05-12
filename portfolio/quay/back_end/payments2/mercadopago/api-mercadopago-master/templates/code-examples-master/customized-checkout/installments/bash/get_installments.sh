curl -X GET \
-H "accept: application/json" \
"https://api.mercadopago.com/v1/payment_methods/installments?[payment_method_id=:id]&[bin=:bin]&[amount=:amount]&[issuer.id=:issuer_id]&access_token=ACCESS_TOKEN"
