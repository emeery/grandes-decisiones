import moment from 'moment';
const momento = require.requireActual('moment');
// marca temporal

export default (timestamp = 0) => {
    return moment(timestamp);
};

