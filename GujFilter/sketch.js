var txtFile, csvContent1 = "data:text/csv;charset=utf-8,", wordCount, csvContent2 = "data:text/csv;charset=utf-8,";
  
function fileSelected(file) {
  // print(file);
  txtFile = file.data;
  // print(txtFile);
  txtFile = splitTokens(txtFile, " \r\n,!?.'‘’\"()[]{}*");
  
  wordCount = getCounts(txtFile);
  print(wordCount[0][0]);
  
  createCSV();
}

function getCounts(arr) {
  var counts = {};

  for(var i = 0; i< arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  
  var array = [];
  
  for (var key in counts) {
    if (counts.hasOwnProperty(key)) {
    array.push([key, counts[key]]);
    }
  }
  
  return array;
}

function createCSV() {
  print("hehe");
  // txtFile = txtFile.join("\n");
  // print (txtFile);
  // csvContent += txtFile;
  // print(txtFile);
  txtFile = txtFile.join("\n");
  csvContent1 += txtFile;
  
  wordCount = wordCount.join("\n");
  csvContent2 += wordCount;
}

function downloadCSV() {
  var encodedUri = encodeURI(csvContent1);
  window.open(encodedUri);
  print("Done saving");
}

function downloadWords() {
  var encodedUri = encodeURI(csvContent2);
  window.open(encodedUri);
  print("Done saving");
}

function setup() {
  noCanvas();
  
  createFileInput(fileSelected);
  var csvExport = createButton('Export to CSV');
  csvExport.mousePressed(downloadCSV);
  var csvwordCount = createButton('Download word count file');
  csvwordCount.mousePressed(downloadWords);
  
  createP("Made with p5.js");
  
}

