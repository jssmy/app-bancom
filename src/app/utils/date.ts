
import * as moment from 'moment';

export class DateUtil {
    public static getCurrent() {
        return moment();
    }
    

    public static toMoment(time) {
        return moment(time)
    }
}