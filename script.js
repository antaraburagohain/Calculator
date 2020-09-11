function getOutput() {
    return document.getElementById("output_value").innerText;
}

function printOutput(num) {
    document.getElementById("output_value").innerText = num;
}


var x = document.getElementsByClassName("operator");
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function() {
        if (this.id == "clear") {
            printOutput("");
        } else if (this.id == "backspace") {
            var output = getOutput().toString();
            output = output.substr(0, output.length - 1);
            printOutput(output);
        } else if (this.id == "n!") {
            var currOutput = getOutput();
            var fac = currOutput + "!";
            printOutput(fac);
        } else if (this.id == "exp") {
            var currOutput = getOutput();
            var expo = currOutput + "^";
            printOutput(expo);
        } else if (this.id == "CP") {
            var flag = 0;
            var currOutput = getOutput();
            if (currOutput) {
                if (currOutput == 1) {
                    printOutput("Not Prime");
                } else if (currOutput == 2) {
                    printOutput("Prime");
                } else {
                    for (var i = 2; i < currOutput; i++) {
                        if (currOutput % i == 0) {
                            flag = 1;
                        }

                    }

                    if (flag == 1) {
                        printOutput("Not Prime");
                    } else {
                        printOutput("Prime");
                    }

                }
            } else {
                printOutput(" ");
            }
        } else if (this.id == "sqrt") {
            var currOutput = getOutput();
            var sq = "(" + currOutput + "^(1/2))";
            printOutput(sq);
        } else if (this.id == "=") {
            var currOutput = getOutput();



            if (currOutput.includes("^(1/2))")) {
                var x3 = currOutput.indexOf('(');
                var y3 = currOutput.indexOf('^');
                var ans = (currOutput.substr(x3 + 1, y3 - 1));
                var ans1 = Math.sqrt(ans);
                printOutput(ans1);
            } else if (currOutput.includes("!")) {
                var f = 1;
                for (var j = 1; j <= Number(currOutput.substr(0, currOutput.length - 1)); j++) {
                    f = f * j;
                }
                printOutput(f);
            } else if (currOutput.includes("^")) {
                var z1 = currOutput.indexOf('^');
                var x1 = Number(currOutput.substr(0, z1));
                var y1 = Number(currOutput.substr(z1 + 1, currOutput.length));
                var product = 1;
                for (var i = 1; i <= y1; i++) {
                    product = product * x1;
                }
                printOutput(product);


            } else {
                var evaluate = eval(currOutput);
                printOutput(evaluate);

            }
        } else {
            var currOutput = getOutput();
            currOutput = currOutput + this.id;
            printOutput(currOutput);
        }


    });
}

var y = document.getElementsByClassName("number");
for (var i = 0; i < y.length; i++) {
    y[i].addEventListener('click', function() {
        var currOutput = getOutput();
        if (currOutput == "") {
            printOutput(this.id)
        } else {
            printOutput(currOutput + this.id);
        }

    })
}