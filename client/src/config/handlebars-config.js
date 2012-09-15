(function() {

    Handlebars.registerHelper('t', function(i18n_key) {
        var result = $.t(i18n_key);
        return new Handlebars.SafeString(result);
    });

    Handlebars.registerHelper('time', function(date) {
        var parsedDate = moment(date);
        return parsedDate.format('DD/MMM/YYYY');
    });

    accounting.settings = {
    	currency: {
    		symbol : "€",
    		format: "%v %s",
    		decimal : ",",
    		thousand: ".",
    		precision : 2
    	},
    	number: {
    		precision : 0,
    		thousand: ".",
    		decimal : ","
    	}
    };

    Handlebars.registerHelper('money', function(amount) {
        return accounting.formatMoney(amount);
    });

    Handlebars.registerHelper('number', function(amount) {
        return accounting.formatNumber(amount);
    });

    Handlebars.registerHelper('decimal', function(amount) {
        return accounting.formatNumber(amount, 2, ".", ",");
    });
})();