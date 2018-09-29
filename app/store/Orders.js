Ext.define('App.store.Orders', {
    extend: 'Ext.data.Store',
    alias: 'store.orders',

    requires: [
        'App.model.Order'
    ],

    model: 'App.model.Order',
    //
    // fields: [
    //     'number', 'date', 'sum', 'client', 'phone'
    // ],

    data: [
        { number: '#1', date: new Date("2018-01-01"), sum: 100.1, client: 'client 1', phone: "555-111-1111" },
        { number: '#2', date: new Date("2018-01-02"), sum: 100.2, client: 'client 2', phone: "555-111-1111" },
        { number: '#3', date: new Date("2018-01-03"), sum: 100.3, client: 'client 3', phone: "555-111-1111" },
        { number: '#4', date: new Date("2018-01-04"), sum: 100.4, client: 'client 4', phone: "555-111-1111" },
        { number: '#5', date: new Date("2018-01-05"), sum: 100.5, client: 'client 5', phone: "555-111-1111" }
    ]
});