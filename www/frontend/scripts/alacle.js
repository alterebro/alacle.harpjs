var menu_open = false;
var menu_trigger, mobile_menu;

function init() {
    menu_trigger = document.querySelector('#main-navigation-trigger');
    mobile_menu = getComputedStyle(menu_trigger).getPropertyValue("display") === 'block';
    if ( mobile_menu ) {
        console.log('mobile glory');
        if ( menu_open == false ) {
            document.querySelector('#main-navigation').style.display = 'none';
        }
    } else {
        document.querySelector('#main-navigation').style.display = 'block';
    }
}
init();

document.querySelector('#main-navigation-trigger').onclick = function(e) {
    e.preventDefault();
    if ( menu_open === false) {
        document.querySelector('#main-navigation').style.display = 'block';
        document.querySelector('#main-navigation-trigger').innerHTML = '<a href="#main-navigation"><i class="fa fa-times"></i> Close Menu</a>';
        menu_open = true;
    } else {
        document.querySelector('#main-navigation').style.display = 'none';
        document.querySelector('#main-navigation-trigger').innerHTML = '<a href="#main-navigation"><i class="fa fa-bars"></i> Menu</a>';
        menu_open = false;
    }
    console.log('click');
}

window.onresize = function() {
    init();
}

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
