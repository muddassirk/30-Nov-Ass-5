function abc() {
    var rowOnew = prompt("Enter A Number");
    var output = '';
    for (var i = 1; i <= rowOnew; i++) {
        for (var j = 1; j <= i; j++) {
            output = output+j + '  ';
        }
        document.write(output);
        output = '';
        document.write('<br/>');
    }
    
}



