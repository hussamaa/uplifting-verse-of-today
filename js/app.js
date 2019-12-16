(function() {
	
	var verses = [[ "Jeremiah 29:11", "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future."]];
	
	/**
     * Binds Back Key Events.
     * @private
     */
    function bindBackKeyEvents() {
        document.addEventListener('tizenhwkey', function keyEventHandler(ev) {
            var page = document.getElementsByClassName("active")[0],
                pageId = page ? page.id : "";

            if (ev.keyName === "back") {
                if (pageId === "page-main") {
                    try {
                        tizen.application.getCurrentApplication().exit();
                    } catch (ignore) {}
                } else {
                    document.querySelector("#page-main").classList.toggle("active");
                    page.classList.toggle("active");
                }
            }
        });
    }
	
    /**
     * Binds Default Events.
     * @private
     */
    function bindDefaultEvents() {
        bindBackKeyEvents();
    }
    
    /**
     * Posts verse of the day as a notification.
     * @private
     */
    function postVerseOfTheDayNotification(verseOfToday) {
        var notification, notificationParameters;
        try {
            notificationParameters = {
                content: verseOfToday[1],
            };
            notification = new tizen.UserNotification("SIMPLE", verseOfToday[0], notificationParameters);
            tizen.notification.post(notification);
        } catch (err) {
            console.log(err.name + ": " + err.message);
        }
    }
    
    function getVerseOfToday(){
    	/* TODO - apply some logic here */
    	return verses[0];
    }
    
    /**
     * Initiates the application.
     * @private
     */
    function init() {
        bindDefaultEvents();
        var verseOfToday = getVerseOfToday();
    	document.querySelector("#verse").textContent = verseOfToday[1];
    	document.querySelector("#reference").textContent = verseOfToday[0];
    	postVerseOfTheDayNotification(verseOfToday);
    }

    window.onload = init;
}());