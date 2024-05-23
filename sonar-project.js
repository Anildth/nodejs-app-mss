const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  //serverUrl: 'https://sonarqube-notifcation-hub-devops.apps.cluster-xs46k.xs46k.sandbox961.opentlc.com/account/security/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsapp',
	    //'sonar.login': 'sqa_001ff1de5749d807047ab424508545333b1a077c',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
