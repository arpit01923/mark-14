var input1 = document.querySelector("#i6");
var input2 = document.querySelector("#i7");
var input3 = document.querySelector("#i8");
var btn = document.querySelector("#i4");
var output = document.querySelector("#i5");

function check() {
    var cp = parseInt(input1.value);
    console.log("CP "+cp);
    var q = parseInt(input2.value);
    console.log("Q "+q);
    var sp = parseInt(input3.value);
    console.log("SP "+sp);
    if ((cp <= 0) || (q <= 0) || (sp <= 0)) {
        output.innerText ="Error in input";
    }
    else {
        if ((cp > 0) && (q > 0) && (sp > 0)) {
            if (cp > sp) {
                var loss = (cp - sp) * q;
                console.log("Loss "+loss);
                var lossper = (loss / cp) * 100;
                console.log("Loss Percentage "+lossper);
                output.innerText = "The loss is "+loss+" and percentage is "+lossper+"%";
            }
            else {
                if (cp < sp) {
                    var profit = (sp - cp) * q;
                    console.log("Profit "+profit);
                    var profitper = (profit / cp) * 100;
                    console.log("Profit Percent "+profitper)
                    output.innerText = "Hey the profit is "+profit+" and percentage is "+profitper+"%";
                }
                else {
                    output.innerText = "No Pain No Gain";
                }
            }
        }
    }
}

    btn.addEventListener("click", check);