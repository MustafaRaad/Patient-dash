$(function () { // document ready

  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'agendaWeek,agendaDay'
    },
    defaultView: 'agendaWeek',
    defaultTimedEventDuration: '01:00',
    allDaySlot: false,
    scrollTime: '08:00',
    businessHours: {
      start: '12:00',
      end: '22:00',
    },
    lang: /^en-/.test(navigator.language) ? 'en' : 'en-US',
    eventOverlap: function (stillEvent, movingEvent) {
      return true;
    },
    events: [{
      title: 'Date1',
      start: '2021-07-28T15:00',
      end: '2021-07-28T17:00'

    }, {
      title: 'Date2',
      start: '2021-07-30T12:00'
    }],
    editable: false,
    selectable: true,
    selectHelper: true,
    select: function (start, end) {
      var duration = (end - start) / 1000;
      if (duration == 1800) {
        // set default duration to 1 hr.
        end = start.add(30, 'mins');
        return calendar.fullCalendar('select', start, end);
      }
      var title = prompt('Event Title:');
      var eventData;
      if (title && title.trim()) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        calendar.fullCalendar('renderEvent', eventData);
      }
      calendar.fullCalendar('unselect');
      console.log(eventData);
    },
    eventRender: function (event, element) {
      var start = moment(event.start).fromNow();
      element.attr('title', start);
    },
    loading: function () {

    }

  });

});