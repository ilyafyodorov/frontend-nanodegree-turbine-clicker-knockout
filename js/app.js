var initialTurbines = [
        {
            clickCount : 0,
            name : 'Turbine 1',
            imgSrc : 'http://i.kinja-img.com/gawker-media/image/upload/xga2es0kjiiwsroruscn.jpg',
            imgAttribution : 'Google',
            synonyms : [
                { syn: "TG132"},
                { syn: "XB188"},
                { syn: "99-567s"}
            ]             
        },
        {
            clickCount : 0,
            name : 'Turbine 2',
            imgSrc : 'https://upload.wikimedia.org/wikipedia/commons/7/79/Dampfturbine_Montage01.jpg',
            imgAttribution : 'Google',
            synonyms : [
                { syn: "TG132"},
                { syn: "XB188"},
                { syn: "99-567s"}
            ]             
        },
        {
            clickCount : 0,
            name : 'Turbine 3',
            imgSrc : 'http://www.energy.siemens.com/hq/pool/hq/power-generation/gas-turbines/sgt-750/SIM00010_458.jpg',
            imgAttribution : 'Google',
            synonyms : [
                { syn: "TG132"},
                { syn: "XB188"},
                { syn: "99-567s"}
            ]             
        },
        {
            clickCount : 0,
            name : 'Turbine 4',
            imgSrc : 'https://powergen.gepower.com/content/dam/gepower-pgdp/global/en_US/images/service/upgrades/E-class%20gas%20turbine.jpg',
            imgAttribution : 'Google',
            synonyms : [
                { syn: "TG132"},
                { syn: "XB188"},
                { syn: "99-567s"}
            ]             
        },
        {
            clickCount : 0,
            name : 'Turbine 5',
            imgSrc : 'http://4.bp.blogspot.com/-v2QePS45WZk/VYV1d7b0LMI/AAAAAAAAAAk/N8kBt5tYdN8/s1600/gas-turbine-gt24-gt26-ev-burner.jpg',
            imgAttribution : 'Google',
            synonyms : [
                { syn: "TG132"},
                { syn: "XB188"},
                { syn: "99-567s"}
            ]             
        }
    ];

var Turbine = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.level = ko.computed(function() {
        var levelRet;
            if(this.clickCount()==0) {
               levelRet = 'New';
            };
            if((this.clickCount()>0)&&(this.clickCount()<5)) {
               levelRet = 'Baseload';
            };
            if(this.clickCount()>=5) {
               levelRet = 'Mature';
            };             
        return 'Level: '+levelRet;
    }, this);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.synonyms = ko.observableArray(data.synonyms);
};

var ViewModel = function() {
    
    var that = this;    
    
    this.turbineList = ko.observableArray([]);
    
    initialTurbines.forEach(function(turbItem){
        that.turbineList.push(new Turbine(turbItem))
    });
    
    this.currentTurbine = ko.observable(this.turbineList()[0]);

    this.switchTurbine = function(turbineListItem) {
        that.currentTurbine(turbineListItem);        
    };
    

    
    this.incrementCounter = function() {
        that.currentTurbine().clickCount(that.currentTurbine().clickCount()+1);
    };
}

ko.applyBindings(new ViewModel());