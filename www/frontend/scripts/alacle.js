var menu_open = false;
var menu_trigger, mobile_menu;

function init() {
    menu_trigger = document.querySelector('#main-navigation-trigger');
    mobile_menu = getComputedStyle(menu_trigger).getPropertyValue("display") === 'block';
    nav = document.querySelector('#main-navigation');

    if ( mobile_menu ) {
        console.log('mobile glory');
        if ( menu_open == false ) {

            if ( nav.classList) {
                 nav.classList.remove('open');
            } else {
                 nav.className = nav.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }

        }
    } else {}

    // get active menu item
    var _links = document.querySelectorAll('#main-navigation li a');
    for (var i=0; i<_links.length; i++) {
        if ( _links[i]['href'] == document.location.href ) {

            if ( _links[i].classList ) {
                _links[i].classList.add('active');
            } else {
                _links[i].className += ' ' + 'active';
            }

        }
    }

}
init();

document.querySelector('#main-navigation-trigger').onclick = function(e) {
    var nav = document.querySelector('#main-navigation');
    e.preventDefault();
    if ( menu_open === false) {

        if ( nav.classList ) {
            nav.classList.add('open');
        } else {
            nav.className += ' ' + 'open';
        }

        document.querySelector('#main-navigation-trigger').innerHTML = '<a href="#main-navigation"><i class="fa fa-fw fa-times"></i> Menu</a>';
        menu_open = true;
    } else {

        if ( nav.classList) {
             nav.classList.remove('open');
        } else {
             nav.className = nav.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

        document.querySelector('#main-navigation-trigger').innerHTML = '<a href="#main-navigation"><i class="fa fa-fw fa-bars"></i> Menu</a>';
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
