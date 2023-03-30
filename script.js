let hour = document.getElementById("hour");
        let minutes = document.getElementById("mins");
        let seconds = document.getElementById("seconds");
        let alarmHour = document.getElementById("alarmHour");
        let alarmMinutes = document.getElementById("alarmMinutes");
        let display = document.getElementById("alarm-set");
        let audio = document.getElementById("play-audio");

        function time() {
            let date = new Date();
            hour.innerHTML = date.getHours();
            minutes.innerHTML = date.getMinutes();
            seconds.innerHTML = date.getSeconds();

            if (seconds.innerHTML < 10) {
                seconds.innerHTML = "0" + seconds.innerHTML;
            }
            if (minutes.innerHTML < 10) {
                minutes.innerHTML = "0" + minutes.innerHTML;
            }
            if (hour.innerHTML < 10) {
                hour.innerHTML = "0" + hour.innerHTML;
            }

        }
        setInterval(time, 1000);


        function setAlarm() {
            alarmHour.value = alarmHour.value;
            alarmMinutes.value = alarmMinutes.value;
            display.innerHTML = ("Alarm is set to " + alarmHour.value + ": " + alarmMinutes.value);
            function alarmTime() {
            // console.log(hour.innerHTML === alarmHour.value && minutes.innerHTML === alarmMinutes.value);           
            if (hour.innerHTML === alarmHour.value && minutes.innerHTML === alarmMinutes.value) {
                display.innerHTML = ("Alarm Ringing...");
                audio.play();
                setTimeout(() => {
                    display.innerHTML = ("Alarm Off");
                    audio.pause();
                }, 60000);
            }
        }
        setInterval(alarmTime, 1000);
        }