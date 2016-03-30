var fs = require('fs');
var lineByLine = require('n-readlines');

var STRING_TO_FIND = "";  // UPDATE THIS

var onError = function(err) {
	console.log(err);
};

fs.readdir("./Logs", function(err, filenames) {
    
	if (err) {
      onError(err);
      return;
    }
	
    filenames.forEach(function(filename) {
      
	  var liner = new lineByLine("./Logs/" + filename);
	  
	  var line;
	  var lineNumber = 0;
	  while (line = liner.next()) {
			
			line = line.toString('ascii');
			
			if (line.indexOf(STRING_TO_FIND) >= 0) {
				
				var timeDate = line.substring(0, line.indexOf('\t'));
				var seconds = line.substring(line.indexOf('duration') + 9, line.indexOf(' seconds', line.indexOf('duration') + 7));
				
				console.log( timeDate + '\t' + seconds);
			}
			
			lineNumber++;
	  }
    });
});