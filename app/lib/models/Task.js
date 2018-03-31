import uuid from 'uuid';
import moment from 'moment';

import Timer from '../Timer';

class Task {
    constructor(name) {
        this._id = uuid.v1();
        this._name = name;
        this._startingDate = moment();
        this._progress = new Timer();
    }

    getId() { return this._id; }
    getName() { return this._name; }
    getStartingDate() { return this._startingDate; }
    getProgress() { return this._progress; }

    setName(name) { this._name = name; }
    setProgress(progress) {
        if (!progress) 
            throw new Error('Invalid progress format');
        this._progress = new Timer(progress);
    }
    clearProgress() { this._progress = new Timer(); }
}

export default Task;