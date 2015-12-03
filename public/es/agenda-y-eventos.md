### Eventos

- Puedes ver los eventos de A la clé en nuestra página de FaceBook : **[<i class="fa fa-fw fa-facebook-official"></i> Eventos](https://www.facebook.com/alaclezaragoza/events)**

<hr class="space" />

### Agenda
<ul id="calendar-legend">
    <li><span class="gcal-class-adult">&nbsp;</span> Horario Clases Adultos / Niños</li>
    <li><span class="gcal-class-child">&nbsp;</span> Horario Clases Niños</li>
    <li><span class="gcal-workshop-adult">&nbsp;</span> Horario Talleres Adultos</li>
    <li><span class="gcal-workshop-child">&nbsp;</span> Horario Talleres Niños</li>
    <li><span class="gcal-holidays">&nbsp;</span> Día Festivo</li>
</ul>

<hr class="space" />

<div id="calendar"></div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.3.2/fullcalendar.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.3.2/gcal.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.3.2/lang/es.js"></script>


<script>


(function($) {


	render_cal();
	// setTimeout(function(){ render_cal(); }, 3000);


})(jQuery);


function render_cal() {

	$('#calendar').fullCalendar({

		height: 1400,

		header: {
			left: 'title',
			center: 'agendaWeek month',
			right: 'today prev,next'
		},
        googleCalendarApiKey: 'AIzaSyDF8V8CdeKH-OGtr6mM2oUJNydLx-jjQO8',
        eventSources: [
            {
	            googleCalendarId: 'es.spain#holiday@group.v.calendar.google.com',
	            className: 'gcal-holidays'
            }
            ,{
                googleCalendarId: 'eie5a6blhgs0cbckjikuibov5k@group.calendar.google.com',
                className: 'gcal-class-adult' // Horario Clases Adultos/Niños
            }
            ,{
                googleCalendarId: 'p41k1prsiailednd05ff4jdp70@group.calendar.google.com',
                className: 'gcal-class-child' // Horario Clases Niños
            }
            ,{
                googleCalendarId: 'pf9e7uh1ke6pstodeobauast4o@group.calendar.google.com',
                className: 'gcal-workshop-adult' // Horarios talleres adultos
            }
            ,{
                googleCalendarId: 'fa8vnsq1v8t45lvf2l39dffl2o@group.calendar.google.com',
                className: 'gcal-workshop-child' // Horario talleres niños
            }
        ]
    });
}

</script>
