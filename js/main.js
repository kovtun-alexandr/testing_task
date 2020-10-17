$(function () {

    let value = 0;

    $('.deposit__modal-btn').on('click', function () {
        $('.overlay__popup, .popap__wrap').show();
        startTime();
    });

    $('.form__close').on('click', function () {
        $('.overlay__popup, .popap__wrap').hide();
        
    });

    $('.form__replenishment-btn').on('click', function () {
        const paymentMethod = $('.payment__select option:selected').text();
        alert('Вы выбрали способ оплаты "' + paymentMethod + '" суммa пополнения: ' + value);
        $('.overlay__popup, .popap__wrap').hide();
    });

    $('.rate__item').on('click', function () {
        $(this).addClass('rate__item-active').siblings().removeClass('rate__item-active');
        addCoast()
    });

    function addCoast() {
        value = $('.rate__item-active .item__value-sum').text();
        const writeValue = $('.form__enroll-value').text(value);
    }

    // $('.overlay__popup').on('click', function() { 
    //     $('.overlay__popup, .popap__wrap').hide();
    // });

    //     const time = $('.seconds');
    //     intervalId = setInterval(timerDecrement, 1000);

    //   function timerDecrement() {
    //     const newTime = time.text() - 1;

    //     time.text(newTime);

    //     if(newTime === 0) clearInterval(intervalId);
    //   }

    // $('#select option:selected').text()

    function pad(num) {
        return num < 10 ? "0" + num : num;
    }
    function startTime() {
        var tCont = $('.form__timer');
        var timer = tCont.html().split(':');

        if (timer.length === 2) timer.unshift(0);
        var endMilli = timer[0] * 60 * 60 * 1000;
        endMilli += timer[1] * 60 * 1000
        endMilli += timer[2] * 1000;
        if (endMilli > 0) {
            var endTime = new Date(Date.now() + endMilli);
            $("#cons").append("<br>" + endTime);
            var tId = setInterval(function () {
                var diff = endTime.getTime() - Date.now();
                if (diff <= 0) {
                    tCont.html("00:00:00");
                    clearInterval(tId);
                }
                else {
                    var d = new Date(diff);
                    hh = pad(d.getUTCHours());
                    mm = pad(d.getMinutes());
                    ss = pad(d.getSeconds());
                    tCont.html("" + hh + ":" + mm + ":" + ss);
                }
            }, 300);
        }
    }

    function stopTimer(){
        
    }
});