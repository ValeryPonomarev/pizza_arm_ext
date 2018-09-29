Ext.define('App.model.Order', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'number', type: 'string'},
            {name: 'date', type: 'date'},
            {name: 'sum', type: 'float'},
            {name: 'client', type: 'string'},
            {name: 'phone', type: 'date'}
        ]
    }
});
