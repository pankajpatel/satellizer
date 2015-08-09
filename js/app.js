var app = angular.module('satellizerTest', ['satellizer'])
	.config(function($authProvider) {

    $authProvider.facebook({
      clientId: '154966507867089'
    });

    $authProvider.google({
      clientId: '931356046680-oe9mtud463pi57h1f21a8ullp5blao7p.apps.googleusercontent.com'
    });

    $authProvider.github({
      clientId: '2636313e233762bc80f8'
    });

    // $authProvider.linkedin({
    // 	clientId: '77cw786yignpzj'
    // });
    // LinkedIn
		$authProvider.linkedin({
      clientId: 'ifko47b5j8i5',
		  url: '/satellizer/authLinkedIn.php',
		  authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
		  redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
		  requiredUrlParams: ['state', 'scope', 'redirectUri'],
		  scope: ['r_emailaddress'],
		  scopeDelimiter: ' ',
		  state: 'STATE',
		  type: '2.0',
		  popupOptions: { width: 527, height: 582 }
		});

    // $authProvider.yahoo({
    //   clientId: 'dj0yJmk9dkNGM0RTOHpOM0ZsJmQ9WVdrOVlVTm9hVk0wTkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wMA--'
    // });

    // $authProvider.live({
    //   clientId: '000000004C12E68D'
    // });

    // $authProvider.twitter({
    //   url: '/auth/twitter'
    // });

    // $authProvider.oauth2({
    //   name: 'foursquare',
    //   url: '/auth/foursquare',
    //   redirectUri: window.location.origin,
    //   clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
    //   authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    // });

  });


	app
		.controller( 'LoginController', ['$scope', '$auth', function ($scope, $auth) {
			// body...
			console.log('Login Controller')
			$scope.authenticate = function(provider) {
	      $auth
	      	.authenticate(provider)
		      .then(function(data) {
	          console.log( data );
	        })
	        .catch(function(response) {
	          console.log( response );
	          
	        });
		    };

		}] )
		.controller( 'HomeController', ['$scope', function ($scope) {
			// body...
			console.log('Home Controller')
		}] )
