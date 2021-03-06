/**
 * Schedule cell dimension sample
 */
this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        selectedDate: new Date(2018, 1, 15),
        cssClass: 'schedule-cell-dimension',
        showTimeIndicator: false,
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        },
        created: function () {
            scheduleObj.adjustEventWrapper();
        },
        actionComplete: function (args) {
            if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
                scheduleObj.adjustEventWrapper();
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
};