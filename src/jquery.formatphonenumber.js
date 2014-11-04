/**
 * jQuery Format Phone Number Plugin v0.1.0
 * https://github.com/olythy/jquery-format-phone-number
 * 
 * Copyright (c) 2007-2014  OlyThy
 * Released under the MIT License
 *
 * @author OlyThy
 * @version 0.1.0
 */

/**
 * Valid charactes for format pattern are
 * # (hash mark, number), space, rounded brackets, +, -
 * For example, if format is "+(##) ## ###-####"
 * and the input text is 36771232345 then
 * the updated value will be +36 77 123-2345
 *
 * Default format is "###-###-####"
 *
 * Usage:
 * $(".phoneNumberInput").formatPhoneNumber();
 * or
 * $(".phoneNumberInput").formatPhoneNumber({format: '+(##) ## ###-####'});
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if(typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($){
    var FormatPhoneNumber = {
        init: function(el, options) {
            this.el = el;
            this.format = options.format;
            this.validFormat = '#-() +';

            if (this.validateFormat()) {
                this.bindEvents();
            }
        },
        validateFormat: function() {
            for (var i = 0; i < this.format.length; i++) {
                if (this.validFormat.indexOf(this.format[i]) < 0) {
                    return false;
                }
            }
            return true;
        },
        bindEvents: function() {
            var self = this;
            self.el.on('keyup', function() {
                $(this).val(self.formatValue($(this).val()));
            });
        },
        formatValue: function(value) {
            var formatedValue = this.format;
            value = value.replace(/[^0-9]+/ig, "");
            for (var i = 0; i < value.length; i++) {
                formatedValue = formatedValue.replace("#", value[i]);
            }
            formatedValue = formatedValue.replace(/[\-\(\) #\+]+$/ig, "");
            return formatedValue;
        }
    };

    $.fn.formatPhoneNumber = function(options) {
        var formatPhoneNumber = Object.create(FormatPhoneNumber);
        formatPhoneNumber.init(this, $.extend({}, {format: '###-###-####'}, options));
    };
}));