var {Given, When, Then} = require("cucumber");
var rp = require('request-promise');
var assert = require('assert');

Given('the service is up', function() {
    // Attempt to hit the /status.json URL
    // TODO: put this into a retry loop
    return rp({
        url: 'http://web:8080/status.json',
        json: true
    }).then(function(doc) {
        assert.equal(doc.status,'up')
    })
});

When('a user gets {string}', function(url) {
    var world = this;
    return rp({
        url: 'http://web:8080' + url
    }).then(function(doc) {
        world.setDoc(doc);
    })
});

Then('they should see {string}', function(string) {
    assert.equal(this.getDoc().trim(), string)
});
