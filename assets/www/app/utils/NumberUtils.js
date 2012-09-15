Ext.define("FinancialMobile.utils.NumberUtils", {
	extend : "Object",
	singleton : true,

	/**
	 * A partir de um valor float ela retorna o valor formatado com separador de
	 * milhar e vírgula nos centavos.
	 */
	float2moeda : function(num) {
		x = 0;
		if (num < 0) {
			num = Math.abs(num);
			x = 1;
		}
		if (isNaN(num))
			num = "0";
		cents = Math.floor((num * 100 + 0.5) % 100);
		num = Math.floor((num * 100 + 0.5) / 100).toString();
		if (cents < 10)
			cents = "0" + cents;
		for ( var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
			num = num.substring(0, num.length - (4 * i + 3)) + '.'
					+ num.substring(num.length - (4 * i + 3));
		ret = num + ',' + cents;
		if (x == 1)
			ret = ' - ' + ret;
		return ret;
	}
});
