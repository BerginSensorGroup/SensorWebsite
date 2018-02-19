'use strict';
const fs = require('fs')
const _ = require('lodash')
const fastcsv = require('fast-csv')
var csvWriter = require('csv-write-stream')
var writer = csvWriter()

function create(device_id, data, done) {

    var csv = convertArrayOfObjectsToCSV({
        data:data
    })
    var filename = 'public/downloads/'+ device_id + '.csv'
    fs.writeFile(filename, csv, 'utf8', function (err) {
        if (err) 
        {
          console.log('Some error occured - file either not saved or corrupted file saved.');
          done(err, filename);
        } 
        else{
          console.log('Data Stored in CSV');
          done(null, filename)
        }
    });
}

function convertArrayOfObjectsToCSV(args) {  
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

module.exports = {
    create: create,
};