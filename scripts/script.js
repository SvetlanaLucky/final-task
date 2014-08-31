/**
 * Created with JetBrains PhpStorm.
 * User: Slight
 */


function AppViewModel() {
    var self = this;
    self.slides = ['Graphics', 'Calculator', 'Competitors'];
    self.chosenSlideId = ko.observable();
    self.goToSlide = function(slide) {
        self.chosenSlideId(slide);
        console.log(self.chosenSlideId());
    };
}

ko.applyBindings(new AppViewModel());
