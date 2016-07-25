System.register(['./app.component', '@angular/platform-browser-dynamic'], function(exports_1) {
    var app_component_1, platform_browser_dynamic_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
