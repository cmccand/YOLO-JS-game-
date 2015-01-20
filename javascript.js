alert('Welcome to YOLO!');
confirm('Do you want to play a game?');
var mySex= prompt('Are you male or female?');
if (mySex === 'male') {
  alert("I sensed some hesitation in your keystroke. You're in for a long game.")
  alert("Ok, let's begin. You're 21 years old. It's a Friday night in July, and you get to decide how to spend it. As in life, each decision you make will play out in a certain way, and at the end of the game you will learn your future. Choose wisely.\nYou Only Live Once.")
  var Q1 = prompt('So, after getting home from work, you had a drink to take the edge off and watched an episode of House of Cards. The sun is starting to go down, so you start thinking about what you want to do tonight. You can go one of three ways: you can A: go out with your friend Zach from college. Zach recently quit his job and starting working at a restaurant. He has been on a bit of a crazy streak and you suspect he is doing drugs, but nonetheless he is one of the most fun people you know. Option B: You go meet up with Jessica, this girl you met last week at a bar. She is pretty and a good dancer, from what you remember, but you really know nothing else about her. Option C: Stay in, order pizza and watch more House of Cards. Please type the letter A, B, or C once you decide.')
  if (Q1 === 'A') {
    var Crazy1 = prompt('Feeling a little wild, huh? OK, so you meet Zach and some of his friends downtown at a bar called Last Chance. As soon as you walk in, he turns around and hands you two shots of tequila. Double or nothing, he says. Do you A: Take the shots, or B: Decline?')
  }
    if (Crazy1 === 'A') {
      var shots = prompt('Phew. That burns. But damn you feel good all of a sudden. Zach introduces you to a pretty girl named Reese. You smell bourbon on her breath when she tells you her name, which you find surprisingly sexy. You and Reese talk for a good 10 minutes. The conversation is shallow, and a voice in your head says this girl is bad news, but you find her very physically attractive. She goes to the bathroom, and you feel a hand on your shoulder. You turn to see Zach with a big, knowing grin on his face. You tell him you have mixed feelings about Reese, and that you are tired anyway and do not plan to stay out too late.\n\n "Come here," he says, and pulls you away from the crowd. He looks around, then grabs your hand and puts a small baggie into it. "Tired no more," he says."We are going to get you laid." You look down and see what you guess to be cocaine. You look up in shock, but Zach is already walking back to the bar. Do you A: Try cocaine, or B: Just Say No?')
    }
    if (shots === 'A') {
      var drugs = confirm('What would your mother say? You go into the bathroom and somehow manage to get some of the white powder into your nose despite your violently shaking hands. You come out of the stall trying to look as normal as possible, but as soon as you walk out of the bathroom and the music and the drunken crowd hits you all at once, you feel a sudden rush of energy where you might have previously been overwhelmed. You end up doing the rest of it with Zach throughout the night, and by the end of the night you feel as obnoxiously talkative as Zach. Suddenly talking to girls is easy and you feel limitless. You see Jessica at some point, but she is intimidated by your behavior and writes you off as a player. You end up going home with Reese, telling yourself that she is actually quite interesting, just misunderstood.\n\nPress OK to see your future.')
      alert('You wake up on the same date 20 years later. You are completely naked on a beach. You prop yourself up on your elbows and look around you. It is cold. You see what looks like a police officer coming toward you in the distance. You frantically check around yourself for clothes, but all you see is a message written in the sand. It says "You have three days."')
      endGame;
    }

    if (Crazy1 === 'B') {
      var noShots = prompt('Good decision. Zach is unimpressed, but you retain your ability to reason, at least for a little longer. Zach introduces you to a pretty girl named Reese. You smell bourbon on her breath when she says her name, which turns you off. Further, the conversation with her sucks, so you take the first opportunity to go to the bar and get a drink. You look across the bar and catch a pretty brunette girl looking at you. After a moment you realize it is Jessica, so you go over and talk to her.\n\n After having some great conversation for about 20 minutes, the band starts playing a really good song. Jessica bobs from side to side, and you can tell she wants to dance. Do you A: ask her to dance, or B: Wait to gather a little more liquid courage?')
  }
      if (noShots === 'A') {
        confirm('Admit it - you heard that "I Hope You Dance" song in your head and you felt inspired. You make a fool of yourself on the dance floor and nearly drop her when you try to dip her, but she loves it. You both have a few more drinks and talk some more, Zach does his best to play wingman and cement your good impression on her, and you end up taking her back to her apartment, where she kisses you. Rather than push your luck, you decide to call it a night and head home, pleasantly surprised at how the night turned out.\n\nPress OK to find out your future.')
      prompt('You wake up on the same date 20 years later on a nice king size bed in a country home with sunlight pouring in through the windows. Your wife, Jessica, walks through the door with a tray full of breakfast for you. She looks beautiful, and you are completely happy.')
  }
    if (noShots === 'B') {
      confirm('You order another drink and continue sitting at the bar with Jessica, watching drunk people dance. You keep your commentary entertaining enough, but ultimately your calculated humor fails to make the impression on her that one embarassing dance would have. Her friend comes and meets her, she says goodbye to you, and your night ends there. Press OK to find out your future.')
      alert('You wake up on the same date 20 years later in a King-size memory foam bed in your nice, modern bachelor pad in New York City. You have a successful career in front-end web engineering and you are living the glamorous life you always imagined. However, something is missing. You threw so much of yourself into your career that you neglected your social and romantic life, and never overcame your most personal insecurities.')
    }

  else if (Q1 === 'B') {
    var planB = prompt('So you enjoy a little mystery. Good. You and Jessica decide to go to a movie. You narrow it down to two options, and she leaves the decision up to you. Do you go see A: a futuristic thriller starring Liam Neeson, or B: a romantic comedy featuring Zooey Deschanel?')
  }
      if (planB === 'A') {
        var Thriller = prompt('Good choice. You keep your manhood. However, you both are so engrossed in the badassery of Liam Neeson that you do not talk the whole time. Once the movie is over and you must face the indifference of the theater parking lot, you search for a more romantic idea. The mutual interest is there, so you decide to go to a wine bar.\n\n As it turns out, there is a band tonight, and after a couple glasses of wine you can tell she wants to dance. Do you A: Ask her to dance or B: Make fun of the people dancing until you no longer feel the need to prove yourself on the dance floor?')
      }
        if (Thriller === 'A') {
        confirm('Admit it - you heard that "I Hope You Dance" song in your head and you felt inspired. You make a fool of yourself on the dance floor and nearly drop her when you try to dip her, but she loves it. You go back to her house, where she kisses you on the porch. Rather than push your luck, you say goodbye and go home with a rosy feeling, already forward to seeing her again. Press OK to learn your future.')
        alert('You wake up on the same date 20 years later on a nice king size bed in a country home with sunlight pouring in through the windows. Your wife, Jessica, walks through the door with a tray full of breakfast for you. You are completely happy.')
      }
      else if (Thriller ==='B') {
        confirm('You order another drink and continue sitting at the bar with Jessica, poking fun at the older couple dancing. Your comments are funny, but Jessica, who finds the couple sweet and romantic, starts to think you are overcritical and trying to compensate for your own insecurities. She soon asks if you are ready to go, so you take her home and the night ends there. Press OK to find out your future.')
        alert('You wake up on the same date 20 years later in a King-size memory foam bed in your nice, modern bachelor pad in New York City. You have a successful career in front-end web engineering and you are living the glamorous life you always imagined. However, something is missing. You threw so much of yourself into your career that you neglected your social and romantic life, and never overcame your insecurities with females. Unless you count your dog, of course. Her name is Jessica.')
      }
    else if (planB === 'B') {
      var romCom = prompt('Wow, you must really be trying to impress her. Well, it works. To your surprise, you enjoy the movie, and the romantic ending leaves you both eager to find an equally engaging romance of your own. So, you take your party of two to a nearby wine bar, where you try to replicate the witty banter of the movie characters.\n\n As it turns out, there is a band tonight, and after a couple glasses of wine you can tell she wants to dance. Do you A: Ask her to dance, or B: Make fun of the people dancing until you no longer feel the need to prove yourself on the dance floor?')
    }

    if (romCom === 'A') {
      confirm('Admit it - you heard that "I Hope You Dance" song in your head and you felt inspired. You make a fool of yourself on the dance floor and nearly drop her when you try to dip her, but she loves it. You go back to her house, where she kisses you on the porch. Rather than push your luck, you say goodbye and go home with a rosy feeling, already forward to seeing her again. Press OK to learn your future.')
      alert('You wake up on the same date 20 years later on a nice king size bed in a country home with sunlight pouring in through the windows. Your wife, Jessica, walks through the door with a tray full of breakfast for you. You are completely happy.')
      endGame;
    }
    else if (romCom ==='B') {
      confirm('You order another drink and continue sitting at the bar with Jessica, poking fun at the older couple dancing. Your comments are funny, but Jessica, who finds the couple sweet and romantic, starts to think you are overcritical and trying to compensate for your own insecurities. She soon asks if you are ready to go, so you take her home and the night ends there. Game over. Press OK to find out your future.')
      alert('You wake up on the same date 20 years later in a King-size memory foam bed in your nice, modern bachelor pad in New York City. You have a successful career in front-end web engineering and you are living the glamorous life you always imagined. However, something is missing. You threw so much of yourself into your career that you neglected your social and romantic life, and never overcame your insecurities with females. Unless you count your dog, of course. Her name is Jessica.')
      endGame;
    }

  else if (Q1 === 'C') {
    prompt('Ah, so let me guess. You told yourself that no one you would meet tonight could possibly be as interesting as Frank Underwood. Very well...the night went exactly as you planned it - you watched TV and went to sleep. No surprises. Press OK to find out your future.')

  prompt('You wake up on the same date 20 years later in a King-size memory foam bed in your nice, modern bachelor pad in New York City. You have a successful career in front-end web engineering and you are living the glamorous life you always imagined. However, something is missing. You played it safe and focused on your career, but you never found time for romance and now you have no one to share your success with. Except your dog, that is. Her name is Jessica.')
  function endGame() {
  return;
}
  endGame;
}

else if (mySex === 'female') {
  var female = alert("I sensed some hesitation. You are in for a long game.");

prompt("Ok, let's begin. You are 21 years old. It is a Friday night in July, and you get to decide how to spend it. As in life, each decision you make will play out in a certain way, and at the end of the game you will learn your future. Choose wisely.\nYou Only Live Once.");

}
};
