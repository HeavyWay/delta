            function myDis(a, b, c) {
                let discriminant = b * b - 4 * a * c;
                return discriminant;
            }
            document.getElementById('button').onclick = function() {
                let list1 = Number(document.getElementById('area1').value.replace(/\s/g, ""));
                let list2 = Number(document.getElementById('area2').value.replace(/\s/g, ""));
                let list3 = Number(document.getElementById('area3').value.replace(/\s/g, ""));

                let inputDis = document.getElementById('inputDis');
                let dis = Number(myDis(list1, list2, list3));
              	inputDis.value = dis;
              	if (list1 == '' || list2 == '' || list3 == '') {
                  	inputDis.value = 'Brak wartości';
                } else if (!(Number.isFinite(dis))) {
                	inputDis.value = 'Brak wartości';
                }

                function myXs(ax, bx, d) {
                    let x1 = (-bx + Math.sqrt(d)) / (2 * ax);
                    return x1;
                }

                function myXs2(ax2, bx2, d2) {
                    let x2 = (-bx2 - Math.sqrt(d2)) / (2 * ax2);
                    return x2;
                }
              	onclick='switchBg();'

                var bgar = '';
                function switchBg(){
                    document.body.style.background = bgar;
                }

                if (dis < 0) {
                    inputX1.value = 'Brak pierwiastka';
                    inputX2.value = 'Brak pierwiastka';
                } else if (list1 == '' || list2 == '' || list3 == '') {
                  	inputX1.value = 'Nie określono';
                    inputX2.value = 'Nie określono';
                } else if (!(Number.isFinite(dis))) {
                	inputX1.value = 'Nie określono';
                    inputX2.value = 'Nie określono';
                } else {
                    let inputX1 = document.getElementById('inputX1');
                    let xq1 = myXs(list1, list2, dis);
                    inputX1.value = Math.floor(xq1 * 1000) / 1000;

                    let inputX2 = document.getElementById('inputX2');
                    let xq2 = myXs2(list1, list2, dis);
                    inputX2.value = Math.floor(xq2 * 1000) / 1000;

                  	if (xq1 == xq2) {
                      inputX1.value = Math.floor(xq1 * 1000) / 1000;
                      inputX2.value = ' ';
                	}
                }

                let input1 = document.getElementById('input1');
                let i1 = list2;
                input1.value = i1;
              	if (!(Number.isFinite(dis))) {
                	input1.value = '....';
                }

                let input2 = document.getElementById('input2');
                let i2 = list1;
                input2.value = i2;
              	if (!(Number.isFinite(dis))) {
                	input2.value = '....';
                }

                let input3 = document.getElementById('input3');
                let i3 = list3;
                input3.value = i3;
              	if (!(Number.isFinite(dis))) {
                	input3.value = '....';
                }

                let input4 = document.getElementById('input4');
                let i4 = list2;
                input4.value = i4;
              	if (!(Number.isFinite(dis))) {
                	input4.value = '....';
                }

                let input5 = document.getElementById('input5');
                let i5 = dis;
                input5.value = i5;
              	if (!(Number.isFinite(dis))) {
                	input5.value = '....';
                }

                let input6 = document.getElementById('input6');
                let i6 = list1;
                input6.value = i6;
              	if (!(Number.isFinite(dis))) {
                	input6.value = '....';
                }

                let input7 = document.getElementById('input7');
                let i7 = list2;
                input7.value = i7;
              	if (!(Number.isFinite(dis))) {
                	input7.value = '....';
                }

                let input8 = document.getElementById('input8');
                let i8 = dis;
                input8.value = i8;
              	if (!(Number.isFinite(dis))) {
                	input8.value = '....';
                }

                let input9 = document.getElementById('input9');
                let i9 = list1;
                input9.value = i9;
              	if (!(Number.isFinite(dis))) {
                	input9.value = '....';
                }

                if (dis < 0) {
                    inputw.value = 'Brak pierwiastka';
                } else if (list1 == '' || list2 == '' || list3 == '') {
                  	inputw.value = 'nieokresl.';
                } else if (!(Number.isFinite(dis))) {
                	inputw.value = 'nieokresl.';
                } else {
                    let inputw = document.getElementById('inputw');
                    let iw = myXs(list1, list2, dis);
                    inputw.value = Math.floor(iw * 1000) / 1000;
                }

                if (dis < 0) {
                    inpute.value = 'Brak pierwiastka';
                } else if (list1 == '' || list2 == '' || list3 == '') {
                  	inpute.value = 'nieokresl.';
                } else if (!(Number.isFinite(dis))) {
                	inpute.value = 'nieokresl.';
                } else {
                    let inpute = document.getElementById('inpute');
                    let ie = myXs2(list1, list2, dis);
                    inpute.value = Math.floor(ie * 1000) / 1000;
                }

              	let input123 = document.getElementById('input123');
              	let i123 = 'OK, działa poprawnie';
                input123.style.color = 'green';
              	input123.value = i123;
              	if (list1 == '' || list2 == '' || list3 == '') {
                	input123.value = 'Nieprawidłowo wpisana wartość współczynnika ';
                  	input123.style.color = 'red';
                } else if (!(Number.isFinite(dis))) {
                	input123.value = 'Zostały użyte niedopuszczające symbole';
                  	input123.style.color = 'red';
                }
                if (dis < 0) {
                    inputOt.value = 'Brak pierwiastka';
                  	inputOt2.value = 'Brak pierwiastka';
                } else if (list1 == '' || list2 == '' || list3 == '') {
                  	inputOt.value = 'nieokresl.';
                  	inputOt2.value = 'nieokresl.';
                } else if (!(Number.isFinite(dis))) {
                	inputOt.value = 'nieokresl.';
                  	inputOt2.value = 'nieokresl.';
                } else {
                    let inputOt = document.getElementById('inputOt');
                    let iot = myXs(list1, list2, dis);
                    inputOt.value = Math.floor(iot * 1000) / 1000;

                  	let inputOt2 = document.getElementById('inputOt2');
                    let iot2 = myXs2(list1, list2, dis);
                    inputOt2.value = Math.floor(iot2 * 1000) / 1000;

                 	if ((Math.floor(iot * 1000) / 1000) == (Math.floor(iot2 * 1000) / 1000)) {
                      inputOt2.value = ' ';
                	}
                }

                let inputq = document.getElementById('inputq');
                let iq = dis;
                inputq.value = iq;
              	if (list1 == '' || list2 == '' || list3 == '') {
                  	inputq.value = 'Nie ma wartości';
                } else if (!(Number.isFinite(dis))) {
                	inputq.value = 'Nie ma wartości';
                }
            }