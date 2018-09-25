/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',

    name: 'App',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        
        Ext.create('App.view.mainView.MainView', {
            renderTo: Ext.getBody()
        });

        // Ext.create('App.view.mainView.MainView', {
        //     renderTo: Ext.getBody()
        // });

        // Ext.create('Ext.panel.Panel', {
        //     title: 'Hello',
        //     width: 200,
        //     html: '<p>World!</p>',
        //     renderTo: Ext.getBody()
        // });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
