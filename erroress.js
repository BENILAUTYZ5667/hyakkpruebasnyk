function xssLevel1() {
            var input = document.getElementById('q1').value;
            document.getElementById('result1').innerHTML = input;
        }

        function xssLevel2() {
            var input = document.getElementById('q2').value;
            document.write(input);
        }

        function xssLevel3() {
            var input = document.getElementById('q3').value;
            location.href = 'javascript:' + input;
        }

        function xssLevel4() {
            var input = document.getElementById('q4').value;
            eval(input);
        }

        function xssLevel5() {
            var input = document.getElementById('q5').value;
            setTimeout(input, 1000);
        }

        function xssLevel6() {
            var input = document.getElementById('q6').value;
            setInterval(input, 1000);
        }

        function xssLevel7() {
            var input = document.getElementById('q7').value;
            var func = new Function(input);
            func();
        }

        function xssLevel8() {
            var input = document.getElementById('q8').value;
            // Basic sanitization
            input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            document.getElementById('result8').innerHTML = input;
        }
