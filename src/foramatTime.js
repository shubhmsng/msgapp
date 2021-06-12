import moment from 'moment';

function getFormatedUpdateTime(time) {
    let time_paased = moment().diff(time, 'years');
    
    if(time_paased > 0) {
        time_paased = time_paased > 1 ? time_paased + " years ago" : time_paased + " year ago";
    }

    if(!time_paased) {
        time_paased = moment().diff(time, 'months');
        if(time_paased > 0) {
            time_paased = time_paased > 1 ? time_paased + " months ago" : time_paased + " month ago";
        }
    }
    if(!time_paased) {
        time_paased = moment().diff(time, 'weeks');
        if(time_paased > 0) {
            time_paased = time_paased > 1 ? time_paased + " weeks ago" : time_paased + " week ago";
        }
    }

    if(!time_paased) {
        time_paased = moment().diff(time, 'days');
        if(time_paased > 0) {
            time_paased = time_paased > 1 ? time_paased + " days ago" : time_paased + " day ago";
        }
    }

    if(!time_paased) {
        time_paased = moment().diff(time, 'hours');
        if(time_paased > 0) {
            time_paased = time_paased > 1 ? time_paased + " hours ago" : time_paased + " hour ago";
        }
    }

    if(!time_paased) {
        time_paased = moment().diff(time, 'minutes');
        if(time_paased > 0) {
            time_paased = time_paased > 1 ? time_paased + " minutes ago" : time_paased + " minute ago";
        }
    }

    if(!time_paased) {
        time_paased = moment().diff(time, 'seconds');
        if(time_paased > 0) {
            time_paased = time_paased > 1 ? time_paased + " seconds ago" : time_paased + " seconds ago";
        }
    }
    return time_paased;
}

export default getFormatedUpdateTime;