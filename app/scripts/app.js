'use strict';

/**
 * @ngdoc overview
 * @name electionsApp
 * @description
 * # electionsApp
 *
 * Main module of the application.
 */
angular
  .module('electionsApp', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'duScroll',
    'angular-inview',
    'ngTextTruncate'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        title: 'Vote Auckland Local Elections 2016',
        description: 'Voting starts 16-Sep for Auckland’s 2016 Local Elections. Your vote supports your view and provides your voice in decisions about Auckland.',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/howtovote', {
        title: 'How to vote Auckland Local Elections 2016',
        description: 'If you are enrolled to vote, your voting papers will be posted 16th – 21st Sep 2016. Send completed voting forms back in pre-paid envelope provided or at a ballot box.',
        templateUrl: 'views/howtovote.html',
        controller: 'HowtoCtrl',
        controllerAs: 'howtovote',
        reloadOnSearch: false // used for the language change
      })
      .when('/candidatesearch', {
        title: 'Who to vote for Auckland Local Elections 2016',
        description: 'Find out about candidates in your area. Vote for Auckland Council Mayor, councillors, local board members, District Health Boards and Licencing Trusts.',
        templateUrl: 'views/candidatesearch.html',
        controller: 'CandidatesearchCtrl',
        controllerAs: 'candidateSearch'
      })
      // .when('/candidates/:ward/:board/', {
      //   title: 'Who to vote for Auckland Local Elections 2016',
      //   description: 'Find out about candidates in your area. Vote for Auckland Council Mayor, councillors, local board members, District Health Boards and Licencing Trusts.',
      //   templateUrl: 'views/candidatesearch.html',
      //   controller: 'CandidatesearchCtrl',
      //   controllerAs: 'candidateSearch'
      // })
      // .when('/candidate/:role/:id', {
      //   title: 'Who to vote for Auckland Local Elections 2016',
      //   description: 'Find out about candidates in your area. Vote for Auckland Council Mayor, councillors, local board members, District Health Boards and Licencing Trusts.',
      //   templateUrl: 'views/candidatesearch.html',
      //   controller: 'CandidatesearchCtrl',
      //   controllerAs: 'candidateSearch'
      // })
      .when('/candidates/:ward/:board/', {
        title: 'Who to vote for Auckland Local Elections 2016',
        description: 'Find out about candidates in your area. Vote for Auckland Council Mayor, councillors, local board members, District Health Boards and Licencing Trusts.',
        templateUrl: 'views/candidates.html',
        controller: 'CandidatesCtrl',
        controllerAs: 'candidates',
        reloadOnSearch: false
      })
      .when('/candidate/:role/:id', {
        title: 'Who to vote for Auckland Local Elections 2016',
        description: 'Find out about candidates in your area. Vote for Auckland Council Mayor, councillors, local board members, District Health Boards and Licencing Trusts.',
        templateUrl: 'views/candidate.html',
        controller: 'CandidateCtrl',
        controllerAs: 'candidate'
      })
      .when('/social', {
        title: 'Social updates Auckland Local Elections 2016',
        description: 'Get updates on Auckland Council local elections and follow the adventures on the Love Bus. Voting starts: 16-Sep-16 closes: noon 08-Oct-16.',
        templateUrl: 'views/social.html',
        controller: 'SocialCtrl',
        controllerAs: 'social'
      })
      .when('/dhblicense', {
        title: 'District Health Board and Licensing Trust',
        templateUrl: 'views/dhblicense.html',
        controller: 'DhblicenseCtrl',
        controllerAs: 'dhblicense'
      })
      .when('/terms', {
        title: 'Terms & conditions',
        templateUrl: 'views/terms.html'
      })
      .otherwise({
        title: '404',
        templateUrl: 'views/error.html'
      });
  })
  .run(function ($rootScope, $location, $route, language, favouritesService, $window) {
    // update page title
    $rootScope.page = {
        setTitle: function(title) {
            this.title = title + ' | Auckland Council';
        },
        setDesc: function(description) {
            this.description = description;
        }
    };

    $rootScope.$on('$routeChangeSuccess', function(event, current) {
        $rootScope.page.setTitle(current.$$route.title || 'Show your love');
        $window.document.getElementsByName('description')[0].content = current.$$route.description;
        $window.document.getElementsByName('ogdescription')[0].content = current.$$route.description;
    });

    // change language
    $rootScope.currentLang = 'english';
    $rootScope.currentLangClass = 'english';
    $rootScope.currentLangContent = language.english;

    $rootScope.changeLang = function(lang){
      $rootScope.langOpen = false;
      switch (lang) {
          case 'english':
            $rootScope.currentLang = 'english';
            $rootScope.currentLangContent = language.english;
            $rootScope.currentLangClass = 'english';
            $location.search('lang', 'english');
              break;
          case 'tereo':
            $rootScope.currentLang = 'te reo';
            $rootScope.currentLangContent = language.maori;
            $rootScope.currentLangClass = 'maori';
            $location.search('lang', 'tereo');
              break;
          case 'chinese':
            $rootScope.currentLang = '中文';
            $rootScope.currentLangContent = language.chinese;
            $rootScope.currentLangClass = 'chinese';
            $location.search('lang', 'chinese');
              break;
          case 'samoan':
            $rootScope.currentLang = 'GAGNA SĀMOA';
            $rootScope.currentLangContent = language.samoan;
            $rootScope.currentLangClass = 'samoan';
            $location.search('lang', 'samoan');
              break;
          default: // if no language has been set, default to english and remove query string
            $rootScope.currentLang = 'english';
            $rootScope.currentLangContent = language.english;
            $rootScope.currentLangClass = 'english';
            $location.search('lang', null);
      }
    };

    $rootScope.$on('$locationChangeStart', function() {
      if(angular.isDefined($location.search().lang)){
        var lang = $location.search().lang;
        $rootScope.changeLang(lang);
      } else {
        $rootScope.changeLang();
      }
    });

    // current page
    $rootScope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
    };

    // favourites
    var results = favouritesService.get('results'),
        isFav = favouritesService.get('favourites') !== null && favouritesService.get('favourites').length > 0,
        favourites = isFav ? favouritesService.get('favourites').length : 0,
        favouriteQueryString = 'favourites&mayor&ward&board';

    $rootScope.favouritesCount = favourites; // update global counter

    // determine link to favourite page
    // if user has favourites, get address details and add to favourites link
    var hasAddress = results.address !== '' && results.address !== undefined ? 'address=' + results.address + '&' : '';
    $rootScope.favouriteLink = isFav && Object.keys(results).length > 0 ? 'candidates/' + results.ward + '/' + results.board + '?' +  hasAddress + favouriteQueryString : 'candidatesearch';

    // favourites update event
    $rootScope.$on('favsUpdated', function(event, favs){ // watch for changes
      $rootScope.favouritesCount = favs === 0 ? 0 : favs.length;
    });

    // address update event
    $rootScope.$on('resultUpdated', function(event, data){ // watch for changes
      var hasData = data !== '' && data !== undefined;
      var updatedAddress = '';
      if(hasData){
        updatedAddress = data.address !== '' && data.address !== undefined ? 'address=' + data.address + '&' : '';
      }      
      $rootScope.favouriteLink = hasData && data.ward !== undefined ? 'candidates/' + data.ward + '/' + data.board + '?' +  updatedAddress + favouriteQueryString : 'candidatesearch';
    });
  });
          