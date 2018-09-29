Ext.define('App.view.order.OrderList', {
    extend: 'Ext.grid.Panel',
    xtype: 'view.order.list',
    title: 'Orders',

    requires: [
        'App.store.Orders'
    ],

    store: {
        type: 'orders'
    },


    columns: [
        { text: 'Number', dataIndex: 'number' },
        { text: 'Date', dataIndex: 'date' },
        { text: 'Sum', dataIndex: 'sum' },
        { text: 'Client', dataIndex: 'client' },
        { text: 'Phone', dataIndex: 'phone' }
    ]
});