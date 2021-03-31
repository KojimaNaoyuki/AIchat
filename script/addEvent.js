class AddEvent {
    constructor() {
        console.log('addEvent.js');
        this.DOM = {};
        this.DOM.backPageIcon = document.querySelector('#back-page');
        
        this._createEvent();
    }
    _createEvent() {
        this.DOM.backPageIcon.addEventListener('click', () => {
            window.location = 'index.html';
        })
    }
}