
let craft = document.querySelector("#craft");
let launch = document.querySelector("#launch");
let satellite = document.querySelector("#satell");
let centre = document.querySelector("#centre");
let url= "";


craft.addEventListener("click", function() {


console.log("craft")

url = 'https://isro.vercel.app/api/spacecrafts';
getdata1();


});

launch.addEventListener("click", function() {


    console.log("launch")
    
  url =   'https://isro.vercel.app/api/launchers';
  
    getdata2();
    
    
    });

    satellite.addEventListener("click", function() {


        console.log("satellite")
                
        url ='https://isro.vercel.app/api/customer_satellites';      
        
        getdata3();
        
        
        
        });
centre.addEventListener("click", function() {


            console.log("centre");
   
          url='https://isro.vercel.app/api/centres';
          
          getdata4(); 
            
            });



function getdata1() {

async function fetchm() {
    const response = await fetch(url);
    const m = await response.json();
    return m;
  }
  fetchm().then(m1 => {
let arr= [];
let len;
 
    len = m1.spacecrafts.length;
     arr = m1.spacecrafts;


let containerall = document.querySelectorAll("#view");

for(let j=0;j<containerall.length;j++)    
{
    while (containerall[j].firstChild) {
        containerall[j].removeChild(containerall[j].firstChild);
    }
}




let view = document.querySelector("#view");
let element = document.createElement("div");

   
    
element.innerHTML= `
<table class="table table-bordered table-dark"  id="table">
              <thead>
                <tr>
                  <th scope="col">S.NO</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
             
            </table>
      `
view.appendChild(element);


      let tabl = document.querySelector("#table");

 for(let i=0;i<len;i++)
 {

    let row = document.createElement("tbody");

   row.innerHTML = `
   <tr>
       <th scope="row" id="no">1</th>
       <td id="detail"></td>   
       </tr>
 
   `
    tabl.appendChild(row);
 }     

 let no = document.querySelectorAll("#no");
 let detail = document.querySelectorAll("#detail");

 for(let i=0;i<len;i++)
 {
no[i].innerHTML = arr[i].id;
detail[i].innerHTML = arr[i].name;
 }
      
  });

}

function getdata2() {

    async function fetchm() {
        const response = await fetch(url);
        const m = await response.json();
        return m;
      }
      fetchm().then(m1 => {

    let arr= [];
    let len;
    
        len = m1.launchers.length;
         arr = m1.launchers;
         console.log(arr);
    
    
    let containerall = document.querySelectorAll("#view");
    
    for(let j=0;j<containerall.length;j++)    
    {
        while (containerall[j].firstChild) {
            containerall[j].removeChild(containerall[j].firstChild);
        }
    }
    
    
    
    
    let view = document.querySelector("#view");
    let element = document.createElement("div");
    
       
        
    element.innerHTML= `
    <table class="table table-bordered table-dark table-striped"  id="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                    </tr>
                  </thead>
                 
                </table>
          `
    view.appendChild(element);
    
    
          let tabl = document.querySelector("#table");
    
     for(let i=0;i<len;i++)
     {
    
        let row = document.createElement("tbody");
    
       row.innerHTML = `
       <tr>
           <th scope="row" id="name">1</th>
           </tr>
     
       `
        tabl.appendChild(row);
     }     
    
     let name = document.querySelectorAll("#name");
 
    
     for(let i=0;i<len;i++)
     {
    name[i].innerHTML = arr[i].id;
     }
          
      });
    
    }


    function getdata3() {

        async function fetchm() {
            const response = await fetch(url);
            const m = await response.json();
            return m;
          }
          fetchm().then(m1 => {
        let arr= [];
        let len;

        len = m1.customer_satellites.length;
        arr = m1.customer_satellites;
            
        console.log(m1);
        
        
        let containerall = document.querySelectorAll("#view");
        
        for(let j=0;j<containerall.length;j++)    
        {
            while (containerall[j].firstChild) {
                containerall[j].removeChild(containerall[j].firstChild);
            }
        }
        
        
        
        
        let view = document.querySelector("#view");
        let element = document.createElement("div");
        
           
            
        element.innerHTML= `
        <table class="table table-bordered table-dark"  id="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Country</th>
                           <th scope="col">Launch Date</th>
                          <th scope="col">Mass</th>
                          <th scope="col">Launcher</th>
                        </tr>
                      </thead>
                     
                    </table>
              `
        view.appendChild(element);
        
        
              let tabl = document.querySelector("#table");
        
         for(let i=0;i<len;i++)
         {
        
            let row = document.createElement("tbody");
        
           row.innerHTML = `
           <tr>
               <th scope="row" id="no">1</th>
               <td id="country"></td>  
               <td id="date"></td>  
               <td id="mass"></td>  
               <td id="launcher"></td>  


               </tr>
         
           `
            tabl.appendChild(row);
         }     
        
         let no = document.querySelectorAll("#no");

         let country = document.querySelectorAll("#country");
         let date = document.querySelectorAll("#date");
         let mass = document.querySelectorAll("#mass");
         let launcher = document.querySelectorAll("#launcher");
        
         for(let i=0;i<len;i++)
         {
        no[i].innerHTML = arr[i].id;
        country[i].innerHTML = arr[i].country;
        date[i].innerHTML = arr[i].launch_date;
        mass[i].innerHTML = arr[i].mass;
        launcher[i].innerHTML = arr[i].launcher;
        
         }
              
          });
        
        }




        function getdata4() {

          async function fetchm() {
              const response = await fetch(url);
              const m = await response.json();
              return m;
            }
            fetchm().then(m1 => {
          let arr= [];
          let len;
  
          len = m1.centres.length;
          arr = m1.centres;
              
          console.log(m1);
          
          
          let containerall = document.querySelectorAll("#view");
          
          for(let j=0;j<containerall.length;j++)    
          {
              while (containerall[j].firstChild) {
                  containerall[j].removeChild(containerall[j].firstChild);
              }
          }
          
          
          
          
          let view = document.querySelector("#view");
          let element = document.createElement("div");
          
             
              
          element.innerHTML= `
          <table class="table table-bordered table-dark"  id="table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                             <th scope="col">Place</th>
                            <th scope="col">State</th>
                          </tr>
                        </thead>     
                      </table>
                `
          view.appendChild(element);
          
          
                let tabl = document.querySelector("#table");
          
           for(let i=0;i<len;i++)
           {
          
              let row = document.createElement("tbody");
          
             row.innerHTML = `
             <tr>
                 <th scope="row" id="no">1</th>
                 <td id="name"></td>  
                 <td id="place"></td>  
                 <td id="state"></td>  
               
  
  
                 </tr>
           
             `
              tabl.appendChild(row);
           }     
          
           let no = document.querySelectorAll("#no");
  
           let name = document.querySelectorAll("#name");
           let place = document.querySelectorAll("#place");
           let state = document.querySelectorAll("#state");
          
           for(let i=0;i<len;i++)
           {
          no[i].innerHTML = arr[i].id;
          name[i].innerHTML = arr[i].name;
          place[i].innerHTML = arr[i].Place;
          state[i].innerHTML = arr[i].State;
        
          
           }
                
            });
          
          }