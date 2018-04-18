'use strict';

/**
 * @ngdoc service
 * @name electionsApp.language
 * @description
 * # language
 * Constant in the electionsApp.
 */
angular.module('electionsApp')
  .constant('language', {
    'english' : {
      'until' : 'until voting ends!',
      'homesubheading': 'Why vote?',
      'homeheading': 'To show your love<br> for Auckland!',
      'homelead' : 'Auckland. It\'s the place where we<br> live and the place we love (aroha).',
      'homescrolllead' : 'Not sure why you should vote (pōti) in the Auckland Local Elections?<br> Scroll down to find out.',
      
      'speechone' : 'I love my<br> morning walk',
      'speechtwo' : 'I love our<br> local park',
      'speechthree' : 'I love how close<br> the beaches are',
      'speechfour' : 'I love my<br> local cafe',
      'textone' : 'We all love (aroha) Auckland for different reasons. For some people, it’s our fantastic beaches. For others, it’s our vibrant night markets. Some love having more space to live, some love (aroha) being right in the heart of the city.',

      'speechfive' : 'WE LOVE THIS!',
      'speechsix' : 'WE LOVE THAT!',
      'speechseven' : 'WE LOVE BOTH!',

      'texttwo' : 'There are people who love (aroha) the same things as you. There are people who don’t. That’s why voting matters. You vote (pōti) for the kind of Auckland <strong>YOU</strong> love (aroha).',

      'textthree' : 'New Zealand holds local elections every three years. If you live in Auckland and you\'re enrolled, you can vote (pōti) in the 2016 Auckland Council (Te Kaunihera o Tāmaki Makaurau) elections. Your vote (pōti) helps elect people who can be your passionate, persuasive voice in decisions about Auckland.',
      'textfour' : 'If you don\'t vote (pōti), you can\'t influence who gets elected and makes decisions about the things that are important to you.<br><br>Who do <strong>You</strong> want to lead Auckland?',

      'speecheight' : 'The Mayor!',
      'speechnine' : 'What\'s my local board?',
      'speechten' : 'The councillors',
      'speecheleven' : 'What\'s my ward?',
      'speechtwelve' : 'Local boards',

      'scrollsticky' : 'Scroll down to continue',

      'figureone': 'mayor',
      'figuretwo': 'councillors',
      'figurethree': 'local board<br> members',

      'textfive' : 'You can vote (pōti) for the <abbr data-uk-tooltip title="The mayor sets the vision for Auckland, leads the development of plans, policies and budgets, and ensures the council engages effectively with all Aucklanders.">mayor (Te Koromatua)</abbr>, <abbr data-uk-tooltip title="Councillors are elected officials who represent their ward. They work with the mayor on big picture issues that affect Auckland.">councillors (Ngā kaikaunihera)</abbr> and <abbr data-uk-tooltip title="Local boards are a voice for their communities. They make big decisions about local facilities and support local initiatives and events.">local board (Ngā poari ā-rohe)</abbr> members. They all have different roles and together they shape Auckland.<br><br><span class="uk-link" data-uk-modal="{target:\'#my-id\', center: true}" tabindex="0">Watch our video</span> to find out more about the mayor (Te Koromatua), councillors (Ngā kaikaunihera) and local boards (Ngā poari ā-rohe).',      
      'closebtn' : 'Close',

      'textsix' : 'The <abbr data-uk-tooltip title="The mayor sets the vision for Auckland, leads the development of plans, policies and budgets, and ensures the council engages effectively with all Aucklanders.">mayor (Te Koromatua)</abbr> leads the council, and has a big say in council decisions. The mayor sets the vision for Auckland, and shares what makes our city great.<br><br>You vote (pōti) for <strong>ONE</strong> mayoral candidate.',
      'textseven' : 'You can also vote (pōti) for <abbr data-uk-tooltip title="Councillors are elected officials who represent their ward. They work with the mayor on big picture issues that affect Auckland.">councillors (Ngā kaikaunihera)</abbr> and <abbr data-uk-tooltip title="Local boards are a voice for their communities. They make big decisions about local facilities and support local initiatives and events.">local board (Ngā poari ā-rohe)</abbr> members who love (aroha) your part of Auckland just as much as you do. They are the people who stand up and champion the things you love (aroha).',

      'addressreset' : 'Reset',
      'addresslabel' : 'Address search',

      'addresserror' : 'Sorry, we were unable to find any properties that match that address.<br><br><strong class="uk-h3">Search tips</strong><br>Try one of these suggestions:<br><ol><li>Make sure all words are spelled correctly.</li><li>Do you live in a flat, unit, apartment or right of way?</li><li>Type your unit or apartment number before your property address.e.g. 2A/435 New North Road Kingsland</li><li><a href="http://www.aucklandcouncil.govt.nz/EN/ContactUs/Pages/Home.aspx" target="_blank">Contact us</a> if you\'re still having trouble.</li></ol>',
      
      'addressward' : 'Council ward',
      'addressboard' : 'Local board',
      'addresssubdivision' : 'Subdivision',

      'texteight' : 'They make decisions about big issues that affect everyone’s lives, things like; planning rules, transport and the environment.<br><br>You vote (pōti) for the councillors (Ngā kaikaunihera) you want to represent you and your community.',
      'textnine' : 'Local boards (Ngā poari ā-rohe) make big decisions that affect your area and fund the things you love (aroha), like community events and local parks. You get to vote (pōti) for the local board (Ngā poari ā-rohe) members you want to represent you and your community.',
      'textten' : 'Voting is important, and it’s easy. If you\'re registered you\'ll find your voting document in your mailbox. If you haven\'t registered, go here to <strong><a href="/howtovote#enrol">find out more.</a></strong> If you want to know more about how to vote (pōti), see our <strong><a href="/howtovote">\'How to vote\'</a></strong> section.',

      'howtovote' : 'How to vote',
      'enrolnav' : 'ENROL',
      'decidenav' : 'DECIDE',
      'votenav' : 'VOTE',
      'findoutwhere' : 'Find out where to post your vote (pōti).',

      'enrolcontent' : 'You need to be enrolled before you can vote (pōti) and it’s easy to do. See the key dates <span class="uk-link" du-smooth-scroll="keydates" tabindex="0">below</span>.<br><br>Visit <a href="http://elections.org.nz" target="_blank">elections.org.nz</a> to enrol, update or check your details.',
      'enrolbtn' : 'ENROL NOW',

      'decidecontent' : 'When you vote (pōti), you are choosing people to make decisions on your behalf. That’s why it\'s important to know what the candidates stand for and what they plan to do if they’re elected.<br><br>Learn more about who you’re voting for from Friday 16 September.',
      'decidebtn' : 'LEARN MORE',

      'votecontent' : 'You’ve enrolled, you’ve had a look and chosen which candidates you want to represent you...now it’s time to vote (pōti)!<br><br>Your voting document will be posted to you shortly (see key dates below).<br><br>All you have to do is complete and post it back, using the pre-paid orange envelope provided.<br><br>You can also hand deliver your voting document to one of our Auckland Council (Te Kaunihera o Tāmaki Makaurau) ballot boxes during the voting period.',

      'keydates' : 'KEY DATES',
      'keydatescontent' : '<ul><li>Voting period: 16 September – 8 October</li></ul><br><strong>If you are not on the Final Electoral Roll, you can still vote (pōti)</strong> if you enrol by <strong>4pm Friday 7 October</strong> and register for a special vote.<br><br>You can get your special vote (pōti) by going to your local Special Voting Centre on the map above or you can register to receive one in the mail. If you wish to receive a special vote in the mail, call the Electoral Office on 0800 922 822 or email your full name and residential address as they appear on the roll, and the address you want your voting document to be posted, to special.votes@electionservices.co.nz<br><br>Remember, for your Special Vote (pōti) to count, you will need to make sure you are enrolled by 4pm Friday 7 October.<br><br>For more information about special voting, go to <strong><a href="http://www.aucklandcouncil.govt.nz/EN/AboutCouncil/HowCouncilWorks/Elections/Pages/enroltovote.aspx" target="_blank">\'Enrol to vote\'</a></strong> or call the Electoral Office on 0800 922 822.<br><br><strong class="uk-h2 internal-heading">HOW TO VOTE</strong>Voting starts on <strong>Friday 16 September</strong> and closes at <strong>noon on Saturday 8 October.</strong><br><br>Post your voting paper by <strong>Wednesday 5 October</strong> to make sure it gets in on time.<br><br>If you miss this date, you can still vote (pōti) by taking your voting paper to one of our ballot boxes by <strong>noon on Saturday 8 October</strong>.<br><br>Check the map above to find the nearest post box, PostShop or ballot box.<br><br>Find out more about <strong><a href="http://www.elections.org.nz/" target="_blank">enrolling</a></strong> and <strong><a href="http://www.aucklandcouncil.govt.nz/EN/AboutCouncil/HowCouncilWorks/Elections/Pages/enroltovote.aspx" target="_blank">special votes (pōti)</a></strong> at the <strong><a href="http://www.elections.org.nz/" target="_blank">Electoral Commission website.</a></strong>'
    },

    'chinese' : {
      'until' : 'until voting ends!',
      'homesubheading': '为何要参加投票',
      'homeheading': '为了表达您对奥克兰的热爱!',
      'homelead' : '奥克兰，我们生活的地方，我们热爱的城市。',
      'homescrolllead' : '不确定您为何应该在奥克兰地方选举中投票？<br> 请向下滚动屏幕寻找答案。',
      
      'speechone' : '我喜欢早晨徒步进城',
      'speechtwo' : '我喜欢我们小区的公园',
      'speechthree' : '我喜欢离海滩这么近',
      'speechfour' : '我喜欢家附近的咖啡馆',
      'textone' : '我们都热爱奥克兰，原因则各不相同。有人喜欢西海岸那些荒僻的海滩；有人喜欢生机勃勃的夜市。有人喜欢宽敞的生活空间，有人喜欢生活在闹市的中心。',

      'speechfive' : '我们爱这个!',
      'speechsix' : '我们爱那个!',
      'speechseven' : '我们全都爱!',

      'texttwo' : '有人与您爱好相同，有人则相差甚远。正因为如此，您参加投票才如此重要。您是为了您心中的那个奥克兰而投票。',

      'textthree' : '新西兰每三年举行一次地方选举。如果您住在奥克兰，并且已经登记，您就可以在2016年奥克兰市议会选举中投票。您的投票将有助于选出热力四射、有说服力的人为您在奥克兰民生大事上发声。',
      'textfour' : '如果您不投票，那么在重大事情的决定上，您就无法影响那些决策者。',

      'speecheight' : '市长',
      'speechnine' : '我属于哪个地方政务会区？',
      'speechten' : '市议员',
      'speecheleven' : '我属于哪个选区？',
      'speechtwelve' : '地方政务会委员',

      'scrollsticky' : '请向下滚动屏幕继续阅读。',

      'figureone': '市长',
      'figuretwo': '市议员',
      'figurethree': '地方政务会委员',

      'textfive' : '您可以投票选举市长、市议员和地方政务会委员。他们的作用各不相同，在奥克兰都是举足轻重的角色。您还可以投票选举您所在地的地区卫生局委员。在某些地区，也可以投票选举酒牌托管委员会委员。<br><br><span class="uk-link" data-uk-modal="{target:\'#my-id\', center: true}" tabindex="0">观看视频</span>, 了解更多有关市长、市议员以及地方政务会的资讯。',      
      'closebtn' : 'Close',

      'textsix' : '市长是市议会的一把手，在市议会做各种决定时一言九鼎。他们为奥克兰制定发展前景与目标，并且把我们这座城市的亮点拿来与世界分享。您的选票只能投给一位市长候选人。',
      'textseven' : '您也可以投票选和您一样热爱您那片区域的奥克兰市议员和地方政务会委员。在您所热衷的事情上，他们是替您出头、帮您呐喊的人。',

      'addressreset' : 'Reset',
      'addresslabel' : 'Address search',

      'addresserror' : 'Sorry, we were unable to find any properties that match that address.<br><br><strong class="uk-h3">Search tips</strong><br>Try one of these suggestions:<br><ol><li>Make sure all words are spelled correctly.</li><li>Do you live in a flat, unit, apartment or right of way?</li><li>Type your unit or apartment number before your property address.e.g. 2A/435 New North Road Kingsland</li><li><a href="http://www.aucklandcouncil.govt.nz/EN/ContactUs/Pages/Home.aspx" target="_blank">Contact us</a> if you\'re still having trouble.</li></ol>',
      
      'addressward' : 'Council ward',
      'addressboard' : 'Local board',
      'addresssubdivision' : 'Subdivision',

      'texteight' : '奥克兰有20位市议员，代表了13个选区。他们负责对影响你我的各项民生大事作出决策，例如建筑法规、交通、道路和环境等。您投票就要投给那些最能在您所关心的事务上代表您的市议员。',
      'textnine' : '奥克兰有21个地方政务会，每个政务会有五到九名委员，分别代表各自所属的社区。地方政务会负责决定区内的大事，以及为社区活动及公园等大家关心的项目拨款。',
      'textten' : '投票很重要，也很容易。选票会邮寄到您的信箱。如果想要详细了解如何投票，<strong><a href="/howtovote?lang=chinese">请点击此处。</a></strong>',
      'howtovote' : '如何投票 ',
      'enrolnav' : '登记',
      'decidenav' : '决定',
      'votenav' : '投票',
      'findoutwhere' : '看看选票应该投递到哪里。',

      'enrolcontent' : '您需要登记之后才能够投票。登记很容易。<br><br>登录 <a href="http://elections.org.nz" target="_blank">elections.org.nz</a>作登记、更新或检查您的资料。',
      'enrolbtn' : '即刻登记',

      'decidecontent' : '当您投票时，您是在选择代表您做决定的人。因此，您务必了解候选人所代表的立场，以及当选后他们计划做什么事。 <br><br>从9月16日星期五起,您可以进一步了解您的投票对象。',
      'decidebtn' : '进一步了解您的投票对象',

      'votecontent' : '您已经登记，您已了解并决定了您希望选哪些候选人代表您......现在就该投票了!您的选票会邮寄给您。（见下面的重要日期）您只需要填写好选票，使用提供给您的邮资已付的橙色信封寄回选票即可。您也可以选择在投票期间亲自将选票投进投票箱。',

      'keydates' : '重要日期',
      'keydatescontent' : '- 最后的登记日期：8月12日 <br/>- 投票日期：9月16日 - 10月8日<br/>您可以在8月12日（星期五）当天以及此日期之前做选民登记投普通票。如果您错过了这个日期，您可以在10月7日（星期五）之前的任何一天登记申请特别投票。<br/>如果选民名册上已有你的名字，您会在 9月16日（星期五） 和 9月21日（星期三）之间收到正式选票。您有三个星期的时间来表达您对奥克兰的热爱。<br/>投票从 9月16日（星期五）开始，10月8日（星期六）中午结束。<br/>投票期结束之前三天，即10月5日（星期三）停止邮递选票 。如果您错过了这个日期，不用担心，您仍然可以投票。您只要在10月8日（星期六）中午之前把选票投进任何一处奥克兰市议会选票箱里即可。<br><br>进一步了解 <strong><a href="http://www.aucklandcouncil.govt.nz/EN/AboutCouncil/HowCouncilWorks/Elections/Pages/enroltovote.aspx" target="_blank">登记和特别投票事宜</a>, 请登陆选举委员会的网址。</strong>'
    },

    'samoan' : {      
      'until' : 'until voting ends!',
      'homesubheading': 'Aisea e Palota ai?',
      'homeheading': 'E faaalia ai lou alofa mo Aukilani ',
      'homelead' : 'Aukilani. O le nofoaga o loo tatou nonofo ai ma o le nofoaga e pele ia i tatou.',
      'homescrolllead' : 'E te lē o mautinoa pe aisea e tatau ai fua ona e palota i Faigapalota Faalotoifale a Aukilani? <br/>Faasolosolo i lalo e te silafia ai.',
      
      'speechone' : 'Ou te fiafia i a\'u savaliga i taeao',
      'speechtwo' : 'Ou te fiafia i le matou paka',
      'speechthree' : 'Ou te fiafia ona e latalata mai matafaga',
      'speechfour' : 'Ou te fiafia i le matou falekofe lea e iai',
      'textone' : 'E eseese uma mafuaaga e pele ai ia tatou Aukilani. Mo nisi tagata, o ona matafaga matagofie. Mo isi, o a tatou maketi mananaia o loo fai i po. O nisi e fiafia e maua nisi fanua tetele e nonofo ai, o nisi foi e fia nonofo tonu i le lotolotoi o le taulaga.',

      'speechfive' : 'Matou te fiafia i le mea lenei!',
      'speechsix' : 'Matou te fiafia i le mea lena!',
      'speechseven' : 'Matou te fiafia i mea uma na!',

      'texttwo' : 'E iai tagata e tutusa mea tou te fiafia i ai. E iai foi tagata e lē tutusa mea tou te fiafia i ai. O le mafuaaga lena e tāua ai le fai o le palota. E te palota mo le ituaiga o Aukilani E TE fiafia ai.',

      'textthree' : 'Afai o loo e alaala i Aukilani ma ua uma ona e lesitala, e mafai ona e palota i faigapalota a le Pulega a Aukilani 2016. O lau palota e fesoasoani ina ia filifilia ai tagata e mafai ona avea ma ou leo e naunau alofa ma faatauanau i faiga filifiliga mo Aukilani. Afai e te lē palota, e lē mafai la ona oo atu sou leo ia i latou o loo faia filifiliga i mea e tāua ia te oe.',
      'textfour' : 'O ai E te manao e avea ma taitai o Aukilani?',

      'speecheight' : 'Pulenuu!',
      'speechnine' : 'O ai lo\'u itumalo?  ',
      'speechten' : 'Faufautua ',
      'speecheleven' : 'O fea lo\'u itumalo? ',
      'speechtwelve' : 'Sui o Komiti Faafoe o Pulega Faapitonuu ',

      'scrollsticky' : 'Faasolosolo i lalo e faaauau lau faitau. ',

      'figureone': 'Pulenuu',
      'figuretwo': 'Faufautua',
      'figurethree': 'Sui o Komiti Faafoe o Pulega Faapitonuu',

      'textfive' : 'E mafai ona e palota mo le pulenuu, faufautua o le pulega, komiti faafoe o pulega faapitonuu. E eseese uma lava a latou matafaioi, ae a tuufaatasi ua mafai ai ona faatulaga lelei Aukilani. E mafai foi ona e palota mo le komiti faafoe mo le soifua maloloina a lou itumalo ae, i nisi vaipanoa, o se faalapotopotoga e pasiaina laisene (licensing trust).<br><br><span class="uk-link" data-uk-modal="{target:\'#my-id\', center: true}" tabindex="0">Matamata i la matou vitiō </span> e te silafia atili ai nisi mea e faatatau i le pulenuu, faufautua o le pulega ma komiti faafoe o pulega faapitonuu.',      
      'closebtn' : 'Close',

      'textsix' : 'O le pulenuu e taitaia le pulega, ma e telē lona leo i faiga filifiliga a le pulega. O le pulenuu na te faatulagaina le visiona poo se silasila mamao mo Aukilani, ona faailoa lea i le lalolagi o mea ua avea ai lo tatou aai ma aai e sili ona matagofie. <br/>E te palota mo se sui tauva e <strong>TOATASI</strong> mo le tofi pulenuu.',
      
      'textseven' : 'E mafai foi ona e palota mo faufautua o le pulega ma sui o le komiti faafoe o pulega faapitonuu, o ē e tutusa mea tou te fiafia ai ia Aukilani. O tagata na o le a tutulai mai ma finau ina ia faataunuu mea o loo e naunau i ai.<br/><br/>Tuu i lalo lou tuatusi e iloa ai poo fea le pitonuu o le pulega o loo e iai ma le vaipanoa o loo vaaia e le komiti faafoe o pulega faapitonuu.',

      'addressreset' : 'Reset',
      'addresslabel' : 'Address search',

      'addresserror' : 'Sorry, we were unable to find any properties that match that address.<br><br><strong class="uk-h3">Search tips</strong><br>Try one of these suggestions:<br><ol><li>Make sure all words are spelled correctly.</li><li>Do you live in a flat, unit, apartment or right of way?</li><li>Type your unit or apartment number before your property address.e.g. 2A/435 New North Road Kingsland</li><li><a href="http://www.aucklandcouncil.govt.nz/EN/ContactUs/Pages/Home.aspx" target="_blank">Contact us</a> if you\'re still having trouble.</li></ol>',
      
      'addressward' : 'Council ward',
      'addressboard' : 'Local board',
      'addresssubdivision' : 'Subdivision',

      'texteight' : 'E to\'a 20 sui faufautua o le pulega a Aukilani, o i latou nei o loo fai ma sui o itumalo e 13. O latou e faia filifiliga i mataupu tetele o loo aafia ai soifua o tagata taitoatasi: mea e pei o tulafono tau fausaga, o auala o femalagaa\'iga, o auala tetele ma le siosiomaga.<br/><br/>E te palota mo sui faufautua e te manatu o le a sili ona lelei lo latou momoliina atu i le pulega o mea o loo e naunau i ai.',
      'textnine' : 'E to\'a 21 komiti faafoe o pulega faapitonuu a Aukilani, ma e tofu komiti taitasi ma ona sui auai e toalima i le toaiva o loo fai ma sui o o latou pitonuu. O komiti faafoe o pulega faapitonuu e faia filifiliga tetele i mea e aafia ai lou pitonuu, ma faatupe mea o loo tou naunau i ai, e pei o meafai a le pitonuu ma paka a le tou pitonuu.E te palota mo sui o le tou komiti faafoe o pulega faapitonuu, e te manatu o le a sili ona lelei lo latou momoliina atu o mea o loo e naunau i ai.<br/><br/>O pitonuu tetele mo pulega a komiti faafoe o pulega faapitonuu ua vaevaeina i vaega laiti. E te palota i totonu o le tou vaega laititi mo nisi e fai ma sui i le komiti faafoe aoao o pulega faapitonuu.',
      'textten' : 'E tāua le faia o le palota, ma e faigofie.  Afai ua uma ona e lesitala, o le a e maua i lau pusameli pepa e fai ai lau palota. Afai e te lei lesitala ma o loo e fia silafia atili nisi faamatalaga, <strong><a href="/howtovote#enrol">ALU IINEI</a>.</strong> Afai e te fia silafia atili nisi faamatalaga e faatatau i le auala e fai ai le palota, <strong><a href="/howtovote">ALU IINEI</a>.</strong>',
      'howtovote' : 'Faapefea ona Palota ',
      'enrolnav' : 'Lesitala',
      'decidenav' : 'Filifili ',
      'votenav' : 'Palota',
      'findoutwhere' : 'Find out where to post your vote.',

      'enrolcontent' : 'E manaomia ona e lesitala muamua a o lei mafai ona e palota, ma e faigofie lava ona fai. Asiasi i le elections.org.nz e te leistala ai, e toe faafou pe toe siaki ai ou faamaumauga.<br><br>Visit <a href="http://elections.org.nz" target="_blank">elections.org.nz</a> to enrol, update or check your details.',
      'enrolbtn' : 'LESITALA NEI LOA',

      'decidecontent' : 'Pe a fai lau palota, ua e filifilia ai tagata e fai ma ou sui i faiga filifiliga. O le pogai lena e tāua ai le iloa poo ā mataupu o loo lagolagoina e sui tauva, ae poo ā foi mea o loo latou fuafua e fai pe a filifilia i latou.<br><br>Aoao atili e uiga o loo e palota mo mai i le Aso Faraile 16 o Setema.',
      'decidebtn' : 'AOAO ATILI',

      'votecontent' : 'Ua e lesitala, ua e silasila foi ma filifilia sui tauva e te manao e fai ma ou sui … ua oo nei i le taimi e te palota ai! O le a lafo atu i le pusameli pepa e fai ai lau palota. (Tagai i aso autu o loo ta\'ua i lalo). Pau le mea e te faia o le faatumu o le pepa e fai ai lau palota ona lafo mai lea, e faaaogā ai le teutusi lanu moli lea e avatu ai, ma ua uma ona totogi le faailoga e toe lafo mai ai. E mafai foi ona e filifili e momoli mai lava e oe lau pepa palota ma tuu i totonu o se tasi o a matou pusa palota i le taimi e fai ai le palota. ',

      'keydates' : 'Aso tāua ',
      'keydatescontent' : '- Aso mulimuli e lesitala ai o le 12 Aokuso <br/> - Aso o le palota 16 Setema - 8 Oketopa<br/>E mafai ona e lesitala () i le Lola o le Palota i soo se aso e oo atu lava i le aso 12 Aokuso mo se pepa masani e fai ai palota. Afai e te misia lenei aso, e mafai ona e lesitala () ma apalai mo se palota faapitoa e fai i soo se aso e oo atu lava i le aso 7 Oketopa. Afai ua iai lou suafa i le Lola Palota, o le a lafo atu i lau pusa meli au pepa palota aloaia i le va o le Aso Faraile 16 Setema ma le Aso Lulu aso 21 Setema. E tolu vaiaso ua tuu atu e faaali ai lou naunau alofa mo Aukilani. E amata le faiga o palota i le Aso Faraile, aso 16 Setema ae tapuni i le aoauli o le Aso Toonai aso 8 Oketopa. Lafo mai lau palota ia lē silia le Aso Lulu, aso 5 Oketopa. Afai e te misia lenei aso, aua e te popole: e mafai lava ona e palota e ala i le tuu o lau pepa palota i totonu o soo se pusa palota a le tatou Pulega o Aukilani, seia oo i le aoauli o le Aso Toonai aso 8 o Oketopa.<br><br>Saili atili nisi faamataga e uiga i le  <strong><a href="http://www.aucklandcouncil.govt.nz/EN/AboutCouncil/HowCouncilWorks/Elections/Pages/enroltovote.aspx" target="_blank">lesitalaina o suafa ma palota faapitoa.</a></strong>'
    }
  });
