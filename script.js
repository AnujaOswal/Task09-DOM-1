function addRow()
            {
                // get input values
                let fname = document.getElementById("fname").value; //0
                 let lname = document.getElementById("lname").value; //1
                let addr = document.getElementById("addr").value;   //2
                let pincode = document.getElementById("pincode").value; //3
                let gender = document.getElementById("sex").value; //4
                let food = document.getElementsByClassName("food");  //5
                let state = document.getElementById("state").value;  //6
                let country = document.getElementById("country").value; //7
              
               let htmlform = document.getElementById("myform");
               let clean = document.getElementById("myform");

              
                 
                let table = document.getElementsByTagName('table')[0];
                  
                
                 let row = table.insertRow(table.rows.length/2+1);
                  
                 if(htmlform.checkValidity()){

                  let cel1 = row.insertCell(0);
                  let cel2 = row.insertCell(1);
                  let cel3 = row.insertCell(2);
                  let cel4 = row.insertCell(3);
                  let cel5 = row.insertCell(4);
                  let cel6 = row.insertCell(5);
                  let cel7 = row.insertCell(6);
                  let cel8 = row.insertCell(7);
                  let str = [];
               
                  // add values to the cells
                  cel1.innerHTML = fname;
                  cel2.innerHTML = lname;
                  cel3.innerHTML = addr;
                  cel4.innerHTML = pincode;
                  cel5.innerHTML = gender;
                  for(i=0;i<5;i++)
                  {
                      if(food[i].checked === true)
                      {
                          str.push(food[i].value);
                      }
                  }
                  cel6.innerHTML = str.join(", ");
                  cel7.innerHTML = state;
                  cel8.innerHTML = country;

                  clean.reset();
                  return false;

                }

            }