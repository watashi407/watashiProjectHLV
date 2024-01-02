const getRecords = async (zohoModule,zohoId)  => {
   const getData = await window.ZOHO.CRM.API.getRecord({ Entity: zohoModule, approved: "both", RecordID:zohoId })
   const specificData = await getData.data;
   {
    return specificData[0];
   }


}


const uiPage = () => { ZOHO.CRM.UI.Resize({height:"300",width:"500"}).then(function(){
});
}

export {getRecords , uiPage}