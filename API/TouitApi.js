    const URL = "touiteur.cefim-formation.org";

    //receive message
    function httpGetMessages(timestamp, callback) {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://' + URL + '/list?ts=' + encodeURIComponent(timestamp), true);
        request.addEventListener('readystatechange', function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.send();
    }

    //receive trend
    function httpGetTrends(callback) {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://' + URL + '/trending', true);
        request.addEventListener('readystatechange', function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.send();
    }

    //send message
    function httpSendMessage(author, message, callback) {
        const request = new XMLHttpRequest();
        request.open('POST', 'http://' + URL + '/send', true);
        request.addEventListener('readystatechange', function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send('name=' + encodeURIComponent(author) + '&message=' + encodeURIComponent(message));
    }

    export { httpGetMessages, httpSendMessage, httpGetTrends };