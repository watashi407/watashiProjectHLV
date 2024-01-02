import {getRecords , uiPage} from "./zoho.js"
 
const root = document.querySelector(".root")





ZOHO.embeddedApp.on("PageLoad",function(data)
{
  uiPage()
  const {Entity,EntityId} = data;
  const responseFromModule = getRecords(Entity,EntityId[0])
  mutateData(responseFromModule);

})


const mutateData = async (value) => {
    const response = await value;
    
    console.log(response.First_Name)

    root.innerHTML = response.First_Name;
    
    

  };



ZOHO.embeddedApp.init();