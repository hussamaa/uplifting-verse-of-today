(function() {
	
    /* source: https://get.tithe.ly/blog/encouraging-bible-verses */
    var verses = [
              [ "Jeremiah 29:11", "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future."],
              [ "Psalm 119:114-115", "You are my hiding place and my shield; I hope in your word. Depart from me, you evildoers, that I may keep the commandments of my God." ], 
              [ "Matthew 6:34", "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble." ], 
              [ "1 Chronicles 29:12", "Both riches and honor come from you, and you rule over all. In your hand are power and might, and in your hand it is to make great and to give strength to all." ], 
              [ "Romans 8:28", "And we know that for those who love God all things work together for good, for those who are called according to his purpose." ], 
              [ "Psalm 23:4", "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me." ], 
              [ "Psalm 8:2", "Out of the mouth of babies and infants, you have established strength because of your foes, to still the enemy and the avenger." ], 
              [ "Psalm 31:24", "Be strong, and let your heart take courage, all you who wait for the LORD!" ], 
              [ "Zephaniah 3:17", "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing." ], 
              [ "2 Timothy 1:7", "For God gave us a spirit not of fear but of power and love and self-control." ], 
              [ "2 Corinthians 12:9", "But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me." ], 
              [ "Philippians 4:19", "And my God will supply every need of yours according to his riches in glory in Christ Jesus." ], 
              [ "Psalm 120:1", "In my distress I called to the LORD, and he answered me." ], 
              [ "Ephesians 6:10", "Finally, be strong in the Lord and in the strength of his might." ], 
              [ "James 1:2-4", "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing." ], 
              [ "Nehemiah 8:10", "Then he said to them, ‘Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the LORD is your strength.’" ], 
              [ "Romans 15:13", "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope." ], 
              [ "1 Peter 2:11", "Beloved, I urge you as sojourners and exiles to abstain from the passions of the flesh, which wage war against your soul." ], 
              [ "Psalm 62:6", "He only is my rock and my salvation, my fortress; I shall not be shaken." ], 
              [ "Psalm 16:8", "I have set the LORD always before me; because he is at my right hand, I shall not be shaken." ], 
              [ "Exodus 15:2", "The LORD is my strength and my song, and he has become my salvation; this is my God, and I will praise him, my father’s God, and I will exalt him." ], 
              [ "Psalm 118:14-16", "The LORD is my strength and my song; he has become my salvation. Glad songs of salvation are in the tents of the righteous: ‘The right hand of the LORD does valiantly, the right hand of the LORD exalts, the right hand of the LORD does valiantly!’" ], 
              [ "Isaiah 26:3", "You keep him in perfect peace whose mind is stayed on you, because he trusts in you." ], 
              [ "Matthew 19:26", "But Jesus looked at them and said, ‘With man this is impossible, but with God all things are possible.’" ], 
              [ "Acts 1:8", "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." ], 
              [ "Isaiah 43:2", "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you." ], 
              [ "Psalm 55:22", "Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved." ], 
              [ "2 Corinthians 4:16", "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day." ], 
              [ "Proverbs 17:17", "A friend loves at all times, and a brother is born for adversity." ], 
              [ "1 Peter 2:9", "But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light." ], 
              [ "Psalm 18:1-2", "I love you, O LORD, my strength.The LORD is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold." ], 
              [ "Psalm 34:8", "Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!" ], 
              [ "John 15:13", "Greater love has no one than this, that someone lay down his life for his friends." ], 
              [ "1 Peter 5:7", "Casting all your anxieties on him, because he cares for you." ], 
              [ "Isaiah 12:2", "Behold, God is my salvation; I will trust, and will not be afraid; for the LORD GOD is my strength and my song, and he has become my salvation." ], 
              [ "Philippians 4:13", "I can do all things through him who strengthens me." ], 
              [ "Romans 8:38-39", "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." ], 
              [ "1 Thessalonians 5:11", "Therefore encourage one another and build one another up, just as you are doing." ], 
              [ "Psalm 119:28", "My soul melts away for sorrow; strengthen me according to your word!" ], 
              [ "Mark 12:30", "And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength." ], 
              [ "Psalm 27:4", "One thing have I asked of the LORD, that will I seek after: that I may dwell in the house of the LORD all the days of my life, to gaze upon the beauty of the LORD and to inquire in his temple." ], 
              [ "Matthew 11:28", "Come to me, all who labor and are heavy laden, and I will give you rest." ], 
              [ "Psalm 46:1", "God is our refuge and strength, a very present help in trouble." ],
              [ "Proverbs 3:5-6", "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths." ], 
              [ "Deuteronomy 31:6", "Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you." ], 
              [ "Nahum 1:7", "The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him." ], 
              [ "1 Peter 2:10", "Once you were not a people, but now you are God’s people; once you had not received mercy, but now you have received mercy." ], 
              [ "Proverbs 18:10", "The name of the LORD is a strong tower; the righteous man runs into it and is safe." ],
              [ "2 Corinthians 12:10", "That is why, for Christ’s sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong." ],
              [ "Isaiah 41:10", "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand." ], 
              [ "Psalm 71:16", "With the mighty deeds of the Lord GOD I will come; I will remind them of your righteousness, yours alone." ], 
              [ "Ephesians 3:16", "That according to the riches of his glory he may grant you to be strengthened with power through his Spirit in your inner being." ], 
              [ "1 Corinthians 16:13", "Be watchful, stand firm in the faith, act like men, be strong." ], 
              [ "1 John 3:22", "And whatever we ask we receive from him, because we keep his commandments and do what pleases him." ], 
              [ "Psalm 37:39", "The salvation of the righteous is from the LORD; he is their stronghold in the time of trouble." ], 
              [ "Psalm 119:50", "This is my comfort in my affliction, that your promise gives me life." ], 
              [ "John 16:33", "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world." ], 
              [ "Isaiah 40:31", "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint." ], 
              [ "Psalm 138:3", "On the day I called, you answered me; my strength of soul you increased." ], 
              [ "1 Corinthians 15:58", "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain." ], 
              [ "Romans 8:31", "What then shall we say to these things? If God is for us, who can be against us?" ], 
              [ "Joshua 1:7", "Only be strong and very courageous, being careful to do according to all the law that Moses my servant commanded you. Do not turn from it to the right hand or to the left, that you may have good success wherever you go." ], 
              [ "Psalm 46:2-3", "Therefore we will not fear though the earth gives way, though the mountains be moved into the heart of the sea, though its waters roar and foam, though the mountains tremble at its swelling." ], 
              [ "Mark 10:27", "Jesus looked at them and said, ‘With man it is impossible, but not with God. For all things are possible with God.’" ], 
              [ "2 Corinthians 1:3-4", "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God." ], 
              [ "Psalm 27:1", "The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?" ], 
              [ "1 John 3:2", "Dear friends, now we are children of God, and what we will be has not yet been made known. But we know that when Christ appears, we shall be like him, for we shall see him as he is." ], 
              [ "Lamentations 3:22-23", "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." ], 
              [ "Habakkuk 3:19", "GOD, the Lord, is my strength; he makes my feet like the deer’s; he makes me tread on my high places. To the choirmaster: with stringed instruments." ], 
              [ "Psalm 46:7", "The LORD of hosts is with us; the God of Jacob is our fortress." ], 
              [ "1 Corinthians 13:12", "For now we see in a mirror dimly, but then face to face. Now I know in part; then I shall know fully, even as I have been fully known." ]];
	
    var versesArrayLength = verses.length;
	
    /**
     * Binds Back Key Events.
     * @private
     */
    function bindBackKeyEvents() {
        document.addEventListener('tizenhwkey', function keyEventHandler(ev) {
            if (ev.keyName === "back") {
                	try {
                    tizen.power.release("SCREEN");
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
            }
        });
    }
    
    /**
     * Bind of the onPause event.
     */
    function onPause() {
    	tizen.power.release("SCREEN");
    }

    /**
     * Bind of the onResume event.
     */
    function onResume() {
        tizen.power.request("SCREEN", "SCREEN_NORMAL");
    }
	
    /**
     * Binds Default Events.
     * @private
     */
    function bindDefaultEvents() {
        bindBackKeyEvents();
    	document.addEventListener('pause', onPause);
    	document.addEventListener('resume', onResume);
    }
        
    /**
     * Function that returns the day of the year for a specific date.
     * @private
     */
    function getDayOfTheYearForToday(currentDate) {
    	return Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    }
    
    /**
     * Check if it is a Christmas day.
     * @private
     */
    function isChristmas(currentDate){
    	return (currentDate.getDate() === 25) && ((currentDate.getMonth()+1) === 12);
    }
        
    /**
     * Get verse of today.
     * @private
     */
    function getVerseOfToday(){
    	var verseOfToday;
    	var currentDate = new Date();
    	if (isChristmas(currentDate)){
    		verseOfToday = [ "Isaiah 9:6", "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." ];
    	} else { 
    		var dayOfTheYear = getDayOfTheYearForToday(currentDate);
    		var index = dayOfTheYear % (versesArrayLength - 1);
    		verseOfToday = verses[index];   
    	}
    	return verseOfToday;
    }

    /**
     * Writes the verse into the HTML.
     * @private
     */
    function writeVerseAndReferenceIntoHTML(verse){
    	document.querySelector("#verse").textContent = verse[1];
    	document.querySelector("#reference").textContent = verse[0];
    }
    
    /**
     * Initiates the application.
     * @private
     */
    function init() {
        tizen.power.request("SCREEN", "SCREEN_NORMAL");
        bindDefaultEvents();
        var verseOfToday = getVerseOfToday();
        writeVerseAndReferenceIntoHTML(verseOfToday);
    }

    window.onload = init;
}());