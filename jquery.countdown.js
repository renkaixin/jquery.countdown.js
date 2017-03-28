;(function ($, global) {

    global.setInterval(function () {

        $('[data-countdown]').each(function () {

            var $self = $(this),
                gap = 0,
                data = {},
                target = $self.data('countdown') * 1 || 0,
                cb = $self.data('cb'),
                withLeadingZero = $self.data('withLeadingZero') || true,
                cbHolder = global['CountdownCallback'],
                hasCallback = cbHolder && $.isFunction(cbHolder[cb]);

            if (target > 0) {
                gap = target - (new Date()).valueOf();
            }

            if (gap >= 0) {

                // calculate
                gap = Math.round(gap / 100);
                data.ss = Math.floor(gap / 10) % 60;
                data.mm = Math.floor(gap / 600) % 60;
                data.hh = Math.floor(gap / 36000) % 24;
                data.dd = Math.floor(gap / 864000);

                // render
                for (var i in data) {
                    if (data.hasOwnProperty(i)) {
                        if (withLeadingZero) {
                            data[i] = parseInt(data[i], 10);
                            if (data[i] <= 9) {
                                data[i] = '0' + data[i];
                            }
                        }
                        $self.find('[data-' + i + ']').text(data[i]);
                    }
                }

                // invoke step callback
                if (hasCallback && $.isFunction(cbHolder[cb].step)) {
                    cbHolder[cb].step(data);
                }

                // invoke finished callback
                if (data.dd * 1 === 0 && data.hh * 1 === 0 && data.mm * 1 === 0 && data.ss * 1 === 0) {
                    if (hasCallback && $.isFunction(cbHolder[cb].finished)) {
                        cbHolder[cb].finished();
                    }
                }
            }
        });
    }, 1000);
})(jQuery, window);