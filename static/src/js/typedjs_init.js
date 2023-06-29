/** @odoo-module **/

odoo.define('my_typedjs_module.typedjs_init', function (require) {
    'use strict';
    
    var publicWidget = require('web.public.widget');

    publicWidget.registry.TypedJs = publicWidget.Widget.extend({
        selector: '.element',  // Replace .element with the selector of the element you want the typing animation on.

        start: function () {
            var options = {
                strings: ['First sentence.', 'Second sentence.'],
                typeSpeed: 40,
                backSpeed: 50,
                loop: true
            };

            var typed = new Typed(this.selector, options);
        }
    });

    return publicWidget.registry.TypedJs;
});
