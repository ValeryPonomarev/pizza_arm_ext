Ext.define('App.view.mainView.MainView', {
    extend: 'Ext.tab.Panel',
    alias: 'view.main_view',
    xtype: 'main.view',
    title: 'Title',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'App.view.order.OrderList'
    ],

    items: [
        {
            title: "My orders"
            ,
            items: [{
                xtype: 'view.order.list'
            }]
        }, {
            title: "Tab 2"
        }, {
            title: "Tab 3"
        }
    ]
});