<script type="text/javascript">

    // Configurá tu Public Key
    Mercadopago.setPublishableKey("PUBLIC_KEY");

    // Consultá el recurso de installments
    Mercadopago.getInstallments({
        "payment_method_id": "visa",
        "bin": 424242,
        "amount": 100
    }, showInstallments);

    // Mostrá las cuotas
    function showInstallments(status, response){
      var selectorInstallments = document.getElementById('installments'),
          fragment = document.createDocumentFragment();
      selectorInstallments.options.length = 0;
      if (response.length > 0){
        var option = new Option("Elija una cuota...", '-1'),
            payerCosts = response[0].payer_costs;
        fragment.appendChild(option);
        for (var i = 0; i < payerCosts.length; i++) {
            option = new Option(payerCosts[i].recommended_message || payerCosts[i].installments, payerCosts[i].installments); 
            var tax = payerCosts[i].labels;
            if(tax.length > 0){
              for (var l = 0; l < tax.length; l++) {
                if (tax[l].indexOf('CFT_') !== -1){
                  option.setAttribute('data-tax', tax[l]); 
                } 
              }
            }
            fragment.appendChild(option);
        }
        selectorInstallments.appendChild(fragment);
        selectorInstallments.removeAttribute('disabled');
      }
      else {
        console.log('Error: Could not get installments');
      }
    }

    // Actualizá el resumen cuando el usuario elija las cuotas
    document.getElementById('installments').onchange = function(){
      var cur_i = this.options[this.selectedIndex].getAttribute('data-tax');
      if(cur_i != null){
        document.getElementById('total-financed').innerHTML = this.options[this.selectedIndex].text;
        showTaxes(cur_i);
      }
    };
    function showTaxes(tax){
      var tax_split = tax.split('|');
          var CFT = tax_split[0].replace('CFT_', ''),
          TEA = tax_split[1].replace('TEA_', '');
      document.getElementById('cft').innerHTML = CFT;
      document.getElementById('tea').innerHTML = TEA;
    }

</script>
